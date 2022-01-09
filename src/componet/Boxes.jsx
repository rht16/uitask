import Split from "react-split";
import "./box.css";

export const Boxes = () => {
  return (
    <Split direction="vertical" style={{ height: `calc(100vh - 4rem)` }}>
      <Split className="flex">
        <div className="div-third"></div>
        <div className="div-fourth"></div>
      </Split>
      <div className="div-first"></div>
    </Split>
  );
};
