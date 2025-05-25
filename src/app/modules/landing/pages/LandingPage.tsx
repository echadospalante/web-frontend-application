import { Fragment } from 'react';
import LandingFooter from '../../../shared/components/footer/LandingFooter';
import LandingHero from '../../../shared/components/hero/LandingHero';
import LandingNavbar from '../../../shared/components/navbar/LandingNavbar';

const LandingPage = () => {
  document.title = "Principal | EchadosPa'lante";

  return (
    <Fragment>
      <LandingNavbar />
      <LandingHero />
      {/*  <LandingCarousel />
      <LandingFeaturesHero />
      <FAQs /> */}
      <LandingFooter />
    </Fragment>
  );
};

export default LandingPage;
