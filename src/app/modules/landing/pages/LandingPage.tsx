import { Fragment } from 'react';
import FAQs from '../../../shared/components/faqs/Faqs';
import LandingFooter from '../../../shared/components/footer/LandingFooter';
import ContactForm from '../../../shared/components/forms/ContactForm';
import LandingHero from '../../../shared/components/hero/LandingHero';
import FeatureList from '../../../shared/components/list/FeatureList';
import SuccessCaseList from '../../../shared/components/list/SuccessCaseList';
import LandingNavbar from '../../../shared/components/navbar/LandingNavbar';

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
