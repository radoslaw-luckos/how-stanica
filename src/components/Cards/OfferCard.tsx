import Image, { StaticImageData } from 'next/future/image'
import styles from '../../styles/components/OfferCard.module.scss'
import React from 'react'

type Props = {
    content: string,
    icon: StaticImageData,
}

const OfferCard = ({icon, content}: Props) => {
  return (
    <li className={styles.card}>
          <Image src={icon} alt='Card Icon' width={150} height={150} />
          <p>{content}</p>
    </li>
  )
}

export default OfferCard