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
}