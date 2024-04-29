'use client';
import React from 'react';
import styles from './page.module.css';
import { Footer, Hero, InfoSection } from '@/components';
import { TypeContext } from '@/context/TypeContext';

export default function Home() {
  const [type, setType] = React.useState('Individuals');
  const contextValue = {
    type,
    setType,
  };
  return (
    <TypeContext.Provider value={contextValue}>
      <main className={styles.main}>
        <Hero />
        <InfoSection />
        <Footer />
      </main>
    </TypeContext.Provider>
  );
}
