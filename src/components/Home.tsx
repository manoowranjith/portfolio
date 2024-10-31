import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material"
import myPic from '../assets/mypic.jpg';
import juhi from '../assets/juhi.jpg';
import dharineesh from '../assets/dharineesh.jpg';
import vignesh from '../assets/vignesh.jpg';
import sruthi from '../assets/sruthi.jpg';
import ranjith from '../assets/ranjith.jpg';
import veera from '../assets/veera.jpg';
import douglass from '../assets/douglass.jpg';
import hassim from '../assets/hassim.jpg';
import vinoth from '../assets/vinoth.jpg';
import karthi from '../assets/karthi.jpg';
import Grid from '@mui/material/Grid2';
import CustomizedTimeline from "./Timeline";
import LinkIcon from '@mui/icons-material/Link';

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const projects = [{
    name: "Neo Coe",
    link: "https://neoexam.io/coe-software/",
    pic: [{ name: "Manoowranjith", media: myPic }, { name: "Juhi", media: juhi }, { name: "Dharineesh", media: dharineesh }, { name: "Vignesh", media: vignesh }],
    role: "Full Stack Developer",
    overview: "Neo Exam CoE is a tool for managing exams in schools and colleges. In 2022, a new team updated the product to make it better for both small and large institutions. I joined the team as a full stack developer to enhance the application and improve its overall functionality.",
    stack: [
        { icon: <FaAngular size={26} />, label: 'Angular' },
        { icon: <FaNodeJs size={26} />, label: 'Nodejs' },
        { icon: <SiMysql size={26} />, label: 'Mysql' },
        { icon: <FaAws size={26} />, label: 'AWS' },
        { icon: <SiGooglecloud size={26} />, label: 'GCP' },
    ]
},
{
    name: "Neo Hire",
    link: "https://neohire.io/",
    pic: [{ name: "Manoowranjith", media: myPic }, { name: "Sruthi", media: sruthi }, { name: "Veera", media: veera }, { name: "Hassim", media: hassim }, { name: "Ranjith", media: ranjith }, { name: "Douglass", media: douglass }],
    role: "Full Stack Developer",
    overview: "Neo Hire is a recruitment platform aimed at simplifying the hiring process for organizations. As full stack developers, we played a crucial role in building the product from the ground up, focusing on features that cater to both small and large businesses. We successfully delivered the project in a short span of time.",
    stack: [
        { icon: <FaReact size={26} />, label: 'React' },
        { icon: <FaNodeJs size={26} />, label: 'Nodejs' },
        { icon: <IoLogoFirebase size={26} />, label: 'Firestore' },
        { icon: <FaAws size={26} />, label: 'AWS' },
        { icon: <SiGooglecloud size={26} />, label: 'GCP' },
    ]
},
{
    name: "American Golf",
    link: "https://www.americangolf.co.uk/services/about-us.html",
    pic: [{ name: "Manoowranjith", media: myPic }, { name: "Vinoth", media: vinoth }, { name: "Karthi", media: karthi }],
    role: "Frontend Developer",
    overview: "American Golf is a retail management store moving to a digital platform that features custom fit products. I worked on the frontend development, improving the user interface and experience, and also handled customer management features. My contributions helped ensure a smooth transition to the digital space for customers.",
    stack: [
        { icon: <FaReact size={26} />, label: 'React' },
        { icon: <SiRedux size={26} />, label: 'Redux' },
    ]
}]

const resumeLink = "https://mega.nz/file/OvJVFYob#C3gnU3bakDwxj32AvvLtNBNnUnk1KlMpo3udyYNYsJ0"
const contact = [{ icon: <FaLinkedin color="rgb(10, 102, 194)" size={30} />, link: "https://www.linkedin.com/in/manoow/" }, { icon: <FaGithub color="#262641" size={30} />, link: "https://github.com/manoowranjith" }]

const Home = () => {
    return <>
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "900px" }} container spacing={2}>
                    <Grid sx={{ order: { xs: 2, lg: 1 } }} size={{ xs: 12, md: 12, lg: 6 }} >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box>
                                <Typography>I'm</Typography>
                                <Typography variant="h1">Manoowranjith</Typography>
                                <Typography variant="h3">Software Engineer</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{ order: { xs: 1, lg: 2 } }} size={{ xs: 12, md: 12, lg: 6 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", position: "relative", transition: "background-color 25s ease", "&:hover > div": {
                                    backgroundColor: "black",
                                    transition: "background-color 2s ease",
                                },
                            }}>
                                <img style={{ width: "200px" }} src={myPic} alt="" />
                                <Box sx={{ border: "1px solid none", width: "200px", height: "200px", position: "absolute", bottom: "8%", left: "12%", zIndex: "-1", backgroundColor: "#cfcfcf" }}>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ my: 2 }}>
                <CustomizedTimeline />
            </Box>
            <Box sx={{ mx: 2 }}>
                <Grid sx={{ width: "100%", height: "100%" }} container spacing={4}>
                    {projects.map((each: any) =>
                        <Grid size={{ xs: 12, md: 6, lg: 4 }}>

                            <Box sx={{
                                border: "1px solid black", p: 2, transition: "box-shadow 0.3s ease",
                                "&:hover": {
                                    boxShadow: "20px -20px 0 #cfcfcf",
                                },
                                height: "100%"
                            }}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold" }}>{each.name}</Typography>
                                    <Tooltip title="External ↗">
                                        <LinkIcon onClick={() => window.open(each.link, '_blank')} sx={{ cursor: "pointer", ml: 1 }} />
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold" }}>Team</Typography>
                                    <Box sx={{ display: "flex", mt: 0.5 }}>
                                        {each.pic.map((eachPic: any) => <Tooltip title={eachPic.name} arrow>
                                            <Avatar sx={{ width: 28, height: 28, mr: 1 }} alt={eachPic.name} src={eachPic.media} />
                                        </Tooltip>)}

                                    </Box>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Role</Typography>
                                    <Typography>{each.role}</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Overview</Typography>
                                    <Typography>{each.overview}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>

                                        {each.stack.map((item: any) => (
                                            <Tooltip title={item.label}>
                                                <Box sx={{ mr: 2 }}>

                                                    {item.icon}
                                                </Box>
                                            </Tooltip>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box sx={{ mt: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Button onClick={() => window.open(resumeLink, '_blank')} sx={{ fontWeight: "bold", my: 3 }}>Resume</Button>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {contact.map((eachContact) =>
                        <Box sx={{ mr: 2, cursor: "pointer" }} onClick={() => window.open(eachContact.link, '_blank')}>

                            {eachContact.icon}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    </>
}

export default Home