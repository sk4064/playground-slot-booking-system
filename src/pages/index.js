import Head from "next/head";
import Admin from "../components/Admin";
import Login from "../components/Admin/Login";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage?.getItem("slot_pass"));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Slot Booking</title>
      </Head>
      {token ? <Admin /> : <Login />}
    </>
  );
}
