import type { NextPage } from 'next'
import { greeting } from '../src/mocks/placeholders'
import Header from '../src/components/Header/Header'
import TextBox from '../src/components/Textbox/TextBox'
import styles from '../src/styles/Pages/Home.module.scss'
import NearestEventCard from '../src/components/Cards/NearEventCard'
import Image from 'next/future/image'
import welcomeImg from '../src/assets/images/1.avif';

const HomePage: NextPage = () => {
  return (
    <main className={styles.innerWrapper}>
      <section className={styles.welcome}>
        <Header title='Czuwaj!' />
        <TextBox content={greeting} withBackground/>
        <div className={styles.welcomeImage}>
          <Image src={welcomeImg} alt='Welcome image' width={100} height={100} />
          <div className={styles.dotsHor}></div>
          <div className={styles.dotsVer}></div>
        </div>
      </section>
      <NearestEventCard/>
    </main>      
  )
}

export default HomePage
