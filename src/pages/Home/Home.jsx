import { useState } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Home() {
  const [user, setUser] = useState("User");
  return (
    <>
      <Header user={user} />
      <Banner />
    </>
  )
}