import Styles from './card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}
export const PaymentCard: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className={Styles.card}>
      <Image src={image} alt={title} className={Styles.cardImage} />
      <p className={Styles.title}>{title}</p>
      <p className={Styles.subtitle}>{subtitle}</p>
    </div>
  );
};
