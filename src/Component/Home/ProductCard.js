import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    width:"100%",
  },
  media: {
    width:"100%",
    height: 100,
    backgroundSize:"contain"
  },
});

const ECardContent = styled(CardContent)`
  
`;

export default function MediaCard({img}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            상품명
          </Typography>
          <div>
          <Typography variant="body2" color="textSecondary" component="p">
                이 상품은 어쩌구 저쩌구 
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}