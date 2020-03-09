import React from 'react';
import CustomCarousel from "../../components/carousel";

import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";

import InfoCard from "../../components/infoCard";
import {Carousel} from "react-responsive-carousel";

import axios from 'axios';
import {urls} from "../../config/urls";
import {Redirect} from "react-router-dom";

export default class ViewScreen extends React.Component {

    state = {
        residences: [],
        show: false,
        passObject: null,
    };

    componentDidMount() {
        let filter = localStorage.getItem("filter");
        filter = JSON.parse(filter);
        axios.post(urls.server + "/filter", {
            headers: {
                'Content-Type': 'application/json',
            },
            apply_filter: filter
        }).then(res => {
            const residences = res.data.data;
            this.setState({residences}, function () {
                console.log(this.state.residences[0]);
            });
        });
    }

    showDetails = (data) => {
        this.setState({passObject: data});
        this.setState({show: true});
    };

    render() {
        return (
            <React.Fragment>

                {this.state.show &&
                <Redirect to={{
                    pathname: '/details',
                    state: {data: this.state.passObject}
                }}
                />
                }

                <Grid container>
                    <Grid item lg={1}/>
                    <Grid item lg={10}>

                        <Typography
                            style={{"marginTop": "2%", fontFamily: "Raleway", fontSize: "30px", padding: "30px"}}>
                            Filtered Results
                        </Typography>
                        <Grid container spacing={3}>

                            {this.state.residences.map((house, index) => (
                                <Grid item md={4} lg={4} style={{"padding": "30px"}}
                                      onClick={() => this.showDetails(house)}
                                >
                                    <InfoCard price={house.SalePrice} beds={house.BedroomAbvGr} baths={
                                        house.BsmtFullBath + house.BsmtHalfBath + house.FullBath + house.HalfBath
                                    } area={house.LotArea} img_index={index % 5}
                                              location="House # A-452, Model Town, Near Chorangi, Karachi, Pakistan"
                                              rating={house.OverallCond / 2}
                                    />
                                </Grid>

                            ))}

                        </Grid>
                    </Grid>
                    <Grid item lg={1}/>
                </Grid>
            </React.Fragment>
        );
    }
}