import { useSelector } from "react-redux";

import { selectWallet } from "../../redux/wallet/wallet-selectors";

import TransactionItem from "./TransactionItem/TransactionItem";

import styles from "./transaction-list.module.css"

const TransactionList = () => {
  const wallet = useSelector(selectWallet);

  const newArrayWallet = [...wallet];
  newArrayWallet.sort(function (firstTr, secondTr) {
    return new Date(secondTr.time).getTime() - new Date(firstTr.time).getTime();
  });

  const elements = newArrayWallet.map((item) => (
    <TransactionItem key={item.id} {...item} />
  ));

  return <ul className={styles.transactionList}>{elements}</ul>;
};

export default TransactionList;
