import { useTypeContext } from '@/context/TypeContext';
import { AppInfo } from '../AppInfo';
import { TransactInfo } from '../Transact';
import { PaymentInfo } from '../payments';
import Circle from '@/assets/images/bcircle.svg';
import { Banner } from '../Banner';
export const InfoSection: React.FC = () => {
  const { type } = useTypeContext();
  return (
    <div
      style={{
        backgroundImage: `url(${Circle.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:
          type === 'Businesses'
            ? 'right 0px bottom 120px'
            : 'right 0px bottom 53%',
      }}
    >
      <PaymentInfo />
      <AppInfo />
      {type === 'Individuals' && <TransactInfo />}
      <Banner />
    </div>
  );
};
