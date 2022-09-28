import React, {useState} from 'react';
import Image from 'next/future/image';
import StanicaLogo from '../../assets/icons/stanica_logo.svg';
import HamburgerIcon from '../../assets/icons/hamburger_button.svg';
import CrossIcon from '../../assets/icons/cross_mark.svg';
import styles from '../../styles/components/Navigation.module.scss'
import MobileNavList from './MobileNavList';

type Props = {}

const Navbar = (props: Props) => {

  const [isMobileNavOpened, setMobileNavOpened] = useState(false)
    
  return (
    <nav className={styles.Navbar}>
        <div>{!isMobileNavOpened ? <Image src={StanicaLogo} alt="Logo HOW Stanica" height={50}/> : ""}
        </div>
        <div onClick={() => setMobileNavOpened(!isMobileNavOpened)}>
            <Image src={isMobileNavOpened ? CrossIcon : HamburgerIcon} alt="Close/open menu" height={33}/>
      </div>
      {isMobileNavOpened ? <MobileNavList toogleNav={()=>setMobileNavOpened(!isMobileNavOpened)}/> : ""}
    </nav>
  )
}

export default Navbar;