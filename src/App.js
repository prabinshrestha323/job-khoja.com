import React, {useState, useEffect} from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";
import SearchBar from "./components/SearchBar";
import Job from "./components/Job/JobCard";
import NewJobModel from "./components/Job/NewJobModal";
import jobData from "./dummyData";
import JobCard from "./components/Job/JobCard";
import { firestore } from "./components/firebase/config";

export default () => {
const [jobs, setJobs]= useState([]);


const fetchJobs = async () =>{
  const req = await firestore.collection("jobs").orderBy("postedOn","desc").get();
}

useEffect (()=>{
  fetchJobs();
}, [])
  return <ThemeProvider  theme ={theme}>
     <Header/>
     <NewJobModel/>
   <Grid container justify="center" >
  <Grid item xs={10}>
<SearchBar/>

{jobData.map(job =><JobCard key ={job.id} {...job}/>)}


  </Grid>
  </Grid>
   
   
  </ThemeProvider>
};
