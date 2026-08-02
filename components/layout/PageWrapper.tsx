import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}