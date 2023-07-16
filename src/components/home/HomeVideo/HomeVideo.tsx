import { Icon } from 'components/common';
import { FC } from 'react';
import styles from './HomeVideo.module.scss';

export const HomeVideo: FC = () => {
  return (
    <section className={styles.Video}>
      <div className={styles.Video__button}>
        <Icon
          className={styles.Video__button_icon}
          name='Arrow'
        />
      </div>
    </section>
  );
};
