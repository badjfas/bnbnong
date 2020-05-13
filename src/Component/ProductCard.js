import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            상품명
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                이 상품은 어쩌구 저쩌구 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}