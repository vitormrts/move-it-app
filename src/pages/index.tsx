import React from "react"

import styles from "../styles/Home.module.scss"

import Head from "next/head"
import {GetServerSideProps} from 'next'

import { signIn, signOut, useSession } from 'next-auth/client'

import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges"
import { Countdown } from "../components/Countdown/Countdown"
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar"
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox"
import { Profile } from "../components/Profile/Profile"
import { SideBar } from "../components/SideBar/SideBar"
import { Authentication } from "../components/Authentication/Authentication"
import { CountdownProvider } from "../contexts/CountdownContext"
import { ChallengesProvider } from "../contexts/ChallengesContext"


interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const [ session, loading ] = useSession()
  return (
    <div>
      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn('github')}>Sign in</button>
        <Authentication/>
      </>}
      {session && <>
        <ChallengesProvider
        level= {props.level}
        currentExperience= {props.currentExperience}
        challengesCompleted= {props.challengesCompleted}>
          <div className={styles.container}>
            <Head>
              <title>Init | MoveIt</title>
            </Head>
            <div>
            </div>
            <aside className={styles['container__aside']}>
              <SideBar/>
            </aside>
            <main className={styles['container__main']}>
              <ExperienceBar/>
              <CountdownProvider>
                <section>
                  <div>
                    <div className={styles['container__section-header']}>
                      <Profile
                      name={session.user.name}
                      photo={session.user.image}/>
                    </div>
        
                    <CompletedChallenges/>
                    <Countdown/>
                  </div>
                  <div>
                    <ChallengeBox/>
                  </div>
                </section>
              </CountdownProvider>
            </main>
        
          </div>
        </ChallengesProvider>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
      
      
    </div>
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
