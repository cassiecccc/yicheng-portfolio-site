import { useMediaQuery } from "react-responsive";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Stacks } from "./components/Stacks";

export default function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1280px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1281px)" });

  return (
    <>
      <div className="body-wrapper">
        <div className="nav-hero-mobile">
          <Navbar />
          <Hero isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        </div>
        <Stacks />
        <div className="projects-wrapper">
          <Projects isMobile={isMobile} isDesktop={isDesktop} />
        </div>
      </div>
      <div className="contact-footer-wrapper">
        <Contact
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
        <Footer />
      </div>
    </>
  );
}
