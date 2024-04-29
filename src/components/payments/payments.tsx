import { useTypeContext } from '@/context/TypeContext';
import Styles from './payments.module.css';
import { PaymentCard } from '../PaymentCard';
import EMI from '@/assets/icons/EMI.svg';
import Transfer from '@/assets/icons/Money_Transfer.svg';
import Security from '@/assets/icons/Security.svg';

export const PaymentInfo: React.FC = () => {
  const { type } = useTypeContext();

  const data = [
    {
      title: 'User Friendly',
      subtitle: 'Highly responsive and easy to navigate',
      image: Transfer,
    },
    {
      title: 'Secure',
      subtitle:
        'Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.',
      image: Security,
    },
    {
      title: 'Fast',
      subtitle:
        'Transacting takes only a few seconds - it"s convenient and safe.',
      image: EMI,
    },
  ];

  return (
    <div
      className={Styles.container}
      style={{
        paddingTop: type === 'Businesses' ? '539px' : '100px',
      }}
    >
      <h3 className={Styles.title}>Payments tools designed for you</h3>
      <p className={Styles.subtitle}>
        Explore payment features that provides you with every possible solution
      </p>
      <div className={Styles.cards}>
        {data.map((item) => (
          <PaymentCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
