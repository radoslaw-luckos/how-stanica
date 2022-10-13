import Image, { StaticImageData } from 'next/future/image'
import styles from '../../styles/components/TeamCard.module.scss'
import React from 'react'

type Props = {
    name: string,
    logo: StaticImageData,
    minAge: number,
    maxAge: number
}

const TeamCard = ({logo, name, minAge, maxAge}: Props) => {
  return (
    <li className={styles.card}>
          <Image src={logo} alt={name} width={150} height={150} />
          <h3>{name}</h3>
          <p>{minAge}-{maxAge} lat</p>
    </li>
  )
}

export default TeamCard