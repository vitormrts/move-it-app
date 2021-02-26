import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./Profile.module.scss";

export function Profile () {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles['profile-container']}>
            <img src="https://github.com/vitormrts.png" alt="Vitor Martins"/>
            <div>
                <strong>Vitor Martins</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}