import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import LanguageDropdown from '../dropdown/LanguageDropdown';
import { useTranslation } from 'react-i18next';
import useLogin from '../../../modules/auth/hooks/useLogin';
import { GoogleLogin } from '@react-oauth/google';
import ThemeDropdown from '../dropdown/ThemeDropdown';

const LandingNavbar = () => {
  const { loginWithCredentials } = useLogin();
  const [navClass, setNavClass] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
  });

  const ref = useRef<HTMLLIElement[]>([]);

  const scrollNavigation = () => {
    const scrollUp = document.documentElement.scrollTop;
    console.log({ scrollUp });
    if (scrollUp > 50) {
      setNavClass('sticky nav-sticky');
    } else {
      setNavClass('');
    }

    const element = ref.current;
    element.forEach((item) => {
      const firstChild = item.firstChild as HTMLElement;
      firstChild.classList.remove('active');

      if (item.classList.contains('active')) {
        const firstChild = item.firstChild as HTMLElement;
        firstChild.classList.add('active');
      }
    });
  };

  return (
    <nav
      className={
        'navbar bg-white navbar-expand-lg align-items-center fixed-top sticky ' +
        navClass
      }
      id="navbar"
    >
      {/* <div className="navbar navbar-expand-lg navigation fixed-top sticky"> */}
      <Container
        fluid
        className="d-flex justify-content-between align-items-center px-3"
      >
        <Link className="navbar-logo" to="/">
          <img
            src="icono-grande.png"
            alt=""
            height="50"
            className="logo logo-dark rounded-3"
          />
          <img
            src="icono-grande.png"
            alt=""
            height="50"
            className="logo logo-light rounded-3"
          />
        </Link>

        <div className="d-lg-block d-none fw-medium">
          <ul className="d-flex flex-row align-items-center justify-content-center w-100 px-2 mt-3 list-unstyled">
            <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
              <a href="#">{t('Principal')}</a>
            </li>
            <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
              <a href="#nosotros">{t('About Us')}</a>
            </li>
            <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
              <a href="#caracteristicas">{t('Features')}</a>
            </li>
            <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
              <a href="#precios">{t('Success Cases')}</a>
            </li>
            <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
              <a href="#faqs">{t('FAQs')}</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center position-relative">
          <div className="position-absolute" style={{ left: '-50px' }}>
            {/* <LanguageDropdown /> */}
            <ThemeDropdown />
          </div>

          <div>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (!credentialResponse.credential) return;
                loginWithCredentials(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

// const LandingNavbar = () => {
//   const [isOpenMenu, setIsOpenMenu] = useState(false);

//   const toggle = () => setIsOpenMenu(!isOpenMenu);

//   //   useEffect(() => {
//   //     window.addEventListener("scroll", scrollNavigation, true);
//   //   });

//   //   const scrollNavigation = () => {
//   //     var scrollUp = document.documentElement.scrollTop;
//   //     if (scrollUp > 50) {
//   //       setNavClass("sticky nav-sticky");
//   //     } else {
//   //       setNavClass("");
//   //     }

//   //     const element = document.querySelectorAll(".nav-item");
//   //     element.forEach((item) => {
//   //       item.firstChild.classList.remove("active");
//   //       if (item.classList.contains("active")) {
//   //         item.firstChild.classList.add("active");
//   //       }
//   //     });
//   //   };

//   return (
//     <React.Fragment>
//       <nav
//         className="navbar navbar-expand-lg navigation fixed-top sticky "
//         id="navbar"
//       >
//         <Container>
//           <a className="navbar-logo" to="/">
//             <img
//               src="/epl.png"
//               alt=""
//               height="40"
//               className="logo logo-dark"
//             />
//             <img
//               src="/epl.png"
//               alt=""
//               height="40"
//               className="logo logo-light"
//             />
//           </a>

//           <NavbarToggler
//             className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
//             onClick={toggle}
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fa fa-fw fa-bars"></i>
//           </NavbarToggler>

//           <div>
//             {/* <span className="nav-item">
//               <a href="#home">Home</a>
//             </span>
//             <span className="nav-item">
//               <a href="#about">About</a>
//             </span>
//             <span className="nav-item">
//               <a href="#features">Features</a>
//             </span>
//             <span className="nav-item">
//               <a href="#roadmap">Roadmap</a>
//             </span>
//             <span className="nav-item">
//               <a href="#team">Team</a>
//             </span>
//             <span className="nav-item">
//               <a href="#news">News</a>
//             </span> */}
//             {/* <span className="nav-item">
//               <a href="#faqs">FAQs</a>
//             </span> */}

//             <div className="my-2 ms-lg-2">
//               <a href="#" className="btn btn-outline-success w-xs">
//                 Sign in
//               </a>
//             </div>
//           </div>
//         </Container>
//       </nav>
//     </React.Fragment>
//   );
// };

export default LandingNavbar;
