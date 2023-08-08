import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header";

export const PageLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}