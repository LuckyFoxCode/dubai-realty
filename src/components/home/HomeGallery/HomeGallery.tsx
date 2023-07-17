import galleryCards from 'data/home-gallery.json';
import { FC } from 'react';
import styles from './HomeGallery.module.scss';
import { HomeGalleryCard } from './components';

export const HomeGallery: FC = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Gallery__wrapper}>
        {[] &&
          galleryCards.map((card) => (
            <HomeGalleryCard
              key={card.alt}
              card={card}
            />
          ))}
      </div>
    </div>
  );
};
