
import Header from "../components/Header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import  routhPath from "../routes/route";


const Component = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 110px',
    '& > div' : {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& >  p': {
            letterSpacing: -1,
            fontSize: 56,
            lineHeight: 1.25,
        },
        '& >  button' : {
            width: 200,
            height:50,
            background: 'rgb(37,87,167)',
            textTransform:'none',
            marginTop:10,
            display: 'flex',
            alignItems:'center'
        }
    }
}

)


const Home = () => {
    const nav = useNavigate();
    const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";

    return (
        <div>
           <Header/>
           <Component>
            <Box>
                <p variant="h2" component="h2">
                    Lets make your next <br/>great hire.<br/>Fast.
                </p>
                <Button variant="contained" onClick={() => nav(routhPath.create) }>Post a job</Button>
                
            </Box>
            <Box>
                <img src = {animatedImage} alt= "home"/>
            </Box>
            </Component>
        </div>
    )
}

export default Home;