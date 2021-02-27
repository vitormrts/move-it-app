import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    const lightColors = {
        "white": "#fff",
        "background": "#f2f3f5",
        "gray-line": "#DCDDE0",
        "text": "#666666",
        "text-highlight": "#3A46C4",
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
            {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="gray" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="gray" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
            )}

        </div>
    )
}