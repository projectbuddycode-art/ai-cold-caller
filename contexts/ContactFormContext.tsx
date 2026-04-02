'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ContactFormModal from '@/components/ContactFormModal';

interface ContactFormContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
  isOpen: boolean;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ openContactForm, closeContactForm, isOpen }}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within ContactFormProvider');
  }
  return context;
}
