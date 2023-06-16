import DailyPayment from '@/components/DailyPayment/DailyPayment'
import styles from '../styles/Earnings.module.css'

const Earnings = () => {
  return (
    <div className={styles.container}>
      <DailyPayment title={"Monthly Payment"} />
    </div>
  )
}

export default Earnings