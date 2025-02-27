import styles from './App.module.css';

type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <h1>{text}</h1>;
};

const App = () => {
  return (
    <div className={styles.content}>
      <Message text="Hi there!" />
    </div>
  );
};

export default App;
