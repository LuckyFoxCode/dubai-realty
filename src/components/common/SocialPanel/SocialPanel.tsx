import clsx from 'clsx';
import { Icon, IconType } from 'components/common';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './SocialPanel.module.scss';

interface SocialPanelProps {
  position: 'top' | 'bottom';
  className?: string;
}

interface SocialIconsProps {
  title: IconType;
  link: string;
}

const socialIcons: SocialIconsProps[] = [
  { title: 'SocialFacebook', link: 'https://uk-ua.facebook.com/' },
  { title: 'SocialInstagram', link: 'https://www.instagram.com/' },
  { title: 'SocialLinkedin', link: 'https://www.linkedin.com/' },
  { title: 'SocialTwitter', link: 'https://twitter.com/' },
  { title: 'SocialYoutube', link: 'https://www.youtube.com/' },
];

export const SocialPanel: FC<SocialPanelProps> = ({ position, className }) => {
  return (
    <nav className={clsx(styles.SocialPanel, className)}>
      <ul className={clsx(styles.SocialPanel__list, styles[position])}>
        {[] &&
          socialIcons.map((icon) => (
            <li
              className={styles.SocialPanel__list_item}
              key={icon.title}>
              <Link
                className={styles.SocialPanel__list_link}
                to={icon.link}
                target='_blank'>
                <Icon
                  className={styles.SocialPanel__list_icon}
                  name={icon.title}
                  fill='white'
                  size={20}
                />
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
