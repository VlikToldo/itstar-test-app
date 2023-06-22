import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

const TransactionHistoryPage = lazy(() =>
  import("../pages/TransactionHistoryPage/TransactionHistoryPage")
);
const ErrorPage = lazy(()=> import("../pages/ErrorPage/ErrorPage"))
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
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
