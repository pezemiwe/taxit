import Image from 'next/image';
import Styles from './app.module.css';
import RightPanel from '@/assets/images/right-panel.svg';
import BizRightPanel from '@/assets/images/bizright-panel.svg';
import { useTypeContext } from '@/context/TypeContext';
export const AppInfo: React.FC = () => {
  const { type } = useTypeContext();
  const data = [
    {
      title: 'Pay bills',
      subtitle: 'Paying your bills has never been so easy.',
    },
    {
      title: 'Buy Airtime & Data',
      subtitle: 'Never get caught with low airtime and data again!',
    },
    {
      title: 'Money Transfer',
      subtitle: 'Transferring money is now hassle-free.',
    },
    {
      title: 'Pay Toll Fee',
      subtitle: 'Never worry about getting a toll ticket again.',
    },
  ];
  const bizdata = [
    {
      title: 'Payment',
      subtitle:
        'No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere',
    },
    {
      title: 'Payroll',
      subtitle:
        'End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.',
    },
    {
      title: 'Payslip',
      subtitle:
        'Generates automated TaxiTPaySlip email notifications for each employee/user.',
    },
    {
      title: 'Reports',
      subtitle:
        'Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.',
    },
  ];
  return (
    <div className={Styles.info}>
      <div className={Styles.container}>
        <div className={Styles.line}>
          <div
            className={Styles.lineInner}
            style={{
              alignSelf: type === 'Businesses' ? 'flex-end' : 'flex-start',
            }}
          ></div>
        </div>
        <div className={Styles.contentContainer}>
          {(type === 'Businesses' ? bizdata : data).map((item, index) => (
            <div className={Styles.content} key={index}>
              <p className={Styles.title}>{item.title}</p>
              <p
                className={Styles.subtitle}
                style={{
                  marginBottom: index === 3 ? '0' : '40px',
                }}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={type === 'Businesses' ? BizRightPanel : RightPanel}
        alt='right-panel'
        className={Styles.image}
      />
    </div>
  );
};
