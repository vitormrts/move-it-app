import { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { CountdownContext } from "../../contexts/CountdownContext"
import styles from "./Countdown.module.scss"

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // se nao tiver 2, adiciona a esquerda
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('') // se nao tiver 2, adiciona a esquerda

    return (
        <div>
            <div className={styles['countdown-container']}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles['countdown-container__button']}>
                    Ciclo encerrado
                </button>)
                : (
                    <> {isActive ? (
                        <button type="button" className={`${styles['countdown-container__button']} ${styles['countdown-container__button--active']}`} onClick={resetCountdown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                            <button type="button" className={styles['countdown-container__button']} onClick={startCountdown}>
                                Iniciar um ciclo
                            </button>)}
                    </>
                )}
        </div>
    )
}