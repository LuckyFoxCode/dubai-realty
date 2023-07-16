import { FC } from 'react';
import styles from './HomeOurExpertise.module.scss';

export const HomeOurExpertise: FC = () => {
  return (
    <section className={styles.OurExpertise}>
      <h2 className={styles.OurExpertise__title}>Our expertise</h2>
      <span className={styles.OurExpertise__descr}>
        "The best apartment in Dubai" we will find your dream
      </span>
      <p className={styles.OurExpertise__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut
        libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus
        tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius
        pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla
        facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt.
        Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor
        massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae
        dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  );
};
