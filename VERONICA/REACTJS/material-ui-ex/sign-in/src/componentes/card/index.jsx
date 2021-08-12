import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions,Button} from "@material-ui/core";
import { useStyles } from "./style.js";

export default function MyCard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif"
          title="Comida Colombiana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Comida Colombiana
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Esta es la famosa Bandeja Paisa.
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </React.Fragment>
  );
}
