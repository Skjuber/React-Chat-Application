import React from "react";

import classes from "./HeaderCard.module.css";

const HeaderCard = (props) => {
  return <h1 className={classes.header}>{props.children}</h1>;
};

export default HeaderCard;
