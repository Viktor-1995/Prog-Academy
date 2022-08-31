import "./App.css";
import Countries from "./components/Countries";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ThemeContext from "./context/ThemeContext";
import Profile from "./components/Profile";
import Message from "./components/Message";

function App() {
    const [theme, setTheme] = useState("bg-light");
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        adress: "",
        number: "",
    });
    const [message, setMessage] = useState("");
    const [vision, setVision] = useState("hide");
    // я не понял как сделать что б сообщение через время пропадли
    // useEffect(() => {
    //     setTimeout(() => setVision("hide"), 2000);
    // }, [message]);

    return (
        <div className={`p-4 ${theme}`} id="app">
            {/* <Countries /> */}
            <div className={`message ${vision}`}>
                <Message message={message} setVision={setVision} />
            </div>
            <div className="header container p-2  ">
                <Profile
                    setVision={setVision}
                    setProfile={setProfile}
                    profile={profile}
                    message={message}
                    setMessage={setMessage}
                />
            </div>
            <ThemeContext.Provider
                value={{
                    theme,
                    setTheme,
                    profile,
                    message,
                    setMessage,
                    setVision,
                }}
            >
                <Products />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
