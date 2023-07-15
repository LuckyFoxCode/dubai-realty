import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <Link
      className={styles.Logo}
      to={ROUTES.HOME}>
      <h2 className={styles.Logo__title}>DubaiRealty</h2>
      <span className={styles.Logo__subtitle}>real estate</span>
    </Link>
  );
};
