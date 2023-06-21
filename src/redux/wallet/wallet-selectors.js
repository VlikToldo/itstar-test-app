import { createSelector } from "@reduxjs/toolkit";

export const selectWallet = ({ transactions }) => transactions;
export const selectSalaryTransactions = createSelector(
  [selectWallet],
  (transactions) => {
    return transactions.filter((item) => item.type === "salary");
  }
);

export const selectExpenseTransactions = createSelector(
  [selectWallet],
  (transactions) => {
    return transactions.filter((item) => item.type === "expense");
  }
);

export const getSortTransactions = createSelector(
  [selectWallet],
  (transactions) => {
    const newArray = [...transactions];
    newArray.sort(function (firstTr, secondTr) {
      return firstTr.time.getTime() - secondTr.time.getTime();
    });
    console.log(newArray);
  }
);
