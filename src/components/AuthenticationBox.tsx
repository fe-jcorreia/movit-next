import styles from "../styles/components/AuthenticationBox.module.css";

export function AuthenticationBox() {
  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="logo" />
      <h1>Bem-vindo</h1>
      <div>
        <img src="/icons/github.svg" alt="Github logo" />
        <p>Faça login com seu github para começar</p>
      </div>
      <form>
        <input type="text" placeholder="Digite seu username" />
        <button>
          <img src="/icons/vector.svg" />
        </button>
      </form>
    </div>
  );
}
