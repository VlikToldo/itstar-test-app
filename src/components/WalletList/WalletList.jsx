import { useSelector } from "react-redux";

import calculateTotal from "../../shared/utils/calculateTotal";
import calculateBalance from "../../shared/utils/calculateBalance";

import { selectSalaryTransactions, selectExpenseTransactions } from "../../redux/wallet/wallet-selectors";

const TransactionList = () => {
  const salaryTransactions = useSelector(selectSalaryTransactions);
  const expenseTransactions = useSelector(selectExpenseTransactions);

  const salary = calculateTotal(salaryTransactions);
  const expense = calculateTotal(expenseTransactions);
  const totalBalance = calculateBalance(salary, expense);

  return (
    <div>
      <p>Salary: {salary}$</p>
      <p>Expense: {expense}$</p>
      <p>Balance: {totalBalance}$</p>
    </div>
  );
};

export default TransactionList;
