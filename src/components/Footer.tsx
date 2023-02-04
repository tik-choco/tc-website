import { Box, Link, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

const Footer = () => {

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}{' '}
                <Link color="inherit" href="https://tik-choco.com/">
                    TikChoco
                </Link>
            </Typography>
        </Box>
    )
}

export default Footer;