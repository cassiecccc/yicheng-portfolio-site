import { SocialMenu } from "./SocialMenu";

export function Footer() {
  return (
    <footer>
      <hr className="footer-hr" />
      <div className="footer-wrapper">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          yichengdu
        </div>
        <SocialMenu />
      </div>
    </footer>
  );
}
