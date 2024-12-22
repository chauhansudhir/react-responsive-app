import React from "react";

/**
 * Desktop component
 *
 * add more javascript functionality to detect devices
 * TODO:: render desktop or mobile view based on the device so that we return only the relevant view
 *
 * @param {Object} props
 * @returns {JSX.Element}
 *
 */
const Desktop = ({ children }) => {
  return <div className="desktop-only">{children}</div>;
};

export default Desktop;
