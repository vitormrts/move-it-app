import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { CountdownContext } from "../../contexts/CountdownContext"
import styles from "./ChallengeBox.module.scss"

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles['challengebox-container']}>
            { activeChallenge ? (
                <div className={styles['challengebox-container--enabled']}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles['challengebox-container__failed-button']} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles['challengebox-container__succeed-button']} onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>
                </div>
            ) : (
            <div className={styles['challengebox-container--disabled']}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            ) }
        </div>
    )
}