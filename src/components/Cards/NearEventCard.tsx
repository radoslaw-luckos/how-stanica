import Image from 'next/future/image'
import React from 'react'
import styles from '../../styles/components/NearestEventCard.module.scss'
import EventImage from '../../assets/images/nearest_event.jpg'

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
              <Image src={EventImage} alt='Grafika wydarzenia' className={styles.image}/>
              <h2>Lorem Ipsum</h2>
              <p>Morbi neque sit vitae sit et enim. Amet montes, odio vitae tincidunt turpis gravida lectus velit, ac. Consequat enim, arcu, enim morbi quam arcu, ornare mi quis. Erat mi, egestas sed augue purus in sociis pellentesque. </p>
              <button>Dowiedz się więcej</button>
        </div>
    </div>
  )
}

export default NearestEventCard