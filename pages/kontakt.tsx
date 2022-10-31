import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Header from '../src/components/Header/Header'
import styles from '../src/styles/Pages/Contact.module.scss'
import placeIcon from '../src/assets/icons/home.svg'
import emailIcon from '../src/assets/icons/email.svg'
import phoneIcon from '../src/assets/icons/phone.svg'
import personIcon from '../src/assets/icons/person.svg'
import messageIcon from '../src/assets/icons/write.svg'
import bannerImage from '../src/assets/images/percent_banner.jpg'
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
    <section className={styles.contactForm}>
      <form>
        <div className={styles.inputContainer}>
          <div className={styles.labelBox}>
            <Image src={personIcon} alt={'name input icon'} className={styles.labelImage}/>
            <label htmlFor={'name'}>Imię i nazwisko</label>
          </div>
          <input type='text' id={'name'} name={'name'}/>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelBox}>
            <Image src={emailIcon} alt={'mail input icon'}className={styles.labelImage}/>
            <label htmlFor={'email'}>Adres mailowy</label>
          </div>
          <input type='text' id={'email'} name={'email'}/>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelBox}>
            <Image src={messageIcon} alt={'message input icon'} className={styles.labelImage}/>
            <label htmlFor={'message'}>Treść wiadomości</label>
          </div>
          <textarea rows={5} name={'message'} id={'message'}/>
        </div>
        <button className={styles.submitButton}>Wyślij</button>
      </form>
    </section>
    <Header title='Przekaż swój 1% podatku' />
    <section className={styles.banner}>
      <Image className={styles.bannerImage} src={bannerImage} alt={'Banner image'} width={100} height={100}/>
    </section>
  </main>  
)
}

export default KontaktPage