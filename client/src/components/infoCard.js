import CardActionArea from "@material-ui/core/CardActionArea";

import itemImage from "../assets/images/home.jpg";
import itemImage1 from "../assets/images/home1.jpg";
import itemImage2 from "../assets/images/home2.jpg";
import itemImage3 from "../assets/images/home3.jpg";
import itemImage4 from "../assets/images/home4.jpg";


import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Tag from "./tag";
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import BathtubTwoToneIcon from '@material-ui/icons/BathtubTwoTone';
import SquareFootTwoToneIcon from '@material-ui/icons/SquareFootTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import KingBedTwoToneIcon from '@material-ui/icons/KingBedTwoTone';

import Rating from "@material-ui/lab/Rating";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";


export default function InfoCard(props) {
    const {price, beds, baths, area, location, rating,img_index} = props;
    const image_set = [itemImage, itemImage1, itemImage2, itemImage3, itemImage4];
    return (
        <Card>
            <CardActionArea>
                <img
                    height="220"
                    width="100%"
                    src={image_set[img_index]}
                />
                <CardContent>

                    <Grid container style={{"marginTop": "2%"}}>
                        <Grid item xs={3} lg={3}>
                            <Tag icon={<MonetizationOnTwoToneIcon />} title={price}/>
                        </Grid>

                        <Grid item xs={3} lg={3}>
                            <Tag icon={<KingBedTwoToneIcon/>} title={beds}/>
                        </Grid>

                        <Grid item xs={3} lg={3}>
                            <Tag icon={<BathtubTwoToneIcon/>} title={baths}/>
                        </Grid>

                        <Grid item xs={3} lg={3}>
                            <Tag icon={<SquareFootTwoToneIcon/>} title={area}/>
                        </Grid>

                        <Grid item xs={12} lg={12} style={{marginTop: "5%"}}>
                            <Tag icon={<RoomTwoToneIcon/>}
                                 title={location}/>
                        </Grid>

                        <Grid item xs={12} lg={12} style={{marginTop: "5%"}}>
                            <Rating name="read-only" value={rating} readOnly/>
                        </Grid>

                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

