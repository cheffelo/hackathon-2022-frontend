import "../styles/globals.css";
import ClientOnlyComponent from "./components/ClientOnlyComponent";

function MyApp({ Component, pageProps }) {
  return (
    <ClientOnlyComponent>
      <Component {...pageProps} />
    </ClientOnlyComponent>
  );
}

export default MyApp;
