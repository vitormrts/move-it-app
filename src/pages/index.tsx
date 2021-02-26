import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges"
import { Countdown } from "../components/Countdown/Countdown"
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar"
import { Profile } from "../components/Profile/Profile"

import Head from "next/head"
import {GetServerSideProps} from 'next'

import styles from "../styles/Home.module.scss"
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox"
import React from "react"
import { CountdownProvider } from "../contexts/CountdownContext"
import { ChallengesProvider } from "../contexts/ChallengesContext"

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
    level= {props.level} 
    currentExperience= {props.currentExperience}
    challengesCompleted= {props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Init | MoveIt</title>
        </Head>

        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { // dados carregados no node (intermediario) antes da pagina ser construida
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
