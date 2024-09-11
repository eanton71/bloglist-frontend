
import styles from '../styles/notification.module.css'
const Notification = ({ sucess, error }) => {
  if (sucess) {
    return <div className={styles.sucess}>{sucess}</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
};
export default Notification;
