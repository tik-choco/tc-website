import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material"
import React from "react"
import NewsCard from "./NewsCard"

const News = () => {
    return (<>
        <hr />
        <Typography component="h2" variant="h5">
            News
        </Typography><br />
        <Grid container spacing={4}>
            <NewsCard
                date="2023/2/4"
                title="ホームページ公開"
                image="https://i1.wp.com/tik-choco.com/wp-content/uploads/2019/11/s16.jpg"
                description="詳細"
            />
        </Grid>
    </>)
}

export default News