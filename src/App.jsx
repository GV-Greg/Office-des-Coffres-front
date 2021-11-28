import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout.jsx';
import Home from './pages/Welcome.jsx';
import NoMatch from './pages/404.jsx';
import Anim from "./pages/modules/anim/MainAnimation.jsx";
import Eco from "./pages/modules/eco/MainEconomie.jsx";
import Secu from "./pages/modules/secu/MainSecurite.jsx";
import Profil from "./pages/auth/Profil.jsx";
import Admin from "./pages/admin/MainAdmin.jsx";
import Users from "./pages/admin/users/ListUsers.jsx";
import User from "./pages/admin/users/ShowUser.jsx";
import Company from "./pages/modules/company/MainCompany.jsx";
import Login from "./pages/auth/Login.jsx";

export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="anim" element={<Anim />} />
              <Route path="eco" element={<Eco />}/>
              <Route path="secu" element={<Secu />}/>
              <Route path="profil" element={<Profil />}/>
              <Route path="admin" element={<Admin />}>
                  <Route path="users" element={<Users />}>
                      <Route path=":userId" element={<User />} />
                  </Route>
              </Route>
              <Route path="company" element={<Company />}/>
              <Route path="login" element={<Login />}/>
              <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
  );
}