import styles from './App.module.css';

export default function App() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.content}>
      <h1>Current Date</h1>
      <p>{currentDate}</p>
    </div>
  );
}
