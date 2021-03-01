import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './SideBar.module.scss'

export function SideBar() {
    return (
        <aside className={styles['sidebar']}>
            <header>
                <svg className={styles['sidebar__logo']} width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2416 0H32.6817L23.9965 42H13.5564L22.2416 0Z" fill="#F2F2F2"/>
                    <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" fill="#F2F2F2"/>
                    <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" fill="#F2F2F2"/>
                </svg>
            </header>
            <main>

            <img src="/icons/home.svg" alt="home icon"/>
            <ThemeSwitcher/>

            </main>

        </aside>
    )
}