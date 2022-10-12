import type { NextPage } from 'next'
import NewsListItem from '../src/components/Cards/NewsListItem'
import Header from '../src/components/Header/Header'
import styles from '../src/styles/Pages/News.module.scss'
import { newsList } from '../src/utils/placeholders'
import More from '../src/assets/icons/more.svg'
import Image from 'next/future/image';

const News: NextPage = () => {
return (
  <main className={styles.innerWrapper}>
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
        <Image src={More} alt='Load older news' width={30} height={30}/>
    </button>
    </main>     
)}

export default News