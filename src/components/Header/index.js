import React from "react";
import { Box,Grid, Typography, Button } from "@material-ui/core";

export default props => <Box bgcolor="secondary.main" color="white">
    <Typography variant ="h5">
        Open job Listing
    </Typography>
    <Button variant ="contained" color="primary" disableElevation>Post a Job </Button>
</Box>