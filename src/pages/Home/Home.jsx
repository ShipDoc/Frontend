import { useEffect, useState } from "react";
import MainHeader from "../../components/Main/MainHeader";
import Banner from "../../components/Main/Banner";
import MainSection from "../../components/Main/MainSection";
import CategoryDetailComponent from "../../components/Main/CategoryDetailComponent";
import MainFooter from "../../components/Main/MainFooter";

export default function Home() {
    const [user, setUser] = useState("User");

    useEffect(() => {
        setUser(localStorage.getItem("username"));
    }, []);

    return (
        <>
            <MainHeader user={user} />
            <Banner />
            <MainSection home="home" />
            <CategoryDetailComponent home="home" />
            <MainFooter />
        </>
    );
}
