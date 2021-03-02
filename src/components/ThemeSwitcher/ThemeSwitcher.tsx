import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    const lightColors = {
        "white": "#fff",
        "background": "#f2f3f5",
        "gray-line": "#DCDDE0",
        "text": "#666666",
        "text-highlight": "#b3b9ff",
        "title": "#2D384D",
        "red": "#E83F5B",
        "green": "#4CD62B",
        "blue": "#5965E0",
        "blue-dark": "#4953B8",
        "blue-twitter": "#2AA9E0",
        "text-button": "#FFF"
    }

    const darkColors = {
        "white": "#575757",
        "background": "#2d2c2c",
        "gray-line": "#DCDDE0",
        "text": "#dfdfdf",
        "text-highlight": "#FFF",
        "title": "#fff",
        "red": "#EA1A3C",
        "green": "#41DF1A",
        "blue": "#3A46C4",
        "blue-dark": "#4953B8",
        "blue-twitter": "#2AA9E0",
        "text-button": "#FFF"
    }

    const transformKey = key => "--color-" + key.replace(/([A-Z])/, "-$1").toLowerCase()

    function changeColors(colors) {
        Object.keys(colors).map(key =>
            document.documentElement.style.setProperty(transformKey(key), colors[key])   
        )
    }

    useEffect(() => {
        if (isDark) {
            // troca as cores para dark
            changeColors(darkColors)
        } else {
            // troca as cores para light
            changeColors(lightColors)
        }
    }, [isDark])

    function switchTheme() {
        if (isDark) {
            setIsDark(false)
        } else {
            setIsDark(true)
        }
    }

    return (
        <div className={styles['switcher-container']}>
            <button type="button" className={styles['profile-container__checkbox']} onClick={switchTheme}/>
            {isDark ? 
            (<img src="icons/icon-moon.svg" alt="moon icon"/>) : (<img src="icons/icon-sun.svg" alt="sun icon"></img>)}

        </div>
    )
}