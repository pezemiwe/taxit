import { Button } from '../button';
import Styles from './hero.module.css';
export const Business: React.FC = () => {
  return (
    <div className={Styles.business}>
      <h3 className={Styles.heading}>
        Manage payroll, compliance <br />& HR in real time
      </h3>
      <p className={Styles.para}>
        Make income tax remittances to the state internal revenue <br />
        service for your employees.
      </p>
      <Button text='Create free account' width='190px' />
    </div>
  );
};
