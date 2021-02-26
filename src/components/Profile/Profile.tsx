import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./Profile.module.scss";

export function Profile () {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles['profile-container']}>
            <img src="https://github.com/vitormrts.png" alt="Vitor Martins" className={styles['profile-container__icon']}/>
            <div className={styles['profile-container__info']}>
                <strong className={styles['profile-container__name']}>Vitor Martins</strong>
                <p className={styles['profile-container__level']}>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}