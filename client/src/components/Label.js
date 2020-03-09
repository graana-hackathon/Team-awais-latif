import React from 'react';
import Typography from "@material-ui/core/Typography";
import {colors} from "../assets/styles";

export default function LabelText(props) {
    return (<Typography style={{
        textAlign: "center",
        color: colors.header,
        verticalAlign: "center",
        paddingTop: "15px",
        height: "35px",
        borderRadius: "5px",
        border: "1px solid"
    }}>{props.text}</Typography>);

}