import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";
import SearchBar from "./components/SearchBar";
import Job from "./components/Job/JobCard";
import NewJobModel from "./components/Job/NewJobModal";


export default (props) => {
  return <ThemeProvider  theme ={theme}>
     <Header/>
     <NewJobModel/>
   <Grid container justify="center" >
  <Grid item xs={10}>
<SearchBar/>
<Job/>
<Job/>
<Job/>
<Job/>
  </Grid>
  </Grid>
   
   
  </ThemeProvider>
};
