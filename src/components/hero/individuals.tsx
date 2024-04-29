import Styles from './hero.module.css';
import Image from 'next/image';
import Hero from '@/assets/images/hero-individual.svg';
import { Button } from '../button';
export const Individuals: React.FC = () => {
  return (
    <div className={Styles.box}>
      <div className={Styles.content}>
        <h3 className={Styles.heading}>
          Secure & seamless
          <br /> online transactions
        </h3>
        <p className={Styles.para}>
          Providing you with the best online payment experience
        </p>
        <Button text='Create free account' width='190px' />
      </div>
      <Image src={Hero} alt='Individuals' className={Styles.heroImage} />
    </div>
  );
};
