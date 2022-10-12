import Image from 'next/future/image'
import React from 'react'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import classNames from 'classnames'
import styles from '../../styles/components/NewsItemCard.module.scss'


type Props = {
    imageUrl: string,
    title: string,
    text: string,
    isReversed: boolean
}

const NewsListItem = ({ title, imageUrl, text, isReversed }: Props) => {
  
  const itemClasses = classNames(styles.card, isReversed && styles.reversed)

  return (
    <li
      key={title}
      className={itemClasses}
    > 
      <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Image src={imageUrl} alt={title} width={100} height={100} className={styles.image}/>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <button className={styles.readMore}>
        <Image src={ArrowRight} alt={title} width={12} height={12} className={styles.readMoreIcon}/>
      </button>
      </div>
    </li>
  )
}

export default NewsListItem