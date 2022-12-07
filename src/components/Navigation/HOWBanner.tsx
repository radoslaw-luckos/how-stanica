import React from 'react'
import Image from 'next/future/image'
import StanicaLogo from '../../assets/icons/stanica_logo.svg'
import styles from '../../styles/components/Navigation.module.scss'
import Link from 'next/link'

type Props = {
    isMobileNavOpened: boolean
}

const HOWBanner = ({isMobileNavOpened}: Props) => {
    return (
    <Link href='/'>    
            <div className={styles.banner}>
               <div>
                    {!isMobileNavOpened ? <Image src={StanicaLogo} alt="Logo HOW Stanica" height={50} /> : ""}
                </div>
                <h1 className={styles.howName}>Harcerski Ośrodek Wodny Stanica</h1> 
            </div>        
    </Link>
  )
}

export default HOWBanner