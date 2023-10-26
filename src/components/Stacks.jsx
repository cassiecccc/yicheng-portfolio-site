import { STACKSSHOWN } from "../shared/stacksShown";
import { STACKSEXPAND } from "../shared/stacksExpand";
import { useState, useEffect } from "react";

export function Stacks() {
  const [stackDataShown] = useState(STACKSSHOWN);
  const [stackDataExpand] = useState(STACKSEXPAND);
  const [isExpandShown, setIsExpandShown] = useState(false);

  const handleHide = () => {
    setIsExpandShown(true);
    window.location.replace("/#stacks");
  };

  useEffect(() => {
    setIsExpandShown(true);
  }, []);

  return (
    <div className="stacks" id="stacks">
      <hr className="stacks-hr" />
      <div className="stack-card-wrapper">
        {stackDataShown.map((data) => (
          <div key={data.name} className="stack-card">
            <p className="stack-card-title">{data.name}</p>
            <p className="stack-card-details">{data.years}</p>
          </div>
        ))}
      </div>

      <div className={!isExpandShown ? "expand-card-wrapper" : "hidden"}>
        {stackDataExpand.map((data) => (
          <div key={data.name} className="stack-card">
            <p className="stack-card-title">{data.name}</p>
            <p className="stack-card-details">{data.years}</p>
          </div>
        ))}
      </div>

      {isExpandShown ? (
        <button
          onClick={() => setIsExpandShown(false)}
          className={!isExpandShown ? "hidden" : "expand-button"}
        >
          expand all
        </button>
      ) : (
        <button
          onClick={handleHide}
          className={!isExpandShown ? "expand-button" : "hidden"}
        >
          hide
        </button>
      )}
    </div>
  );
}
