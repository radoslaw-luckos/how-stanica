import styles from '../../styles/components/Footer.module.scss'
import Image from 'next/future/image';
import HufiecLogo from '../../assets/icons/logo_hufiec.svg';
import FacebookLogo from '../../assets/icons/fb.svg';
import InstaLogo from '../../assets/icons/insta.svg';
import YouTubeLogo from '../../assets/icons/yb.svg';
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a className={styles.bannerImage} href='http://wroclawwschod.zhp.pl/' target='_blank' rel="noreferrer">
        <Image className={styles.img} src={HufiecLogo} alt="Baner hufca ZHP Wrocław Wschód" height={20} />
      </a>
      <div className={styles.copyrights}>
        <p>Strona opracowana przez pwd. Radosława Łuckosia</p>
        <p>&copy; ZHP Wrocław Wschód 2022</p>
      </div>
      <div className={styles.socials}>
        <Link href='https://www.facebook.com/howstanica'>
          <Image className={styles.icon} src={FacebookLogo} alt="HOW Stanica FB Profile" height={24} width={24} />
        </Link>
        <Link href='https://www.facebook.com/howstanica'>
          <Image className={styles.icon} src={InstaLogo} alt="HOW Stanica Insta Profile" height={24} width={24} />
        </Link> 
        <Link href='https://www.facebook.com/howstanica'>
          <Image className={styles.icon} src={YouTubeLogo} alt="HOW Stanica YouTube Channel" height={24} width={24} />
        </Link> 
      </div>
    </footer>
  )
}

export default Footer;