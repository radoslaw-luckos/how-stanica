import { useRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import Header from '../src/components/Header/Header'
import TextBox from '../src/components/Textbox/TextBox'
import styles from '../src/styles/Pages/About.module.scss'
import { aboutContent } from '../src/utils/placeholders'
import aboutHero from '../src/assets/images/about.jpg'
import { carouselContent, teamsImages } from '../src/utils/images'
import TeamCard from '../src/components/Cards/TeamCard'


const About: NextPage = () => {

  const [width, setWidth] = useState(0)

  const carousel: Ref<HTMLDivElement> = useRef()

  useEffect(() => {  
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  

  return (
    <main className={styles.innerWrapper}>
      
      <section>
        <Header title='Kilka słów o ośrodku' /> 
        <Image
          src={aboutHero}
          alt='HOW Stanica'
          width={300} height={300}
          className={styles.heroImage}
        />
        <TextBox withBackground content={aboutContent}/>
      </section>
      
      
      <section>
        <Header title='Kadra ośrodka' />
        <motion.div className={styles.carousel} ref={carousel} whileTap={{cursor:'grabbing'}}>
          <motion.div
            drag={'x'}
            dragConstraints={{right: 0, left: -width}}
            className={styles.innerCarousel}>
            {carouselContent.map(item => (
              <motion.div className={styles.carouselItem} key={item.name}>
                <Image src={item.photo} alt={item.name} width={240} height={400} className={styles.photo}/>
                <div className={styles.data}>
                  <p>{item.function}</p>
                  <h3>{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>      
      

      <section>
        <Header title='Nasze drużyny' /> 
        <ul>
          <TeamCard name='32. Wrocławska Drużyna Harcerska "Ekisana"' logo={teamsImages[0]} minAge={10} maxAge={12} />
          <TeamCard name='32. Wrocławska Drużyna Staszoharcerska "Pegaz"' logo={teamsImages[1]} minAge={13} maxAge={15} />
          <TeamCard name='32. Wrocławska Gromada Zuchowa "Hefalumpy"' logo={teamsImages[2]} minAge={7} maxAge={9} />
          <TeamCard name='96. Wrocławska Drużyna Harcerska' logo={teamsImages[3]} minAge={10} maxAge={13} />
        </ul>
      </section>
    </main>     
  )
}

export default About