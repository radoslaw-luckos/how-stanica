import type { NextPage } from 'next'
import { greeting } from '../src/mocks/placeholders'
import Header from '../src/components/Header/Header'
import TextBox from '../src/components/Textbox/TextBox'
import styles from '../src/styles/Pages/Home.module.scss'
import NearestEventCard from '../src/components/Cards/NearEventCard'

const HomePage: NextPage = () => {
  return (
    <main className={styles.innerWrapper}>
      <Header title='Czuwaj!' />
      <TextBox
        content={greeting} withBackground />
      <NearestEventCard/>
    </main>      
  )
}

export default HomePage
