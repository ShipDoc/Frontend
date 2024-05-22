import { useState } from "react";
import MainHeader from "../../components/Main/MainHeader";
import Banner from "../../components/Main/Banner";
import MainSection from "../../components/Main/MainSection";

export default function Home() {
  const [user, setUser] = useState("User");

  return (
    <>
      <MainHeader user={user} />
      <Banner />
      <MainSection />
    </>
  )
}