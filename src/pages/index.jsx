import styles from "../styles/pages/Authentication.module.css";
import { AuthenticationBox } from "../components/AuthenticationBox";

export default function Auth() {
  return (
    <div className={styles.container}>
      <img src="/simbol.svg" />
      <AuthenticationBox />
    </div>
  );
}
