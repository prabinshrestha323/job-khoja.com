import React from "react";
import {Box, Grid, Typography, Button, makeStyles } from "@material-ui/core"

const skills =["Javascript", "react.js", "Node.js"]

const useStyles = makeStyles({
    wrapper:{
        border:"1px solid #e8e8e8"
    }
})
export default (props)=>{
    const classes = useStyles()
    return(
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems ="center">
                <Grid item xs>
                    <Typography variant="subtitle1">Fontend Dev</Typography>
                    <Typography variant="subtitle2">Google</Typography>
                </Grid>
           <Grid item container xs>
               {skills.map(skill =><Grid key ={skill} item>{skill} </Grid>)}
           </Grid>
<Grid item container direction="column" alignItems="flex-end" xs>
<Grid item >
<Typography variant="caption">2577 min ago | Full time | Remote</Typography>

</Grid>

<Grid item>
    <Box mt={2}>
    <Button variant="outlined">Check</Button>
    </Box>
</Grid>
            </Grid>
            </Grid>
        </Box>
    )
}