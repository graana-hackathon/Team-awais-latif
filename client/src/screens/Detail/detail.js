import React from 'react';

import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';

import itemImage from "../../assets/images/home5.jpg";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import {detailStyle} from "./styles.js";

import Tag from "../../components/tag";
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import BathtubTwoToneIcon from '@material-ui/icons/BathtubTwoTone';
import SquareFootTwoToneIcon from '@material-ui/icons/SquareFootTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import KingBedTwoToneIcon from '@material-ui/icons/KingBedTwoTone';
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DomainIcon from '@material-ui/icons/Domain';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import HdTwoToneIcon from '@material-ui/icons/HdTwoTone';
import StoreMallDirectoryTwoToneIcon from '@material-ui/icons/StoreMallDirectoryTwoTone';
import PermDataSettingTwoToneIcon from '@material-ui/icons/PermDataSettingTwoTone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SettingsIcon from '@material-ui/icons/Settings';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import GavelIcon from '@material-ui/icons/Gavel';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';

import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";

export default class DetailScreen extends React.Component {

    state = {
        back: false
    };


    back = () => {
        this.setState({back: true})
    };

    render() {

        return (
            <React.Fragment>

                {this.state.back &&
                <Redirect to={{
                    pathname: '/filter',
                }}
                />
                }


                <Grid container style={{"marginTop": "2%"}}>
                    <Grid item lg={1}/>
                    <Grid item lg={10} style = {{padding: "30px"}}>


                        <Button variant="outlined" color="secondary"
                                onClick={this.back}
                        >
                            Back
                        </Button>

                        <Card style={{marginBottom: "4%", marginTop: "5%"}}>
                            <CardActionArea>

                                <img
                                    height="470"
                                    width="100%"
                                    src={itemImage}
                                />
                                <CardContent>

                                    <Grid container style={{"marginTop": "2%"}}>

                                        <Grid item xs={2} lg={2}/>
                                        <Grid item xs={8} lg={8}>

                                            <Typography
                                                style={{
                                                    "marginTop": "2%",
                                                    fontFamily: "Raleway",
                                                    fontSize: "30px",
                                                    padding: "30px"
                                                }}>
                                                Description
                                            </Typography>
                                            <Grid container
                                                  style={{"backgroundColor": "#fbfbfb", padding: "0% 2% 2% 2%"}}>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<MonetizationOnTwoToneIcon/>}
                                                         title={this.props.location.state.data.SalePrice}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<KingBedTwoToneIcon/>}
                                                         title={this.props.location.state.data.BedroomAbvGr}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<SquareFootTwoToneIcon/>}
                                                         title={this.props.location.state.data.LotArea}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<BathtubTwoToneIcon/>} title={
                                                        this.props.location.state.data.BsmtFullBath + this.props.location.state.data.BsmtHalfBath +
                                                        this.props.location.state.data.FullBath + this.props.location.state.data.HalfBath
                                                    }/>
                                                </Grid>
                                                <Grid item xs={12} lg={12} style={detailStyle.item}>
                                                    <Tag icon={<RoomTwoToneIcon/>}
                                                         title="House # A-123, Block 4, Hyderabad Pakistan"/>
                                                </Grid>
                                            </Grid>

                                            <Typography
                                                style={{
                                                    "marginTop": "2%",
                                                    fontFamily: "Raleway",
                                                    fontSize: "30px",
                                                    padding: "30px"
                                                }}>
                                                Shape Information
                                            </Typography>
                                            <Grid container
                                                  style={{"backgroundColor": "#fbfbfb", padding: "0% 2% 2% 2%"}}>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<LocationCityIcon/>}
                                                         title={this.props.location.state.data.LotShape}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<DomainIcon/>}
                                                         title={this.props.location.state.data.RoofMatl}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<AirlineSeatReclineExtraIcon/>}
                                                         title={this.props.location.state.data.Utilities}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<HomeWorkTwoToneIcon/>}
                                                         title={this.props.location.state.data.BldgType}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<HomeTwoToneIcon/>}
                                                         title={this.props.location.state.data.HouseStyle}/>
                                                </Grid>

                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<StoreMallDirectoryTwoToneIcon/>}
                                                         title={this.props.location.state.data.RoofStyle}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<PermDataSettingTwoToneIcon/>}
                                                         title={this.props.location.state.data.LotConfig}/>
                                                </Grid>
                                            </Grid>

                                            <Typography
                                                style={{
                                                    "marginTop": "2%",
                                                    fontFamily: "Raleway",
                                                    fontSize: "30px",
                                                    padding: "30px"
                                                }}>
                                                Condition
                                            </Typography>
                                            <Grid container
                                                  style={{"backgroundColor": "#fbfbfb", padding: "0% 2% 2% 2%"}}>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<HdTwoToneIcon/>}
                                                         title={this.props.location.state.data.OverallCond}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<QueryBuilderIcon/>}
                                                         title={this.props.location.state.data.YearBuilt}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<SettingsIcon/>}
                                                         title={this.props.location.state.data.RoofMatl}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Rating name="read-only"
                                                            value={this.props.location.state.data.OverallQual / 2}
                                                            readOnly/>
                                                </Grid>

                                            </Grid>


                                            <Typography
                                                style={{
                                                    "marginTop": "2%",
                                                    fontFamily: "Raleway",
                                                    fontSize: "30px",
                                                    padding: "30px"
                                                }}>
                                                Basement Information
                                            </Typography>
                                            <Grid container
                                                  style={{"backgroundColor": "#fbfbfb", padding: "0% 2% 2% 2%"}}>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<HighQualityIcon/>}
                                                         title={this.props.location.state.data.BsmtQual}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<GavelIcon/>}
                                                         title={this.props.location.state.data.BsmtCond}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<AssessmentIcon/>}
                                                         title={this.props.location.state.data.TotalBsmt}/>
                                                </Grid>

                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<BathtubOutlinedIcon/>}
                                                         title={this.props.location.state.data.BsmtFullBath}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<BathtubOutlinedIcon/>}
                                                         title={this.props.location.state.data.FullBath}/>
                                                </Grid>

                                            </Grid>

                                            <Typography
                                                style={{
                                                    "marginTop": "2%",
                                                    fontFamily: "Raleway",
                                                    fontSize: "30px",
                                                    padding: "30px"
                                                }}>
                                                Sale
                                            </Typography>
                                            <Grid container
                                                  style={{"backgroundColor": "#fbfbfb", padding: "0% 2% 2% 2%"}}>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<EventAvailableOutlinedIcon/>}
                                                         title={this.props.location.state.data.YrSold}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<ReceiptOutlinedIcon/>}
                                                         title={this.props.location.state.data.SaleType}/>
                                                </Grid>
                                                <Grid item xs={6} lg={3} style={detailStyle.item}>
                                                    <Tag icon={<BorderColorOutlinedIcon/>}
                                                         title={this.props.location.state.data.SaleCondition}/>
                                                </Grid>
                                            </Grid>


                                        </Grid>
                                        <Grid item xs={2} lg={2}/>

                                    </Grid>


                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item lg={1}/>
                </Grid>
            </React.Fragment>
        );
    }
}