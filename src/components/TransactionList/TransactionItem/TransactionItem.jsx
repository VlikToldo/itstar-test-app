import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { removeTransaction } from "../../../redux/wallet/wallet-slice";

import styles from "./transaction-item.module.css";

const TransactionItem = ({ id, name, total, time, type }) => {
  const dispatch = useDispatch();

  const itemTransaction = type === "salary" ? styles.itemTransactionSalary : styles.itemTransactionExpanse;

  const handleRemoveTransaction = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={itemTransaction}>
      <h3>{type.toLowerCase()}</h3>
      <p>{name}: {total} $</p>
      <p>{time}</p>
      
      <button
        className={styles.buttonRemove}
        onClick={() => handleRemoveTransaction(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default TransactionItem;


TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
