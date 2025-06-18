import { Fragment } from 'react';
import LandingFooter from '../../../shared/components/footer/LandingFooter';
import LandingHero from '../../../shared/components/hero/LandingHero';
import LandingNavbar from '../../../shared/components/navbar/LandingNavbar';
import SuccessCaseList from '../../../shared/components/list/SuccessCaseList';
import FeatureList from '../../../shared/components/list/FeatureList';
import LandingCarousel from '../../../shared/components/carousel/LandingCarousel';
import LandingFeaturesHero from '../../../shared/components/hero/LandingFeaturesHero';
import FAQs from '../../../shared/components/faqs/Faqs';
import ContactForm from '../../../shared/components/forms/ContactForm';

const LandingPage = () => {
  document.title = "Principal | EchadosPa'lante";

  return (
    <Fragment>
      <LandingNavbar />

      <LandingHero />

      <FeatureList />

      <SuccessCaseList />

      {/* <LandingCarousel /> */}

      {/* <LandingFeaturesHero /> */}

      <FAQs />

      <ContactForm />

      <LandingFooter />
    </Fragment>
  );
};

export default LandingPage;
