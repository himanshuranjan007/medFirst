import React from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] group">
        <Image
          src="about-background.jpg" 
          alt="Hospital image"
          fill
          className="object-cover brightness-50 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white transform transition-all duration-500 hover:scale-105">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
              About Us
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-xl">
              Providing Quality Healthcare Services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="bg-orange-50 rounded-2xl p-8 mb-16 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            We are dedicated to revolutionizing healthcare delivery by providing 
            accessible, efficient, and high-quality medical services. Our goal is to 
            ensure every patient receives exceptional care while making the healthcare 
            journey as comfortable as possible.
          </p>
        </div>

        {/* Values Section with Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:from-orange-600 hover:to-orange-700">
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p>Committed to delivering the highest standard of medical care</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-6 rounded-xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:from-orange-500 hover:to-orange-600">
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p>Embracing cutting-edge medical technologies and practices</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:from-orange-600 hover:to-orange-700">
            <h3 className="text-xl font-bold mb-3">Compassion</h3>
            <p>Treating every patient with empathy and understanding</p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Meet Our Development Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-40 w-40 mx-auto mt-8 rounded-full overflow-hidden">
              <Image
                src="https://github.com/himanshuranjan007.png"
                alt="Himanshu Ranjan"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Himanshu Ranjan</h3>
              <p className="text-orange-600 mb-3 text-center">Lead Developer</p>
              <p className="text-gray-600 mb-4 text-center">Full-stack developer with expertise in healthcare systems</p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/himanshuranjan007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-orange-600"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-40 w-40 mx-auto mt-8 rounded-full overflow-hidden">
              <Image
                src="https://github.com/9prabhjot9.png"
                alt="Prabhjot Singh"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Prabhjot Singh</h3>
              <p className="text-orange-600 mb-3 text-center">Frontend Developer</p>
              <p className="text-gray-600 mb-4 text-center">Frontend specialist focused on creating intuitive user experiences</p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/9prabhjot9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-orange-600"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-40 w-40 mx-auto mt-8 rounded-full overflow-hidden">
              <Image
                src="https://github.com/waliilaw.png"
                alt="Abdul Wali"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Abdul Wali</h3>
              <p className="text-orange-600 mb-3 text-center">Backend Developer</p>
              <p className="text-gray-600 mb-4 text-center">Backend expert specializing in scalable architecture</p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/waliilaw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-orange-600"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-40 w-40 mx-auto mt-8 rounded-full overflow-hidden">
              <Image
                src="https://github.com/code-pankaj.png"
                alt="Pankaj Yadav"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Pankaj Yadav</h3>
              <p className="text-orange-600 mb-3 text-center">UI/UX Designer</p>
              <p className="text-gray-600 mb-4 text-center">Design specialist creating beautiful and functional interfaces</p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/code-pankaj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-orange-600"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
