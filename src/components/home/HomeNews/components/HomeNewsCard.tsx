import { Icon } from 'components/common';
import { FC } from 'react';
import { NewsCardProp } from 'utils/types';
import styles from '../HomeNews.module.scss';

interface CardProps {
  card: NewsCardProp;
}

export const HomeNewsCard: FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__wrapperImg}>
        <img
          src={card.image}
          alt={card.title}
        />
      </div>
      <h2 className={styles.Card__title}>{card.title}</h2>
      <div className={styles.Card__inner}>
        <p className={styles.Card__inner_date}>{card.date}</p>
        <p className={styles.Card__inner_descr}>{card.descr}</p>
        <a
          className={styles.Card__inner_link}
          href='#'>
          Learn more
          <Icon
            className={styles.Card__inner_linkIcon}
            name='ArrowRight'
            size={7}
          />
        </a>
      </div>
    </div>
  );
};
