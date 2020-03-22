import React from "react";
import { Card, Tooltip, Typography } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const CardComponent = props => {
  return (
    <Card
      style={{
        position: "relative",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "25px 15px",
        borderRadius: 5
      }}
    >
      <Tooltip
        title={props.tooltipText}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <InfoOutlinedIcon />
      </Tooltip>
      {Boolean(props.icon) && <props.icon color="primary" fontSize="large" />}
      <Typography variant="h2" color="textPrimary">
        {props.count}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.title}
      </Typography>
    </Card>
  );
};

export default CardComponent;
