import styles from "../styles/Home.module.css";

export default function Home() {
  const onClick = () => {
    window.location.assign("/about");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Homepage</h1>
        <button onClick={onClick}>About page</button>
      </main>
    </div>
  );
}
