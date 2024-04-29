import React from 'react';
import Styles from './footer.module.css';
import Logo from '@/assets/images/tpay_logo.svg';
import Image from 'next/image';
import Facebook from '@/assets/icons/facebook-ic.svg';
import Twitter from '@/assets/icons/twitter-ic.svg';
import Instagram from '@/assets/icons/instagram-ic.svg';

export const Footer: React.FC = () => {
  const socials = [
    {
      image: Instagram,
      link: 'https://www.instagram.com',
      title: 'Instagram',
    },
    {
      image: Facebook,
      link: 'https://www.facebook.com',
      title: 'Facebook',
    },
    {
      image: Twitter,
      link: 'https://twitter.com',
      title: 'Twitter',
    },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <Image src={Logo} alt='logo' />
        <div className={Styles.socials}>
          {socials.map((item, index) => (
            <a href={item.link} key={index}>
              <Image
                src={item.image}
                alt={item.title}
                className={Styles.social}
              />
            </a>
          ))}
        </div>
        <p className={Styles.copyright}>
          2015-2022 Taxaide Technologies Limited. All rights reserved
        </p>
      </div>
      <div className={Styles.links}>
        <div
          className={Styles.link}
          style={{
            marginRight: '84px',
          }}
        >
          <p className={Styles.heading}>About Us</p>
          {['About', 'Legal & privacy'].map((item, index) => (
            <a href='' className={Styles.lnk} key={index}>
              {item}
            </a>
          ))}
        </div>
        <div className={Styles.link} style={{ width: '163px' }}>
          <p className={Styles.heading}>Products</p>
          {['TBook®', 'TaxiTWithhold®', 'TaxiTPayroll®'].map((item, index) => (
            <a href='' className={Styles.lnk} key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
