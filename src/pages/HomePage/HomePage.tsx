import { ContactUs } from 'components/common';
import { HomeGallery, HomeOurExpertise, HomeQuotes, HomeVideo } from 'components/home';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <main>
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuotes />
      <HomeGallery />
      <ContactUs section='home' />
    </main>
  );
};
