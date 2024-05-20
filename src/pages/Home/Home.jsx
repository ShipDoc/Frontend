import { useState } from "react";
import Header from "../../components/Header";

export default function Home() {
  const [user, setUser] = useState("User");
  return (
    <>
      <Header user={user} />
    </>
  )
}