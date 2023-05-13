import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import { useLayoutStyles } from "./useLayoutStyles";

export const Layout = () => {
  const layoutStyle = useLayoutStyles();

  return (
    <>
      <Header />
      <div className={layoutStyle.layout}>
        <Outlet />
      </div>
    </>
  );
};
