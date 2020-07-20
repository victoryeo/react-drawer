import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 650
  },
  subheader: {
    width: "50%"
  },
  textp: {
    color: "#cccccc"
  }
});

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/plant.jpg",
    title: "Water plant",
    author: "BkrmadtyaKarki"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/mushroom.jpg",
    title: "Mushrooms",
    author: "PublicDomainPictures"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/star.jpg",
    title: "Sea star",
    cols: 2,
    author: "821292"
  },
];

function ImageGridList(props) {
  const { classes } = props;

  return (
    <>
    <div className={classes.textp} style={{ backgroundColor: "black" }} >
    <Typography color="inherit" variant="h6">
      Summary
    </Typography>
    </div>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
