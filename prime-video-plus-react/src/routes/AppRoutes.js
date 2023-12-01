import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PrimeVideoPage from "../pages/PrimeVideoPage/PrimeVideoPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import AddUser from "../pages/UsersPage/components/AddUser";
import UserDetails from "../pages/UsersPage/components/UserDetails";
import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prime-video" element={<PrimeVideoPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/add" element={<AddUser />} />
      {/* Let's work with URL param (userId) -- for dynamic urls */}
      <Route path="/users/:userId" element={<UserDetails />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
}

export default AppRoutes