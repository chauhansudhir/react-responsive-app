import React from "react";

/**
 * Mobile component
 *
 * add more javascript functionality to detect devices
 *
 * @param {Object} props
 * @returns {JSX.Element}
 *
 */
const Mobile = ({ children }) => {
  return <div className="mobile-only">{children}</div>;
};

export default Mobile;
