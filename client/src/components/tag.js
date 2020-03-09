import React from "react";
import {makeStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import EuroSymbolIcon from "@material-ui/core/SvgIcon/SvgIcon";


export default function Tag(props) {
    const {icon, title} = props;
    return (
        <React.Fragment>
             <span style={{float: "left"}}>
                {icon}
             </span>
            <Typography gutterBottom >
                {title}
            </Typography>
        </React.Fragment>
    );
}
