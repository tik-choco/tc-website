import { Typography } from "@mui/material";
import React from "react";

const Catchphrase = (props:any)=>{
    return (
        <>
            <Typography variant="h2" component="h2">
                {props.text}
            </Typography>
        </>
    )
}

export default Catchphrase;