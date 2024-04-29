import Image from 'next/image';
import Styles from './transact.module.css';
import Transact from '@/assets/images/transact.svg';
import Appstore from '@/assets/images/appstore.svg';
import Playstore from '@/assets/images/googleplay.svg';
import { Button } from '../button';
export const TransactInfo: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Image src={Transact} alt='transact' className={Styles.image} />
      <div className={Styles.content}>
        <p className={Styles.title}>Transact on the go</p>
        <p className={Styles.subtitle}>
          Stay on top of your business with our easy-to-use app
        </p>
        <Button text='Get Started' width='190px' />
        <div className={Styles.store}>
          <Image src={Appstore} alt='appstore' className={Styles.app} />
          <Image src={Playstore} alt='playstore' className={Styles.app} />
        </div>
      </div>
    </div>
  );
};
