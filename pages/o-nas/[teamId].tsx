import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { teams } from '../../src/mocks/teams'
import styles from '../../src/styles/pages/TeamDetails.module.scss'
import personIcon from '../../src/assets/icons/person.svg'
import emailIcon from '../../src/assets/icons/email.svg'
import phoneIcon from '../../src/assets/icons/phone.svg'

type Props = {}

const TeamDetailsPage = (props: Props) => {

  const router = useRouter()
  const id = router.query.teamId

  //fetch data from api
  //for now mock teams array
  const teamData = teams.find(team => team.id === id)
  

  return (
    <main className={styles.innerWrapper}>
      {teamData ?
        <div className={styles.gridContainer}>
          <h1 className={styles.teamName}>{teamData.teamName}</h1>
          <Image className={styles.teamLogo} src={teamData.logo} alt={teamData.teamName} width={100} height={100} />
          <p className={styles.teamDesc}>{teamData.desc}</p>
          <div className={styles.contactData}>
            <section>
              <h2>Dane kontaktowe drużynowego</h2>
              <ul>
                <li>
                  <Image src={personIcon} alt={'Imię i nazwisko drużynowego'} />
                  <p>{teamData.leaderContactData.rankShort} {teamData.leaderContactData.name}</p>
                </li>
                <li>
                  <Image src={emailIcon} alt={'Adres email drużynowego'} />
                  <p>{teamData.leaderContactData.email}</p>
                </li>
                <li>
                  <Image src={phoneIcon} alt={'Telefon do drużynowego'} />
                  <p>{teamData.leaderContactData.phone}</p>
                </li>
              </ul>
            </section>
            <section>
              <h2>Godziny zbiórek</h2>
              <p className={styles.meetingTime}>{teamData.meetingTime}</p>
            </section>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <Image src={teamData.image} alt={teamData.teamName} width={150} height={100}/>
          </div>
        </div>
        : <p className={styles.error}>Błąd przy wczytywaniu danych drużyny</p>
      }
    </main>
  )
}

export default TeamDetailsPage