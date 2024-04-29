import { Button } from '../button';
import Styles from './banner.module.css';
import BannerImage from '@/assets/images/comp.svg';
export const Banner: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div
        className={Styles.image}
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0px bottom 0px',
        }}
      >
        <div className={Styles.content}>
          <p className={Styles.bold}>Send funds</p>
          <p className={Styles.regular}>Remit taxes</p>
          <p
            className={Styles.regular}
            style={{
              marginBottom: '37px',
            }}
          >
            Buy utilities
          </p>
          <Button text='Get Started' width='190px' variant='secondary' />
        </div>
      </div>
    </div>
  );
};
