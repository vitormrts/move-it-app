import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import styles from "./ExperienceBar.module.scss"

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles['experiencebar-container']}>
            <span className={styles['experiencebar-container__initial-xp']}>0 xp</span>
            <div className={styles['experiencebar-container__progress']}>
                <div style={{ width: `${percentToNextLevel}%` }}/>
                <span className={styles['experiencebar-container__current-experience']} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}