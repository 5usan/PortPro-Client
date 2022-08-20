import React from "react";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  const { height, width } = useWindowDimensions();
  console.log(height, width, "heigth, width");
  return (
    <div className="wrapper--container">
      <div className="port">PORT-PRO</div>
      {children}
    </div>
  );
};

export default Wrapper;
