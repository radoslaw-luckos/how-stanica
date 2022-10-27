import Image, { StaticImageData } from 'next/future/image'
import styles from '../../styles/components/TeamCard.module.scss'
import React from 'react'
import Link from 'next/link'

type Props = {
  id:string,
  name: string,
  logo: StaticImageData,
  minAge: number,
  maxAge: number
}

const TeamCard = ({id, logo, name, minAge, maxAge}: Props) => {
  return (
    <Link href={`/o-nas/${id}`}>
      <li className={styles.card}>
        <Image src={logo} alt={name} width={150} height={150} />
        <h3>{name}</h3>
        <p>{minAge}-{maxAge} lat</p>
      </li>
    </Link>
    
  )
}

export default TeamCard