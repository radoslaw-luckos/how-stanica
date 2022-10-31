import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import styles from '../../styles/components/Navigation.module.scss'

import HufiecLogo from '../../assets/icons/logo_hufiec.svg';


const DesktopNavList = () => {
    return (
      <div className={styles.desktopNavList}>
      <ul >
        <li>
          <Link href='/aktualnosci'>
            <a>Aktualności</a>
          </Link>
        </li>
        <li>
          <Link href='/o-nas'>
            <a>O nas</a>
          </Link>
        </li>
        <li>
          <Link href='/oferta'>
            <a>Oferta</a>
          </Link>
        </li>
        <li>
          <Link href='/kontakt'>
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    <Image src={HufiecLogo} alt="Baner hufca ZHP Wrocław Wschód" height={33}/>
    </div>
  )
}

export default DesktopNavList