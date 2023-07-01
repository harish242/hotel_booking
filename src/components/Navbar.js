import AppBar from "@mui/material/AppBar";

import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Person4Icon from '@mui/icons-material/Person4';
import{auth} from '../firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate=useNavigate()
    const signout=()=>{
        auth.signOut().then((response)=>{
            navigate('/')
        }).catch(error=>{
            console.log(error)
        })
        console.log('button is clicked')

        
    }

return (

<>

<AppBar component="nav">

<Toolbar>

<IconButton

color="inherit"

aria-label="open drawer"

edge="start"

// onClick={handleDrawerToggle}

sx={{ mr: 2, display: { sm: "none" } }}

>

<MenuIcon />

</IconButton>

<Typography

variant="h6"

component="div"

sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}

>

BookStay

</Typography>

<Box sx={{ display: { xs: "none", sm: "block" } }}>
<Button  sx={{ color: "#fff" }}>

Home

</Button>
<Person4Icon onClick={signout}/>


{/* {navItems.map((item) => (

<Button key={item} sx={{ color: "#fff" }}>

{item}

</Button>

))} */}

</Box>

</Toolbar>

</AppBar>

</>

);

};

export default NavBar;