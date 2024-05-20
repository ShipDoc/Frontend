import { useState } from "react";
import Header from "../../components/Main/Header";
import Banner from "../../components/Main/Banner";
import MainSection from "../../components/Main/MainSection";

export default function Home() {
  const [user, setUser] = useState("User");
  return (
    <>
      <Header user={user} />
      <div>
        <Banner />
        <MainSection />
      </div>
    </>
  )
}