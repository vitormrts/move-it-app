import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import styles from "./LevelUpModal.module.scss"

export function LevelUpModal() {
    const {level, closeLevelUpModal} = useContext(ChallengesContext)

    return( 
            <div className={styles['level-overlay']}>
                <div className={styles['level-container']}>
                        <header className={styles['level-container__level']}>{level}</header>

                        <strong className={styles['level-container__title']}>Parabéns!!!</strong>
                        <p className={styles['level-container__text']}>Você alcançou um novo level.</p>

                        <button className={styles['level-container__close']} type="button">
                            <img src="/icons/close.svg" alt="Fechar modal" onClick={closeLevelUpModal}/>
                        </button>
                </div>
            </div>
    )
}