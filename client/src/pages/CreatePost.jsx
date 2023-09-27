
import Header  from "../components/Header";
import { useState } from "react";
import {Box, Typography, styled , FormLabel, TextField, Button} from '@mui/material';
import Dropdown from "../components/Dropdown";
import { savePost } from "../components/services/api";
import { useNavigate } from "react-router-dom";
import routePath from "../routes/route";
const Comonents = styled(Box)({
    padding: '80px 200px',
    background:'#F5F5F5',
    
})
const Container = styled(Box)({
    display: 'flex',
    flexDirection : 'row',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight:700,
        opacity:'0.7'
    }
})

const FormWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    marginTop:20,
    padding: 20,
    background: "#FFFFFF",
    borderRadius:20,
    '& > *':{
        marginTop: '20px !important'
    }
})

const defaultObj ={
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [],
    salary:""
}
const options = {
    type: ["Online","Offline"],
    experience:["0-2 yrs", "3-5 yrs","5-8 yrs", "8 and more yrs"],
    technology:["Java","React","GCP","Typescript","c++","Python","AWS","SQL"],
    salary: ["1cr","4Cr","7Cr","10+ cr"]
}

const CreatePost =() => {

    const [data, setData] = useState(defaultObj);

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const navigate = useNavigate();
    const handleChange = (e) =>{
        setData({ ...data,[e.target.name]: e.target.value});
    }

    const saveJob = async() => {
        await savePost(data);
        navigate(routePath.posts);
    }

    return (
        <>
        <Header/>
        <Comonents>
            <Container>
                <Typography>Create a job post</Typography>
                <img src={image} alt = "create"/>
            </Container>
            <FormWrapper>
                <TextField 
                    placeholder="Job Title"
                    name="profile"
                    onChange={handleChange}
                 />
                 <Dropdown
                    label="Job Type"
                    id="job-type-label"
                    value={data.type}
                    handleChange={handleChange}
                    name="type"
                    options={options.type}
                    
                 />
                <TextField 
                    placeholder="Job Description"
                    name="description"
                    onChange={handleChange}
                 />
                <Dropdown
                    label="Experience"
                    id="job-experience-label"
                    value={data.experience}
                    handleChange={handleChange}
                    options={options.experience}
                    name="experience"
                />
                <Dropdown 
                    label="Technology"
                    id="job-technology-label"
                    value={data.technology}
                    handleChange={handleChange}
                    
                    options={options.technology}
                    name="technology"
                    multiple
                    />
                <Dropdown 
                    label="Salary"
                    id="job-salary-label"
                    value={data.salary}
                    handleChange={handleChange}
                    
                    options={options.salary}
                    name="salary"/>
                <Button onClick={() => saveJob()} variant="contained">Save Job</Button>
            </FormWrapper>
        </Comonents>
        </>
    )
}
export default CreatePost;