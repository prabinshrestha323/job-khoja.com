import React ,{useState}from "react";
import {Button, Typography, Box, Grid, FilledInput, Select, MenuItem, Dialog,DialogTitle, DialogContent, DialogActions, makeStyles,IconButton } from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
const useStyles =makeStyles(theme =>({
    skillChip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
       border:`1px solid ${theme.palette.secondary.main}`,
        color:theme.palette.secondary.main,
        cursor:"pointer",

        "&:hover": {
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
        }
    },
    included:{
        backgroundColor:theme.palette.secondary.main,
        color:"#fff"
    }

}))



export default props =>{
    const [jobDetails, setJobDetails] =useState({
        title:"",
        type:"Full time",
        companyName:"",
        companyUrl:"",
        location:"Remote",
        link:"",
        description:"",
    skills:[],
    })

    const handleChange = e =>{
        e.persist();
        setJobDetails(oldState =>({...oldState,[e.target.name]: e.target.value, }))
    }
    const addRemoveSkill = (skill) =>{
        jobDetails.skills.includes(skill)
        ? setJobDetails(oldState =>({...oldState, skills: oldState.skills.filter((s) => s !== skill   ),
        } ))
:setJobDetails((oldState)=> ({
    ...oldState,
    skills:oldState.skills.concat(skill),
}));
    }
    const classes =useStyles( );
const skills =[
    "javascript",
    "React",
    "Node",
    "vue",
    "Angular",
    "Firebase",
    "MongoDB",
    "SQL",
]
console.log(jobDetails)
    return(
        <Dialog open = {true} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton>
                    <CloseIcon/>
                </IconButton>
                    </Box>
                    </DialogTitle>
             <DialogContent>
                 <Grid container spacing={2    }>
                     <Grid item xs ={6}>
                         <FilledInput 
                         onChange={handleChange}
                         name="title"
                         value={jobDetails.title}
                         autoComplete="off"
                         placeholder="Job title *" disableUnderline  fullWidth/>
                         </Grid>
                         <Grid item xs ={6}>
                         <Select  fullWidth 
                         onChange={handleChange}
                         name="type"
                         value={jobDetails.type} disableUnderline variant="filled"  >
                        <MenuItem value="Full time">Full time</MenuItem>
                        <MenuItem value="Part time">Part time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                         </Select>
                         </Grid>
                         <Grid item xs ={6}>
                         <FilledInput onChange={handleChange} name="companyName"
                         value={jobDetails.companyName} autoComplete="off" placeholder="Company name*" disableUnderline  fullWidth/>
                         </Grid>
                         <Grid item xs ={6}>
                         <FilledInput onChange={handleChange} name="companyUrl"
                         value={jobDetails.companyUrl} autoComplete="off" placeholder="Company Url*" disableUnderline  fullWidth/>
                         </Grid>
                         <Grid item xs ={6}>
                         <Select onChange={handleChange} name="location"
                         value={jobDetails.location}  fullWidth disableUnderline variant="filled"  >
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="In-office">In-office</MenuItem>
                         </Select>
                         </Grid>
                          <Grid item xs ={6}>
                         <FilledInput  onChange={handleChange} name="link"
                         value={jobDetails.link} autoComplete="off" placeholder="Job link*" disableUnderline  fullWidth/>
                         </Grid>
                         <Grid item xs ={12}>
                         <FilledInput onChange={handleChange} name="description"
                         value={jobDetails.description} autoComplete="off" placeholder="Job description*" disableUnderline  fullWidth multiline rows={6}/>
                         </Grid>
                         
                 </Grid>
                 <Box mt={2}>
                 <Typography>Skills</Typography>
                 <Box display={"flex"}>
                     {skills.map(skill =>(
                     <Box onClick={() => addRemoveSkill(skills)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`} key={skill}>{skill}</Box>
                     ))}
                 </Box>
                 </Box>
             </DialogContent>
             <DialogActions>
                 <Box color="red" width="100%" display="flex" justifyContent="space-between"alignItems="center">
                 <Typography variant="caption">*Required fields</Typography>
                 <Button variant="contained" disableElevation color="primary">Post job</Button>
                 </Box>
             </DialogActions>
        </Dialog>
    )
                     }