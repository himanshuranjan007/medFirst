import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, X, Bot, MessageCircle } from 'lucide-react';
import { mode } from '../store/atom';
import { useRecoilValue } from 'recoil';

const Chatbot = ({isOpen, setIsOpen}) => {
  const [messages, setMessages] = useState([
    { 
      type: 'incoming', 
      text: 'Hi there! I can help you with:\n1) Hospital bed availability\n2) Website navigation\n3) Medical assistance\n\nWhat would you like to know?' 
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const chatboxRef = useRef(null);
  const textareaRef = useRef(null);
  const dark = useRecoilValue(mode); // Access the dark mode state
  const about_message =
    'At Med-Space, we envision a world where accessing outpatient care is as simple as a few clicks. By leveraging technology and innovation, we aim to provide a platform that bridges the gap between patients and healthcare providers, making high-quality care accessible to everyone, anywhere. Founder of Med-space is Luson Basumatary.';
  const loadConfig = useCallback(async () => {
    try {
      setApiKey('AIzaSyDzYCaGHbCHl36aHWZ9OupuEmYb8XswwRw'); 
      setApiUrl(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
      );
    } catch (error) {
      console.error('Error loading config:', error);
    }
  }, [apiKey]);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = async (message) => {
    if (!apiKey) return;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: message + about_message }],
          },
        ],
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message);
      return data.candidates[0].content.parts[0].text.replace(
        /\*\*(.*?)\*\*/g,
        '$1',
      );
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Sorry, I encountered an error. Please try again later.';
    }
  };

  const handleSpecialQueries = (message) => {
    // Convert numbers and variations to standardized queries
    const normalizedMessage = message.toLowerCase().trim();
    if (normalizedMessage === '1' || normalizedMessage === 'hospital bed' || normalizedMessage === 'bed availability') {
      return {
        type: 'incoming',
        text: 'Here\'s the current bed availability status:\n\n' +
              '1. Check real-time bed availability in nearby hospitals\n' +
              '2. Filter by department or ward type\n' +
              '3. View detailed hospital information\n\n' +
              'Click any option below to view hospitals:',
        actions: ['Check Availability', 'View Hospitals', 'Hospital Details']
      };
    }

    if (normalizedMessage === '2' || normalizedMessage.includes('website')) {
      return {
        type: 'incoming',
        text: 'I can help you navigate our website. Here are the main features:\n\n' +
              '1. Dashboard: Overview of all services\n' +
              '2. Appointments: Schedule doctor visits\n' +
              '3. Medical Records: Access your history\n' +
              '4. Emergency Services: Quick access to urgent care\n\n' +
              'Which feature would you like to explore?',
        actions: ['Dashboard', 'Appointments', 'Records', 'Emergency']
      };
    }

    if (normalizedMessage === '3' || normalizedMessage.includes('medical')) {
      return {
        type: 'incoming',
        text: 'I can assist you with medical information. Please specify your concern:\n\n' +
              '1. Find a specialist\n' +
              '2. Common symptoms and treatments\n' +
              '3. Emergency medical advice\n' +
              '4. Schedule a consultation\n\n' +
              'What kind of medical assistance do you need?',
        actions: ['Find Doctor', 'Symptoms Guide', 'Emergency Help', 'Book Consultation']
      };
    }

    // Handle bed-related queries
    const bedKeywords = ['bed', 'beds', 'available', 'booking', 'hospital bed'];
    if (bedKeywords.some(keyword => normalizedMessage.includes(keyword))) {
      return {
        type: 'incoming',
        text: 'Here\'s the real-time bed availability information:\n\n' +
              '• General Ward: 15 beds available\n' +
              '• ICU: 5 beds available\n' +
              '• Emergency: 8 beds available\n\n' +
              'Would you like to book a bed or get more details?',
        actions: ['Book Now', 'View Details', 'Contact Hospital']
      };
    }

    // Handle navigation queries
    const navigationKeywords = ['navigate', 'find', 'where', 'how to'];
    if (navigationKeywords.some(keyword => normalizedMessage.includes(keyword))) {
      return {
        type: 'incoming',
        text: 'Let me help you find what you\'re looking for. Our main sections are:\n\n' +
              '• Bed Booking: Check and reserve hospital beds\n' +
              '• Appointments: Schedule doctor visits\n' +
              '• Emergency: Quick access to urgent care\n' +
              '• Profile: Manage your medical records\n\n' +
              'Which section would you like to visit?',
        actions: ['Bed Booking', 'Appointments', 'Emergency', 'Profile']
      };
    }

    return null;
  };

  const handleActionClick = (action) => {
    // Redirect all bed-related actions to /hospitals
    switch(action) {
      case 'Check Availability':
      case 'View Hospitals':
      case 'Hospital Details':
      case 'View Available Beds':
      case 'Book Bed':
      case 'Get Directions':
      case 'Book Now':
      case 'View Details':
      case 'Contact Hospital':
        window.location.href = '/hospitals';
        break;
      // Keep other navigation options as they were
      case 'Dashboard':
        window.location.href = '/dashboard';
        break;
      case 'Appointments':
      case 'Book Consultation':
        window.location.href = '/appointments';
        break;
      case 'Records':
      case 'Profile':
        window.location.href = '/profile';
        break;
      case 'Emergency':
      case 'Emergency Help':
        window.location.href = '/emergency';
        break;
      case 'Find Doctor':
        window.location.href = '/doctors';
        break;
      case 'Symptoms Guide':
        window.location.href = '/medical-guide';
        break;
      default:
        setMessages(prev => [...prev, {
          type: 'incoming',
          text: 'I apologize, but that option is currently unavailable. Is there something else I can help you with?'
        }]);
        break;
    }
  };

  const handleChat = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = { type: 'outgoing', text: inputMessage };
    
    // Check for special queries first
    const specialResponse = handleSpecialQueries(inputMessage);
    
    if (specialResponse) {
      setMessages(prev => [...prev, userMessage, specialResponse]);
    } else {
      // Add thinking message
      setMessages(prev => [...prev, userMessage, { type: 'incoming', text: 'Thinking...' }]);
      
      // Generate response for other queries
      const response = await generateResponse(inputMessage);
      
      // Update messages with actual response
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove thinking message
        { type: 'incoming', text: response }
      ]);
    }
    
    setInputMessage('');
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <div className="relative z-50">
      <div className={`absolute bottom-[110%] right-0 ${isOpen ? "scale-100" : "scale-0"} origin-bottom-right duration-300 z-10 w-80 md:w-96 ${dark === "dark" ? "bg-[#141B2A]/50 backdrop-blur-[9px]" : "bg-white"}  rounded-lg shadow-xl max-h-[60vh] flex flex-col`}>
        <div className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Chatbot</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div ref={chatboxRef} className="flex-grow overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'outgoing' ? 'justify-end' : 'items-start'} mb-4`}
            >
              {message.type === 'incoming' && (
                <Bot size={24} className="mr-2 text-blue-500 flex-shrink-0" />
              )}
              <div className="flex flex-col gap-2">
                <div
                  className={`p-3 rounded-lg ${
                    message.type === 'outgoing'
                      ? 'bg-blue-500 text-white'
                      : `${dark === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`
                  } max-w-[80%]`}
                >
                  {message.text}
                </div>
                {message.actions && (
                  <div className="flex flex-wrap gap-2">
                    {message.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => handleActionClick(action)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 border-t ${dark === "dark" ? "border-t-gray-700" : ""}`}>
          <div className="flex items-center gap-2">
            <textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter a message..."
              className={`flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2  focus:ring-blue-500 max-h-12 ${dark === "dark" ? "bg-gray-800 text-gray-200" : "text-gray-800"} overflow-hidden`}
              rows={1}
            />
            <button
              onClick={handleChat}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
