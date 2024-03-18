import React from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgba(36,36,36,0.4)" : "transparent",
      backdropFilter: "blur(1px)",
      borderRadius: "30px",
      color: trigger ? "white" : "black",
      width: "100%",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
    },
  });
};

const ScrollBackground = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollBackground;
