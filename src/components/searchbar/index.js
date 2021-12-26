import React from "react"
import {Box, Button, Select, MenuItem } from "@material-ui/core"

export default props => {
    return (
        <Box>
            <Select>
                <MenuItem value="Full time">Full Time </MenuItem>
                <MenuItem value ="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract ">Contract</MenuItem>   
            </Select>
        </Box>
    )
}