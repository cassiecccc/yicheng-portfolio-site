export function Hero({ isMobile, isTablet, isDesktop }) {
  return (
    <div className="hero">
      {isMobile ? (
        <img
          className="hero-image"
          src="/images/image-profile-mobile.jpg"
          alt="profile image"
        />
      ) : isTablet ? (
        <img
          className="hero-image"
          src="/images/image-profile-tablet.jpg"
          alt="profile image"
        />
      ) : isDesktop ? (
        <img
          className="hero-image"
          src="/images/image-profile-desktop.jpg"
          alt="profile image"
        />
      ) : (
        <img
          className="hero-image"
          src="/images/image-profile-desktop.jpg"
          alt="profile image"
        />
      )}

      <div className="hero-content">
        <h1 className="hero-content-statement">
          Nice to meet you! I&apos;m
          <span className="profile-name"> Yicheng Du.</span>
        </h1>
        <p className="hero-content-bio">
          Based in New York, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <button
          className="contact-me"
          onClick={() => window.location.replace("/#contact")}
        >
          contact me
        </button>
      </div>
    </div>
  );
}
