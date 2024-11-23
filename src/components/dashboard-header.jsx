// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typography, IconButton, Badge ,  } from '@mui/material';
import Avatar from '@mui/joy/Avatar';
import { Mail, Notifications } from '@mui/icons-material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';


const DashHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="h-12 px-1 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex-shrink-0 flex  items-center ">
                    <IconButton aria-label="delete" sx={{marginRight:"2rem"}}>
                        <MenuTwoToneIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color : "#360568"}}>
                        Dashboard
                    </Typography>
                </div>
                <div className="flex items-center space-x-6">
                    <IconButton  sx={{ color: "#360568" }}>
                        <Badge badgeContent={1} color="error">
                            <Mail/>
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ color: "#360568" }}>
                        <Badge badgeContent={1} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Avatar sx={{color : "#360568"}}>
                        MN
                    </Avatar>
                </div>
            </div>
        </header>
    );
};
export default DashHeader;