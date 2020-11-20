import React from 'react';
// MUI
import {Grid} from '@material-ui/core';
// Components
import HomeDescriptionItem from './HomeDescriptionItem';
// Icons
import RoomIcon from "@material-ui/icons/Room";
import PaymentIcon from "@material-ui/icons/Payment";
import ForumIcon from "@material-ui/icons/Forum";

const dataSet = {
    data:[
        {
            content: "Lorem ipsum dolor, it amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",
            img: <RoomIcon style={{width: 100, height: 100}}/>,
            direction: "row"
        },
        {
            content: "Lorem ipsum dolor, sit amet consecttur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",
            img: <PaymentIcon style={{width: 100, height: 100}}/>,
            direction: "row"
        },
        {
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",
            img: <ForumIcon style={{width: 100, height: 100}}/>,
            direction: "row"
        },
    ]
}

const HomeDescription = () => {

    return (
        <div>
            <Grid container>
                    {dataSet.data.map(item => (
                        <Grid item 
                            xs={12} lg={4} 
                            key={item.content}>
                                <HomeDescriptionItem content={item.content} 
                                    direction={item.direction} 
                                    img={item.img}
                                />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
};

export default HomeDescription;
