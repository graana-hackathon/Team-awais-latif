import React from "react";
import {makeStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FilterListIcon from '@material-ui/icons/FilterList';
import SimpleModal from './modal';
import SearchIcon from '@material-ui/icons/Search';
import {colors} from "../assets/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    filterButton: {
        marginLeft: "auto"
    },
    title: {fontFamily: "Raleway"},
    barStyle: {
        backgroundColor: colors.header
    }
}));
;


export default function Header() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
        <AppBar position="static">
            <Toolbar className={classes.barStyle}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Graana.com
                </Typography>
                <IconButton  onClick={handleOpen}   className={classes.filterButton} color="inherit" aria-label="menu">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <SimpleModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>
        </div>
    );
}
