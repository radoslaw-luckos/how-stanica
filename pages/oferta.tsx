import type { NextPage } from 'next'
import Image from 'next/future/image'
import Header from '../src/components/Header/Header'
import TextBox from '../src/components/Textbox/TextBox'
import OfferCard from '../src/components/Cards/OfferCard'
import styles from '../src/styles/Pages/Offer.module.scss'
import { offer1, offer2 } from '../src/utils/placeholders'
import offerHero from '../src/assets/images/offer.jpg'
import boatIcon from '../src/assets/icons/icon-boat.svg'
import campIcon from '../src/assets/icons/icon-camp.svg'
import peopleIcon from '../src/assets/icons/icon-people.svg'
import toolsIcon from '../src/assets/icons/icon-tools.svg'

const Offer: NextPage = () => {
    return (
      <main className={styles.innerWrapper}>
        <section>
        <Header title='Kilka słów o ośrodku' /> 
        <TextBox content={offer1}/>      
        <TextBox withBackground content={offer2}/>      
        <Image
          src={offerHero}
          alt='HOW Stanica'
          width={300} height={300}
          className={styles.heroImage}
        />      
        <ul className={styles.offerList}>
            <p>Nasz ośrodek ma w swojej szerokiej ofercie:</p>
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
            <p>W sprawie pytań  o dostępność prosimy o kontakt z naszym komendantem ośrodka phm Rafałem Rumianowskim pod adresem e-mail: <strong>rafal.rumianowski@zhp.net.pl</strong></p>
        </ul>
      </section>
      </main>  
)
}

export default Offer