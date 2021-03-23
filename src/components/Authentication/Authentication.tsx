import styles from './Authentication.module.scss'

import { signIn } from 'next-auth/client'

export function Authentication() {
    return (
        <div className={styles['container']}>
            <aside>
                <img className={styles['container__symbol']} src="icons/symbol.png" alt="symbol image"/>
            </aside>

            <section>
                <img className={styles['container__logo']} src="logo-full-white.svg" alt="logo move-it"/>
                <main>
                    <h2>Bem-vindo!</h2>

                    <div className={styles['container__description']}>
                        <img src="icons/github.png" alt="github.png"/>
                        <p>Faça login com seu GitHub para começar</p>
                    </div>

                    <div className={styles['container__login']}>
                        <button className={styles['container__submit']} type="submit" onClick={() => signIn('github')}>
                            <p>Fazer login com o GitHub</p>
                            <img src="/icons/arrow.svg" alt="arrow icon"/>
                        </button>
                    </div>

                </main>
            </section>
        </div>
    )
}