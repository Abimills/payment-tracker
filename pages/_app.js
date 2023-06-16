import "@/styles/globals.css";
import Navbar from "../components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "../AppState.js";
import { styles } from "../styles/Home.module.css";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Navbar />
          <Component {...pageProps} />
        
      </AppProvider>
    </SessionProvider>
  );
}
