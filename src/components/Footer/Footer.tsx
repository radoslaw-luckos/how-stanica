import React from 'react'
import styles from '../../styles/components/Footer.module.scss'
import Image from 'next/future/image';
import HufiecLogo from '../../assets/icons/logo_hufiec.svg';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Image src={HufiecLogo} alt="Baner hufca ZHP Wrocław Wschód" height={20}/>
      {/* <p>Strona opracowana przez dh. Radosława Łuckosia</p>
      <p>&copy; ZHP Wrocław Wschód 2022</p> */}
    </footer>
  )
}

export default Footer;