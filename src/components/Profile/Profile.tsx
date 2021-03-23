import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./Profile.module.scss";

interface ProfileProps {
    name: string,
    photo: string
}

export function Profile (props: ProfileProps) {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles['profile-container']}>
            <img src={props.photo} alt="Username" className={styles['profile-container__icon']}/>
            <div className={styles['profile-container__info']}>
                <strong className={styles['profile-container__name']}>{props.name}</strong>
                <p className={styles['profile-container__level']}>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}