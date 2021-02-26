import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import styles from "./CompletedChallenges.module.scss"

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles['completed-challenges-container']}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}