import { Icon } from 'components/common';
import CardData from 'data/home-news.json';
import { FC } from 'react';
import styles from './HomeNews.module.scss';
import { HomeNewsCard } from './components/HomeNewsCard';

export const HomeNews: FC = () => {
  return (
    <section className={styles.News}>
      <div className={styles.News__wrapper}>
        <h2 className={styles.News__wrapper_title}>Useful articles</h2>
        <a
          href='#'
          className={styles.News__wrapper_link}>
          View all articles
          <Icon
            name='ArrowRight'
            size={14}
            className={styles.News__wrapper_linkIcon}
          />
        </a>
      </div>
      <div className={styles.News__wrapperCard}>
        {[] &&
          CardData.map((card) => (
            <HomeNewsCard
              key={card.id}
              card={card}
            />
          ))}
      </div>
    </section>
  );
};
