import React from 'react'
import './ArticleCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ArticleCard = ({ title = '', text = '', img = '' }) => {
  return (
    <Card sx={{ maxWidth: 250 }} className='article-card'
    >
      <CardActionArea>
        {/* <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ArticleCard
