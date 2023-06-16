import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import UserDashboard from "@/components/userDashboard/UserDashboard";
import DailyPayment from "@/components/DailyPayment/DailyPayment";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { AppContext } from "../AppState.js";
import React, { useContext } from "react";
import { useRouter } from "next/router";
// import { getSession } from "next-auth/client";
import { getSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Payment Tracker</title>
        <meta name="payment tracker" content="Track your monthly payment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.motherContainer}>
        <UserDashboard />
        {session && <DailyPayment title={"Monthly Payment"} />}
      </main>
    </>
  );
}
