import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import React from "react"

const NewsCard = (props: any) => {
    return (<>
        <Grid item xs={6} md={6}>
            <CardActionArea component="a" href="#">
                        <CardMedia
                            component="img"
                            sx={{ width: "100%", height: 140 }}
                            image={props.image}
                            alt={props.title}
                        />
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            <strong>{props.title}</strong>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {props.date}
                        </Typography>
                    </CardContent>
                        {/* <Typography variant="subtitle1" paragraph>
                            {props.description}
                        </Typography> */}
                </Card>
            </CardActionArea>
        </Grid>
    </>)
}

export default NewsCard