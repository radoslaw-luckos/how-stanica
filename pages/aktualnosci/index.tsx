import type { NextPage } from 'next'
import NewsListItem from '../../src/components/Cards/NewsListItem'
import Header from '../../src/components/Header/Header'
import styles from '../../src/styles/Pages/News.module.scss'
import { newsList } from '../../src/mocks/placeholders'
import MoreIcon from '../../src/assets/icons/more.svg'
import NewsPhoto from '../../src/assets/images/news.jpg'
import Image from 'next/future/image';

const NewsPage: NextPage = () => {
return (
  <main className={styles.innerWrapper}>
    <section className={styles.news}>
      <Header title='Aktualności'/>
      <ul className={styles.list}>
        {newsList.map(newsListItem =>
          <NewsListItem
            key={newsListItem.title}
            title={newsListItem.title}
            text={newsListItem.text}
            imageUrl={newsListItem.imageUrl}
            isReversed={newsList.indexOf(newsListItem) % 2 === 0 ? false : true}
          />
        )}
      </ul>
      <button className={styles.loadMoreBtn}>
          <Image src={MoreIcon} alt='Load older news' width={30} height={30}/>
      </button>
    </section>
    <section className={styles.photo}>
      <Image src={NewsPhoto} alt={'News photo'} />
    </section>
    
    </main>     
)}

export default NewsPage