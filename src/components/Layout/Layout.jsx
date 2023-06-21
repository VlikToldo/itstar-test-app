import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import style from './layout.module.css'

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <ul>
          <li>
            <NavLink className={style.navLink} to="/">
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navLink} to="/transactions-history">
              History
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={style.main}>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
