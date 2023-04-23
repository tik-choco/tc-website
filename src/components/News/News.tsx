import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material"
import React from "react"
import NewsCard from "./NewsCard"
import NewsJsonData from "../../../content/news.json"

type Content = {
    date: string
    title: string
    url: string
    image: string
}

type Post = {
    posts: Content[]
}

const News = () => {    
    const NewsData: Post = NewsJsonData

    return (<>
        <Grid container spacing={4}>
            {NewsData.posts.map((post, index) => (
                <NewsCard
                    key={index}
                    date={post.date}
                    title={post.title}
                    url={post.url}
                    image={post.image}
            />    
            ))}            
        </Grid>
    </>)
}

export default News