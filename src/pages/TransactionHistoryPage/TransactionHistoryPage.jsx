import { useSelector } from "react-redux";

import TransactionList from "../../components/TransactionList/TransactionList";

import { selectWallet } from "../../redux/wallet/wallet-selectors";

const TransactionHistoryPage = () => {

    const transactions = useSelector(selectWallet);
    const isTransactions = Boolean(transactions.length);

    return (
        <div>
            {isTransactions && <TransactionList/>}
            {!isTransactions && "Your transactions will be displayed here"}
        </div>
    );
  };
  
  export default TransactionHistoryPage;