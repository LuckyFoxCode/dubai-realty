import { FC } from 'react';
import { GalleryCardProp } from 'utils/types';
import styles from './../HomeGallery.module.scss';

interface HomeGalleryCardProps {
  card: GalleryCardProp;
}

export const HomeGalleryCard: FC<HomeGalleryCardProps> = ({ card }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__wrapper}>
        <img
          src={card.src}
          alt={card.alt}
        />
      </div>
      <p className={styles.Card__text}>{card.text}</p>
    </div>
  );
};
