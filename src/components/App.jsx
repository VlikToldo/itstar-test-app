import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

const TransactionHistoryPage = lazy(() =>
  import("../pages/TransactionHistoryPage/TransactionHistoryPage")
);
const WalletPage = lazy(() => import("../pages/WalletPage/WalletPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WalletPage />} />
        <Route
          path="transactions-history"
          element={<TransactionHistoryPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
