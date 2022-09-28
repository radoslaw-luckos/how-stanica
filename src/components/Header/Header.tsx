import React from 'react'
import styles from '../../styles/components/Header.module.scss'

type Props = {
    title: string;
}

const Header = (props: Props) => {
  return (
      <div className={styles.HeaderWithBlueUnderline}>
        <h1>{props.title}</h1>
      </div>
  )
}

export default Header;