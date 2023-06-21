const calculateTotal = (transactions) => {
  const total = transactions.reduce((accumulator, transaction) => {
    return accumulator + Number(transaction.total);
  }, 0);
  return total;
};

export default calculateTotal;