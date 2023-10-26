import { SocialMenu } from "./SocialMenu";

export function Navbar() {
  return (
    <nav>
      <div className="logo" onClick={() => window.scrollTo(0, 0)}>
        yichengdu
      </div>
      <SocialMenu />
    </nav>
  );
}
