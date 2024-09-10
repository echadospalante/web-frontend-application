import { Fragment } from "react";

import LandingCarousel from "../../../components/carousel/LandingCarousel";
import FAQs from "../../../components/faqs/Faqs";
import LandingFooter from "../../../components/footer/LandingFooter";
import LandingFeaturesHero from "../../../components/hero/LandingFeaturesHero";
import LandingHero from "../../../components/hero/LandingHero";
import LandingNavbar from "../../../components/navbar/LandingNavbar";

const LandingPage = () => {
  document.title = "Proyecto Comercial";

  return (
    <Fragment>
      <LandingNavbar />
      <LandingHero />
      <LandingCarousel />
      <LandingFeaturesHero />
      <FAQs />
      <LandingFooter />
    </Fragment>
  );
};

export default LandingPage;
