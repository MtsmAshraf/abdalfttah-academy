"use client"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";

import styles from "./toggle-theme.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle({
    lo
} : {
    lo?: string
}) {
  const theme = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();
    
  const classNames = [
    lo === "ar" ? styles.ar : null,
    theme === "light" ? styles.light : null,
    styles.toggleTheme
    ] 

  return (
    <button className={classNames.join(" ")}
        onClick={() => dispatch(toggleTheme())}
        id={theme === "light" ? "light" : undefined}
    >
        {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
}
