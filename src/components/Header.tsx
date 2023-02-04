import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Header = (props: any) => {

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        props.setPageNum(newValue);
    };



    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={props.pageNum}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {
                                Object.keys(props.page).map((value: string, index: number) => {
                                    return <Tab label={value} value={(index+1).toString()} />
                                })
                            }
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
        </>
    )
}

export default Header;