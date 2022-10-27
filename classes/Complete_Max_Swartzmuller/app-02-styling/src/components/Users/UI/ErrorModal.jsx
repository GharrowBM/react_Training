import styles from "./ErrorModal.module.css";

function ErrorModal({ title, content, onErrorAcknowledged }) {
  return (
    <div className={styles["modal-bg"]}>
      <div className={styles["modal-fg"]}>
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <p>{content}</p>
        </main>
        <footer>
          <button onClick={onErrorAcknowledged}>OK</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
