import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Security from "../Pages/Security/Security";
import NoPage from "../Pages/Home/NoPage/NoPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/secAndComp" element={<Security />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
