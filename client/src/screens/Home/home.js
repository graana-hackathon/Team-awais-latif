import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";

import {colors} from "../../assets/styles";

export default class HomeScreen extends React.Component {

    state = {};

    render() {
        return (
            <React.Fragment>

                <Typography
                    style={{"marginTop": "2%", fontFamily: "Raleway", fontSize: "30px", padding: "30px 30px 0px 30px",
                            color: colors.header
                    }}>
                    Welcome to Graana.com - Pakistan’s Smartest Property Portal!
                </Typography>
                <Typography
                style={{fontFamily: "Raleway", fontSize: "24px", padding: "30px",
                }}
                >
                    For more than a decade our intention has been to revolutionise the real estate industry in Pakistan.
                    The same belief drove the vision of our real estate team, Graana; where quality beats quantity.
                    Graana is a result of simplified essential components of real estate into a more efficient and user
                    friendly portal. We have introduced an extremely transparent and purposeful portal where we will
                    help you buy, rent, sell or even rent out your property, a place where you can sit back relax and
                    let us market your projects and listings. We believe we have set a new standard for the future of
                    real estate in Pakistan by providing the smartest property portal.
                </Typography>

            </React.Fragment>
        );
    }
}