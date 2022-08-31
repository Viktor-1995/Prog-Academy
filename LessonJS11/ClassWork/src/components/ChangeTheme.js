import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Button } from "react-bootstrap";

function ChangeTheme() {
    let { theme, setTheme } = useContext(ThemeContext);
    console.log(theme, setTheme);
    return (
        <>
            {theme === "bg-light" ? (
                <Button variant={"dark"} onClick={() => setTheme("bg-dark")}>
                    Dark
                </Button>
            ) : (
                <Button variant={"light"} onClick={() => setTheme("bg-light")}>
                    Light
                </Button>
            )}
        </>
    );
}

export default ChangeTheme;
