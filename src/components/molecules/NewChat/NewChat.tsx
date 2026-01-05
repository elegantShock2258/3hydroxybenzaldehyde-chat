import styles from "./NewChat.module.sass";

export default function NewChat({ id }: { id?: string }) {
  return (
    <div className={styles.parent}>
      {id ? (
        <h1>
          Oops! This link is invalid!, You can start typing to initiate a chat
        </h1>
      ) : (
        <h1>Start Typing to Initiate a Chat</h1>
      )}
    </div>
  );
}
