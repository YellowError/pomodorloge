import React, {useState, useEffect} from 'react'
import {convertHms} from "../helpers/convertHMS"
import  Button  from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {cardStyles} from "./styles/timer"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"

let myInterval;

function Timer({timeToSpend, switchClock, children}) {
    const classes = cardStyles();
    const [isStarted, setStarted] = useState(false);
    const [timer, setTimer] = useState(timeToSpend);

    useEffect(() => {
        return () => {
            clearInterval(myInterval);
        }
    }, [])
    
    const changeTimerStatus = () =>{
        if(isStarted){
            clearInterval(myInterval);
            setStarted(!isStarted);
        }else{
            myInterval = setInterval(() => {
                setTimer(t => t - 1);
            }, 1000);
            setStarted(!isStarted);
        }
    }
    
    if( timer === 0){
        clearInterval(myInterval);
        // switchClock();
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        P
                    </Avatar>
                }
                title="Pomodorloge"
                subheader={children}
            >
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography variant="h1" color="textSecondary">
                    {convertHms(timer)}
                </Typography>
                <Button 
                className={classes.button}
                variant="contained" 
                color="secondary" 
                onClick={changeTimerStatus}
                >
                    {isStarted?"stop":"start"}
                </Button>
            </CardContent>
        </Card>
    )
}

export default Timer
