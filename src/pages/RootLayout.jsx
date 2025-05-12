import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;
