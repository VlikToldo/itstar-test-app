import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./transaction-form.module.css";
import initialState from "./initialState";

import { addTransactions } from "../../redux/wallet/wallet-slice";
import calculateTotal from "../../shared/utils/calculateTotal";
import calculateBalance from "../../shared/utils/calculateBalance";
import { selectExpenseTransactions, selectSalaryTransactions } from "../../redux/wallet/wallet-selectors";

import swal from "sweetalert";

const TransactionForm = () => {
  const [state, setState] = useState({ ...initialState });

  const dispatch = useDispatch();

  const salaryTransactions = useSelector(selectSalaryTransactions);
  const expenseTransactions = useSelector(selectExpenseTransactions);

  const checkBalance = (total, type) => {
    const salary = calculateTotal(salaryTransactions);
    const expense = calculateTotal(expenseTransactions);
    const totalBalance = calculateBalance(salary, expense);
    
    if (type === "expense" && totalBalance < Number(total)) {
      return true;
    }
    return false;
  };

  const handleAddContact = ({ name, total, type }) => {
    if (checkBalance(total, type)) {
      swal("Insufficient funds", "Go work");
      return;
    }
    dispatch(addTransactions({ name, total, type }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ ...initialState });
  };

  const { name, total, type } = state;

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>

        </div>
        <div className={styles.boxInput}>
          <label>Transaction Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className={styles.textField}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.boxInput}>
          <label>Total</label>
          <input
            type="number"
            name="total"
            value={total}
            className={styles.textField}
            onChange={handleChange}
            max="100000"
            title="Тo more than 100,000"
            required
          />
        </div>
        <div className={styles.boxInput}>
          <label>Type</label>
          <select value={type} name="type" onChange={handleChange}>
            <option className={styles.textField} value="salary" selected >Salary</option>
            <option className={styles.textField} value="expense">Expense</option>
          </select>
        </div>

        <button className={styles.buttonAdd}>Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
