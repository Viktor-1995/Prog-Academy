import "./App.css";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ThemeContext from "./context/ThemeContext";
import Profile from "./components/Profile";
import Message from "./components/Message";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutCompany from "./staticpages/AboutCompany";

function App() {
    const [theme, setTheme] = useState("bg-light");
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        adress: "",
        number: "",
    });
    const [messageObj, setMessageObj] = useState({});
    const [vision, setVision] = useState("hide");
    useEffect(() => {
        let savedProfile = localStorage.getItem("profile");
        if (savedProfile) {
            savedProfile = JSON.parse(savedProfile);
            setProfile(savedProfile);
        }
    }, []);
    // console.log(messageObj);
    return (
        <div className={`p-4 ${theme}`} id="app">
            <ThemeContext.Provider
                value={{
                    theme,
                    setTheme,
                    profile,
                    messageObj,
                    setMessageObj,
                    setVision,
                    setProfile,
                }}
            >
                <Message
                    messageObj={messageObj}
                    setMessageObj={setMessageObj}
                    vision={vision}
                    setVision={setVision}
                />
                <BrowserRouter>
                    <Header profile={profile} />

                    <Routes>
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    setVision={setVision}
                                    setProfile={setProfile}
                                    profile={profile}
                                    messageObj={messageObj}
                                    setMessageObj={setMessageObj}
                                />
                            }
                        />
                        <Route path="/" element={<Products />}>
                            <Route
                                path=":productId"
                                element={<SingleProduct />}
                            ></Route>
                        </Route>

                        <Route
                            path="/aboutCompany"
                            element={<AboutCompany />}
                        />
                        <Route
                            path="*"
                            element={
                                <div
                                    className="container text-align-center"
                                    style={{ padding: "1rem" }}
                                >
                                    <h3>There's nothing here!</h3>
                                </div>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
