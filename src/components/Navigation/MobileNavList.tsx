import React from 'react';
import styles from '../../styles/components/Navigation.module.scss';
import Link from 'next/link';
import Image from 'next/future/image';
import StanicaLogo from '../../assets/icons/stanica_logo.svg';
import HufiecLogo from '../../assets/icons/logo_hufiec.svg';

type Props = {
  toogleNav: () => void
}

const MobileNavList = (props: Props) => {
  return (
    <div className={styles.MobileList}>
      <div onClick={props.toogleNav}>
        <Link href='/'>
          <Image src={StanicaLogo} alt="Logo HOW Stanica" height={167}/>
        </Link>
      </div>
      <ul>
        <li onClick={props.toogleNav}>
          <Link href='/aktualnosci'>
            <a>Aktualności</a>
          </Link>
        </li>
        <li onClick={props.toogleNav}>
          <Link href='/o-nas'>
            <a>O nas</a>
          </Link>
        </li>
        <li onClick={props.toogleNav}>
          <Link href='/oferta'>
            <a>Oferta</a>
          </Link>
        </li>
        <li onClick={props.toogleNav}>
          <Link href='/kontakt'>
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
      <Image src={HufiecLogo} alt="Baner hufca ZHP Wrocław Wschód" height={33}/>
    </div>
    
  )
}

export default MobileNavList