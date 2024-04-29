import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import Logo from '@/assets/images/tpay_logo.svg';
import { Button } from '../button';

interface NavbarProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<NavbarProps> = ({ type, setType }) => {
  const data = [
    {
      type: 'Individuals',
      title: 'For Individuals',
    },
    {
      type: 'Businesses',
      title: 'For Businesses',
    },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.navpack}>
        <a href='/' className={styles.logo}>
          <Image src={Logo} alt='logo' />
        </a>
        <ul className={styles.navItems}>
          {data.map((item) => (
            <a
              key={item.title}
              className={`${styles.navItemA} ${
                type === item.type ? styles.active : styles.inactive
              }`}
              onClick={() => {
                type === item.type ? setType('') : setType(item.type);
              }}
            >
              <li>{item.title}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className={styles.btnpack}>
        <ul className={styles.navItems}>
          {['About Us', 'Contact'].map((item) => (
            <a href='/' key={item} className={styles.navItemB}>
              <li>{item}</li>
            </a>
          ))}
          <li className={styles.stroke}></li>
          <a href='/' className={styles.navItemB}>
            <li>Login</li>
          </a>
        </ul>
        <div className={styles.navBtn}>
          <Button text='Create free account' />
        </div>
      </div>
    </nav>
  );
};
