import React from "react";
import { Box, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";

export default () => {
  return <ThemeProvider  theme ={theme}>
   <Grid container justify="center" >
  <Grid item xs={10}>
<searchbar/>
  </Grid>
  
  </Grid>
   
    <Header/>
  </ThemeProvider>
};
