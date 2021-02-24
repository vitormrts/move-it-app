import { useState, useEffect } from "react"
import styles from "../styles/components/Countdown.module.css"

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60
 
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // se nao tiver 2, adiciona a esquerda
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('') // se nao tiver 2, adiciona a esquerda

    // altera o estado do botao
    function startCountdown() {
        setActive(true)
    }

    // Countdown iniciado: contagem regressiva
    // Recebe dois parametros, o primeiro e a funcao que sera executada, ja o segundo eh a variavel que executara a funcao caso ela seja alterada
    // se clicarmos no botao, o efeito active eh alterado, entao useEffect eh ativado
    useEffect( () => {
        console.log(active)
        if (active && time > 0) {
            setTimeout( () => {
                setTime(time - 1)
            }, 1000)
        }
    }, [active, time])



    return (
        <div>
            <div className={styles.countdownContainer}>
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

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    )
}