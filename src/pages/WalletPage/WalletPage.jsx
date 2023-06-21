import TransactionForm from "../../components/TransactionForm/TransactionForm";
import WalletList from "../../components/WalletList/WalletList";
import Palindrome from "../../components/Palindrome/Palindrome";

import styles from "./wallet-page.module.css";

const WalletPage = () => {
  return (
    <div className={styles.boxWallet}>
      <div>
        <h3>Add transaction</h3>
        <TransactionForm />
      </div>
      <div>
        <h3>Report</h3>
        <WalletList />
      </div>
      <div>
        <h3>Palindrome</h3>
        <Palindrome/>
      </div>
    </div>
  );
};

export default WalletPage;
