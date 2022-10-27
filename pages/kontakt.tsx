import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Header from '../src/components/Header/Header'
import styles from '../src/styles/Pages/Contact.module.scss'
import placeIcon from '../src/assets/icons/home.svg'
import emailIcon from '../src/assets/icons/email.svg'
import phoneIcon from '../src/assets/icons/phone.svg'
import Image from 'next/future/image'
  
const KontaktPage: NextPage = () => {

const MapWithNoSSR = dynamic(() => import("../src/components/Map/Map"), {
  ssr: false
});

return (
  <main className={styles.innerWrapper}>
    <Header title='Kontakt'/>
    <section className={styles.mapSection}>
      <MapWithNoSSR/>
      <div className={styles.contactInfoBox}>
        <div>
          <h2>Nasza lokalizacja</h2>
          <div  className={styles.contactInfo}>
            <Image src={placeIcon} alt='Nasza lokalizacja' width={30} height={30} />
            <p>ul. Kożuchowska 13, <span>51-631 Wrocław</span></p>
          </div>
        </div>
        <div>
          <h2>Dane kontaktowe</h2>
          <div className={styles.contactInfo}>
            <Image src={emailIcon} alt='Email kontaktowy' width={30} height={30} />
            <p>rafal.rumianowski@zhp.net.pl</p>
          </div>
          <div className={styles.contactInfo}>
            <Image src={phoneIcon} alt='Telefon kontaktowy' width={30} height={30} />
            <p>+48 406 555 012</p>
          </div>
        </div>
      </div>
    </section>
    <Header title='Napisz do nas!'/>
    <section>

    </section>
  </main>  
)
}

export default KontaktPage