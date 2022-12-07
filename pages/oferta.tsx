import type { NextPage } from 'next'
import Image from 'next/future/image'
import Header from '../src/components/Header/Header'
import TextBox from '../src/components/Textbox/TextBox'
import OfferCard from '../src/components/Cards/OfferCard'
import styles from '../src/styles/Pages/Offer.module.scss'
import { offer1, offer2 } from '../src/mocks/placeholders'
import offerHero from '../src/assets/images/offer.jpg'
import boatIcon from '../src/assets/icons/icon-boat.svg'
import campIcon from '../src/assets/icons/icon-camp.svg'
import peopleIcon from '../src/assets/icons/icon-people.svg'
import toolsIcon from '../src/assets/icons/icon-tools.svg'

const OfferPage: NextPage = () => {
    return (
      <main className={styles.innerWrapper}>
        <section>
          <Header title='Nasza oferta' /> 
          <TextBox content={offer1} />    
          <div className={styles.servicesBox}>
            <TextBox withBackground content={offer2}/>      
          </div> 
          <div className={styles.heroImage}>
            <Image
            src={offerHero}
            alt='HOW Stanica'
            width={300} height={300}            
            /> 
          </div>
           
        </section>
        <section>
          <div className={styles.offerList}>
            <TextBox content={'Nasz ośrodek posiada szeroką gamę sprzętu wodnego i obozowego wraz z zapleczem. W swojej szerokiej ofercie mamy:'} />
            <ul>
              <OfferCard
                content='Sprzęt wodny: Omegi, Optymisty, Motorówki, łodzie wiosłowe'
                icon={boatIcon}
              />
              <OfferCard
                content='Sprzęt obozowy: namioty, kanadyjki, kuchnie polowe, itp.'
                icon={campIcon}
              />
              <OfferCard
                content='Młodą, wykwalifikowaną kadrę'
                icon={peopleIcon}
              />
              <OfferCard
                content='Zaplecze magazynowe i doświadczenie w naprawianiu jednostek pływających'
                icon={toolsIcon}
              />
            </ul>              
            <TextBox content={'W sprawie pytań  o dostępność prosimy o kontakt z naszym komendantem ośrodka phm Rafałem Rumianowskim pod adresem e-mail: <strong>rafal.rumianowski@zhp.net.pl</strong>'}/>
          </div>
        </section>
      </main>  
)
}

export default OfferPage