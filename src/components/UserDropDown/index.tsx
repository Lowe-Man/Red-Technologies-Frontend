import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";

export default function UserDropDown() {
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                        <ListItemText primary="Login"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/signup">
                        <ListItemText primary="Signup"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Logout"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}