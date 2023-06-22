import { NavLink } from "react-router-dom";

import styles from './error-page.module.css'

const ErrorPage = () => {
  return (
    <div>
      <h3>Not found</h3>
      <ul className={styles.navLinkList}>
        <li >
          <NavLink className={styles.navLinkItem} to="/">Go to Wallet</NavLink>
        </li>
        <li >
          <NavLink className={styles.navLinkItem} to="/transactions-history">Go to History</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
