import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import LabelText from './Label';
import {colors} from "../assets/styles";
import {browserHistory} from 'react-router';

import {urls} from "../config/urls";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
        height: "50px",
        width: "100%",
        colors: colors.header
    },
    selectEmpty: {},
    labelColor: {
        color: colors.header
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            fontFamily: "Raleway",
            color: colors.header
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: colors.header,
            color: colors.header
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colors.header,
                color: colors.header
            },
            '&:hover fieldset': {
                borderColor: colors.header,
                color: colors.header
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.header,
                color: colors.header
            },
        },
    },
})(TextField);

const PrettoSlider = withStyles({
    root: {
        color: colors.header,
        height: 4,
        fontFamily: "Raleway"
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 4,
        borderRadius: 4,
    },
    rail: {
        height: 4,
        borderRadius: 4,
    },
})(Slider);
const CssSelect = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
            fontFamily: "Raleway"
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        borderColor: colors.header,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        color: colors.header,
        padding: '17px 26px 17px 12px',
        fontFamily: "Raleway",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: colors.header,
        },
    },
}))(InputBase);

export default function SimpleModal(props) {
    const {open, handleOpen, handleClose} = props;
    const [value, setValue] = React.useState([1, 1000]);
    const [Areavalue, setAreaValue] = React.useState([1, 1000]);
    const [apply, setApply] = React.useState(false);
    const [passObject, setpassObject] = React.useState([]);

    const [labelWidth, setLabelWidth] = React.useState(0);
    const classes = useStyles();
    const [houseType, setHouseType] = React.useState(null);
    const [yearValue, setYear] = React.useState(null);
    const [bedroom, setBedroom] = React.useState(1);
    const inputLabel = React.useRef(null);

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(70), (val, index) => year - index);


    const handleHouseTypeChange = event => {
        setHouseType(event.target.value);
    };
    const handleBedroomChange = event => {
        setBedroom(event.target.value);
    };
    const handleYearChange = event => {
        setYear(event.target.value);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAreaChange = (event, newValue) => {
        setAreaValue(newValue);
    };

    const handleSubmit = () => {
        let json =
            {
                LotArea: {
                   min:  Areavalue[0] * 1000,
                    max: Areavalue[1] * 1000
                },
                HouseStyle: houseType,
                BldgType: null,
                OverallCond: null,
                YearBuilt: yearValue,
                CentralAir: null,
                BedroomAbvGr: bedroom,
                GarageType: null,
                SaleType: null,
                SalePrice: {
                    min: value[0] * 100000,
                    max: value[1] * 100000 ,
                }
            };

        localStorage.setItem('filter', JSON.stringify(json));
        window.location = "http://localhost:3000/filter";

    };


    return (
        <React.Fragment>
        <Grid container xs={12} md={12}>
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle className={classes.labelColor} style={{textAlign: "center"}}
                                 id="alert-dialog-slide-title"><Typography variant="h4"
                                                                           style={{fontFamily: "Raleway"}}>{"Apply Filter"}</Typography></DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"
                                           style={{paddingTop: "50px", fontFamily: "Raleway"}}>
                            <Grid container xs={12} md={12} alignItems={"center"} justify={"center"}>

                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={12} md={5}><Typography className={classes.labelColor}>Price</Typography></Grid>
                                <Grid item xs={12} md={5}>
                                    <PrettoSlider
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        max={1000}
                                    /></Grid>
                                <Grid item xs={0} md={1}></Grid>

                                <Grid item xs={0} md={6}></Grid>
                                <Grid item xs={12} md={2} style={{paddingLeft: "8px"}}>
                                    <LabelText text={"$" + (value[0] * 100000)}></LabelText>
                                </Grid>
                                <Grid item xs={12} md={1} style={{paddingTop: "10px"}}></Grid>
                                <Grid item xs={12} md={2} style={{paddingLeft: "8px"}}>
                                    <LabelText text={"$" + (value[1] * 100000)}></LabelText>
                                </Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <Typography className={classes.labelColor}>Plot Area (Square feet)</Typography>
                                </Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <PrettoSlider
                                        value={Areavalue}
                                        onChange={handleAreaChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        max={1000}
                                    /></Grid>
                                <Grid item xs={0} md={1}></Grid>

                                <Grid item xs={0} md={6}></Grid>
                                <Grid item xs={12} md={2} style={{paddingLeft: "8px"}}>
                                    <LabelText text={(Areavalue[0] * 1000)}></LabelText>
                                </Grid>
                                <Grid item xs={12} md={1} style={{paddingTop: "10px"}}></Grid>
                                <Grid item xs={12} md={2} style={{paddingLeft: "8px"}}>
                                    <LabelText text={(Areavalue[1] * 1000)}></LabelText>
                                </Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <Typography className={classes.labelColor}>Number of Bedrooms</Typography>
                                </Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "15px"}}>
                                    <CssTextField onChange={handleBedroomChange} type="number"
                                                  placeholder="Enter Bedroom Number"
                                                  style={{width: "100%", paddingLeft: "8px"}} id="outlined-basic"
                                                  variant="outlined"/>
                                </Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <Typography className={classes.labelColor}>House Type</Typography>
                                </Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <FormControl variant="outlined" className={classes.formControl}>

                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={houseType}
                                            onChange={handleHouseTypeChange}
                                            labelWidth={labelWidth}
                                            input={<CssSelect/>}
                                        >
                                            <MenuItem value="null">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem Selected value={'1Story'}>Ten</MenuItem>
                                            <MenuItem value={'2Story'}>Twenty</MenuItem>
                                            <MenuItem value={'SFoyer'}>Thirty</MenuItem>
                                            <MenuItem value={'SLvl'}>Thirty</MenuItem>
                                            <MenuItem value={'1.5Fin'}>Ten</MenuItem>
                                            <MenuItem value={'2.5Fin'}>Twenty</MenuItem>
                                            <MenuItem value={'1.5Unf'}>Thirty</MenuItem>
                                            <MenuItem value={'2.5Unf'}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={0} md={1}></Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <Typography className={classes.labelColor}>Built Year</Typography>
                                </Grid>
                                <Grid item xs={12} md={5} style={{paddingTop: "10px"}}>
                                    <FormControl variant="outlined" className={classes.formControl}>

                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={yearValue}
                                            onChange={handleYearChange}
                                            input={<CssSelect/>}
                                            labelWidth={labelWidth}
                                        >
                                            <MenuItem value="null">
                                                <em>None</em>
                                            </MenuItem>
                                            {years.map((year, index) => {
                                                return <MenuItem value={year}>{year}</MenuItem>
                                            })}                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={0} md={1}></Grid>

                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Grid container xs={12} md={12} alignItems={"center"} justify={"center"}
                              style={{marginBottom: "20px"}}>
                            <Grid xs={6} container md={6} alignItems={"right"} justify="flex-end"
                                  style={{paddingRight: "5px"}}> <Button
                                onClick={handleClose} style={{
                                background: colors.header,
                                color: "white",
                                width: "120px",
                                height: "40px"
                            }}>
                                Cancel
                            </Button>
                            </Grid>
                            <Grid xs={6} md={6} alignItems={"right"}>
                                    <Button
                                            style={{
                                                background: colors.header,
                                                color: "white",
                                                width: "120px",
                                                height: "40px"
                                            }}
                                    onClick = {() => handleSubmit()}
                                    >
                                        Apply
                                    </Button>

                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </div>
        </Grid>
        </React.Fragment>
    );
}
