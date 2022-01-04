<<<<<<< HEAD
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
=======
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LayoutWelcome from "./layouts/LayoutWelcome";
import LayoutHome from "./layouts/LayoutHome";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import NoMatchApp from "./pages/NoMatchApp";
import NoMatchHome from "./pages/NoMatchHome";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Animation from "./pages/modules/animation/MainAnimation";
import Economy from "./pages/modules/economy/MainEconomy";
import Security from "./pages/modules/security/MainSecurity";
import RequiredAuth from "./utils/RequiredAuth";
import RequiredCompanyRole from "./utils/RequiredCompanyRole";
import Company from "./pages/modules/company/MainCompany";
import Profile from "./pages/auth/Profil";
import http from "./http-common.js";

http.interceptors.request.use(function(config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutWelcome />}>
                        <Route index element={<Welcome />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="register" element={<Register />}/>
                        <Route path="*" element={<NoMatchApp />} />
                    </Route>
                    <Route path="/app/" element={<LayoutHome />}>
                        <Route index element={<Home />}/>
                        <Route path="anim" element={<Animation />} />
                        <Route path="eco" element={<Economy />}/>
                        <Route path="secu" element={<Security />}/>
                        <Route path="profil" element={
                            <RequiredAuth>
                                <Profile />
                            </RequiredAuth>
                        }/>
                        <Route path="company" element={
                            <RequiredAuth>
                                <RequiredCompanyRole>
                                    <Company />
                                </RequiredCompanyRole>
                            </RequiredAuth>
                        }/>
                        <Route path=":pageName" element={<NoMatchHome />} />
                        <Route path="*" element={<NoMatchHome />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
>>>>>>> develop
}