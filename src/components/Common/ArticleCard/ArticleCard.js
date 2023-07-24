import React from "react"
import "./ArticleCard.scss"
import { Card, CardContent, Typography, CardActionArea } from "@mui/material"

const ArticleCard = ({ title = "", text = "", handleClick }) => {
  return (
    <Card sx={{ maxWidth: 250 }} className="article-card" onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="article-text"
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard
