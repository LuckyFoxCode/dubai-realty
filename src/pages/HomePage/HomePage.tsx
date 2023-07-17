import { HomeGallery, HomeOurExpertise, HomeQuotes, HomeVideo } from 'components/home';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <main>
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuotes />
      <HomeGallery />
    </main>
  );
};
