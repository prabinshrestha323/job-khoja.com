import React from "react";
import {Box, Grid, FilledInput, Select, MeniItem, Dialog,DialogTitle, DialogContent, DialogActions } from "@material-ui/core"

export default props =>{

    return(
        <Dialog open = {true} fullWidth>
            <DialogTitle>Post Job</DialogTitle>
             <DialogContent>
                 <Grid container spacing={2    }>
                     <Grid item xs ={6}>
                         <FilledInput placeholder="Job title *" disableUnderline  fullWidth/>
                         </Grid>
                         <Grid item xs ={6}>
                         <Select disableUnderline variant="filled" defaultValue="Full time" >

                         </Select>
                         </Grid>
                 </Grid>
             </DialogContent>
        </Dialog>
    )
}