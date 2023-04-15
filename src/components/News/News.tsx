import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material"
import React from "react"
import NewsCard from "./NewsCard"

const News = () => {
    return (<>
        <Grid container spacing={4}>
            <NewsCard
                date="2023/4/15"
                title="開発者募集中"
                url="https://game-creators.camp/recruits/qYAy4wQmEzc6bymBdoeB"
            />
            <NewsCard
                date="2023/3/18"
                title="第2回 TikChocoConnect 公開"
                image="https://i.ytimg.com/vi/a2QT-10UuM8/hqdefault.jpg?"
                url="https://youtu.be/a2QT-10UuM8"
            />
            <NewsCard
                date="2023/2/19"
                title="第1回 TikChocoConnect 公開"
                image="https://i.ytimg.com/vi/kJFBjG2eSuk/hqdefault.jpg"
                url="https://youtu.be/kJFBjG2eSuk"
            />
            <NewsCard
                date="2023/2/4"
                title="ホームページ公開"
                description="詳細"
            />
        </Grid>
    </>)
}

export default News