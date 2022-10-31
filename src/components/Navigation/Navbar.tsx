import React, {useState} from 'react'
import Image from 'next/future/image'
import HamburgerIcon from '../../assets/icons/hamburger_button.svg';
import CrossIcon from '../../assets/icons/cross_mark.svg';
import styles from '../../styles/components/Navigation.module.scss'
import MobileNavList from './MobileNavList'
import DesktopNavList from './DesktopNavList'
import HOWBanner from './HOWBanner';

const Navbar = () => {

  const [isMobileNavOpened, setMobileNavOpened] = useState(false)
    
  return (
    <nav className={styles.Navbar}>
      <HOWBanner isMobileNavOpened={isMobileNavOpened}/>
      <div
        className={styles.hamburgerMenu}
        onClick={() => setMobileNavOpened(!isMobileNavOpened)}>
        <Image src={isMobileNavOpened ? CrossIcon : HamburgerIcon} alt="Close/open menu" height={33}/>
      </div>
      {isMobileNavOpened ? <MobileNavList toogleNav={() => setMobileNavOpened(!isMobileNavOpened)} /> : ""}
      <DesktopNavList />
    </nav>
  )
}

export default Navbar;