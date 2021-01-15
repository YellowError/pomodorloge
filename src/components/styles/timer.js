import {makeStyles} from "@material-ui/core/styles"
import {red} from "@material-ui/core/colors"

export const cardStyles = makeStyles((theme) => ({
    root:{
        minWidth: 275,
        backgroudColor: "red" 
    },
    content:{
    },
    avatar:{
        // color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500]
    },
    button:{
        width: "100%"
    }
}))