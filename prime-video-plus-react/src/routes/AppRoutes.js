import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// the following comps are NOT lazily loaded
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import AddUser from "../pages/UsersPage/components/AddUser";
import UserDetails from "../pages/UsersPage/components/UserDetails";
import { ErrorBoundary } from "react-error-boundary";

// the following components are lazily loaded
const PrimeVideoPage = lazy(() =>
  import("../pages/PrimeVideoPage/PrimeVideoPage")
);
const UsersPage = lazy(() => import("../pages/UsersPage/UsersPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="spinner spinner-border"></div>}>
      <ErrorBoundary
        fallback={
          <div className="alert alert-danger">
            Some Error occured. Try again later!
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prime-video" element={<PrimeVideoPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          {/* Let's work with URL param (userId) -- for dynamic urls */}
          <Route path="/users/:userId" element={<UserDetails />} />
          {/* <Route path="/users/:userId/edit" element={<EditUser />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppRoutes;
