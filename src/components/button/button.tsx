import styles from './button.module.css';
interface ButtonProps {
  text: string;
  width?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, width, variant }) => {
  return (
    <button
      className={variant === 'secondary' ? styles.secondary : styles.primary}
      style={{ width: width }}
    >
      {text}
    </button>
  );
};
