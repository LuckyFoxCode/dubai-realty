import clsx from 'clsx';
import { FC, FormEvent, useState } from 'react';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  className?: string;
  section: 'home' | 'services' | 'category';
}

export const ContactUs: FC<ContactUsProps> = ({ className, section }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setInputValue('');
  };

  return (
    <section className={clsx(styles.ContactUs, styles[section], className)}>
      <p className={styles.ContactUs__subtitle}>Do you have any questions?</p>
      <h2 className={styles.ContactUs__title}>Contact us</h2>
      <form
        className={styles.ContactUs__form}
        onSubmit={handleSubmit}>
        <input
          className={styles.ContactUs__form_input}
          type='email'
          required
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder='Enter your mail'
        />
        <button className={styles.ContactUs__form_button}>Send</button>
      </form>
    </section>
  );
};
