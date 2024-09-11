import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";

const LandingNavbar = () => {
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const ref = useRef<HTMLLIElement[]>([]);

  const scrollNavigation = () => {
    const scrollUp = document.documentElement.scrollTop;
    console.log({ scrollUp });
    if (scrollUp > 50) {
      setNavClass("sticky nav-sticky");
    } else {
      setNavClass("");
    }

    const element = ref.current;
    element.forEach((item) => {
      const firstChild = item.firstChild as HTMLElement;
      firstChild.classList.remove("active");

      if (item.classList.contains("active")) {
        const firstChild = item.firstChild as HTMLElement;
        firstChild.classList.add("active");
      }
    });
  };

  return (
    <nav
      className={
        "navbar bg-white navbar-expand-lg align-items-center fixed-top sticky " +
        navClass
      }
      id="navbar"
    >
      {/* <div className="navbar navbar-expand-lg navigation fixed-top sticky"> */}
      <Container className="d-flex justify-content-between align-items-center px-5">
        <Link className="navbar-logo" to="/">
          <img
            src="/images/logos/7s-logo-small.png"
            alt=""
            height="40"
            className="logo logo-dark rounded-2"
          />
          <img
            src="/images/logos/7s-logo-small.png"
            alt=""
            height="40"
            className="logo logo-light rounded-2"
          />
        </Link>

        <ul className="d-flex flex-row align-items-center justify-content-center  w-100  px-2 mt-3 list-unstyled">
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#home">Home</NavLink>
          </li>
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#about">About</NavLink>
          </li>
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#features">Features</NavLink>
          </li>
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#roadmap">Roadmap</NavLink>
          </li>
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#team">Team</NavLink>
          </li>
          <li ref={(el) => (ref.current[0] = el!)} className="nav-item px-3">
            <NavLink to="#faqs">FAQs</NavLink>
          </li>
        </ul>

        <div className="my-2 ms-lg-2">
          <Link
            to="/autenticacion/ingresa"
            className="btn btn-outline-success w-xs"
          >
            Ingresar
          </Link>
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
//           <Link className="navbar-logo" to="/">
//             <img
//               src="/images/logos/7s-logo-small.png"
//               alt=""
//               height="40"
//               className="logo logo-dark"
//             />
//             <img
//               src="/images/logos/7s-logo-small.png"
//               alt=""
//               height="40"
//               className="logo logo-light"
//             />
//           </Link>

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
//               <NavLink to="#home">Home</NavLink>
//             </span>
//             <span className="nav-item">
//               <NavLink to="#about">About</NavLink>
//             </span>
//             <span className="nav-item">
//               <NavLink to="#features">Features</NavLink>
//             </span>
//             <span className="nav-item">
//               <NavLink to="#roadmap">Roadmap</NavLink>
//             </span>
//             <span className="nav-item">
//               <NavLink to="#team">Team</NavLink>
//             </span>
//             <span className="nav-item">
//               <NavLink to="#news">News</NavLink>
//             </span> */}
//             {/* <span className="nav-item">
//               <NavLink to="#faqs">FAQs</NavLink>
//             </span> */}

//             <div className="my-2 ms-lg-2">
//               <Link to="#" className="btn btn-outline-success w-xs">
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </nav>
//     </React.Fragment>
//   );
// };

export default LandingNavbar;
