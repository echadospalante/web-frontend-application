import { Fragment } from "react";
import LandingCarousel from "../../../shared/components/carousel/LandingCarousel";
import FAQs from "../../../shared/components/faqs/Faqs";
import LandingFooter from "../../../shared/components/footer/LandingFooter";
import LandingFeaturesHero from "../../../shared/components/hero/LandingFeaturesHero";
import LandingHero from "../../../shared/components/hero/LandingHero";
import LandingNavbar from "../../../shared/components/navbar/LandingNavbar";

const LandingPage = () => {
  document.title = "Proyecto Comercial";

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
