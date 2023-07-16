import { FC } from 'react';
import styles from './HomeQuotes.module.scss';

export const HomeQuotes: FC = () => {
  return (
    <section className={styles.Quotes}>
      <div className={styles.Quotes__wrapper}>
        <p className={styles.Quotes__wrapper_text}>
          “Don’t limit yourself. Many people limit themselves to what they think they can do. You
          can go as far as your mind lets you. What you believe, remember, you can achieve.”{' '}
          <span>— Mary Kay Ash</span>
        </p>
      </div>
    </section>
  );
};
