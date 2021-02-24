import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider value={{}}>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
