"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
} from "./ui/animated-modal";
import { ArrowRight } from "lucide-react";

interface AnimatedModalDemoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function AnimatedModalDemo({ className, ...props }: AnimatedModalDemoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Modal>
        <ModalTrigger {...props} className="bg-white dark:bg-black dark:text-white text-black flex justify-center group/modal-btn w-[180px] h-[44px]">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-medium">
            {props.children || "Book Appointment"}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <ArrowRight className="h-6 w-6 text-black" />
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}