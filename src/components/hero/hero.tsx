import React from 'react';
import { Navbar } from '@/components/navbar';
import styles from './hero.module.css';
import { Individuals } from './individuals';
import { Business } from './Business';
import Circle from '@/assets/images/circle-embellishment.svg';
import HeroImageBusiness from '@/assets/images/hero-business.svg';
import Image from 'next/image';
import { useTypeContext } from '@/context/TypeContext';
export const Hero: React.FC = () => {
  const { type, setType } = useTypeContext();

  return (
    <div className={styles.container}>
      {type === 'Businesses' && (
        <Image src={Circle} alt='circle' className={styles.circle} />
      )}
      <Navbar type={type} setType={setType} />
      {type === 'Individuals' ? <Individuals /> : <Business />}
      {type === 'Businesses' && (
        <Image
          src={HeroImageBusiness}
          alt='hero'
          className={styles.heroImageBiz}
        />
      )}
    </div>
  );
};
