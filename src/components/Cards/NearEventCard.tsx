import Image from 'next/future/image'
import React from 'react'
import styles from '../../styles/components/NearestEventCard.module.scss'
import {nearestEvent} from '../../mocks/placeholders'

type Props = {}

const NearestEventCard = (props: Props) => {
  return (
      <div className={styles.cardWrapper}>
        <div className={styles.leftUp}></div>
        <div className={styles.leftDown}></div>
        <div className={styles.rightUp}></div>
        <div className={styles.rightDown}></div>
        <div className={styles.content}>
              <h1>Najbliższe wydarzenie</h1>
              <Image src={nearestEvent.imageUrl} alt='Grafika wydarzenia' width={100} height={100} className={styles.image}/>
              <h2>{nearestEvent.title}</h2>
              <p>{nearestEvent.text}</p>
              <button>Dowiedz się więcej</button>
        </div>
    </div>
  )
}

export default NearestEventCard