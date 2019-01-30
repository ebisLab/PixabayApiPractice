import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class ImageResults extends Component {

  state = {
    searchText: '',
    amount: 15, 
    apiUrl: 'https://pixabay.com/api',
    apiKey: '11422388-cf78b5aacb8fab8ae2dc796c1',
    images: []
  }
  render() {
    let imageListContent;
    //check for images destruction
    const{images} = this.props;

    if(images) {
      imageListContent = (
        <GridList cols={3}>
        {images.map(img => (
          <GridTile
          title={img.tags}
          key={img.id}
          subtitle={
            <span>
            by <strong>{img.user}</strong>
            </span>
          }

          actionIcon={
            <IconButton>
            <ZoomIn color="white" />
            </IconButton>
          }>

          <img src={img.largeImageURL} alt=" " />
          </GridTile>

          ))}
        </GridList>
        )

    } else {
      imageListContent = null;
    }
    return <div>{imageListContent} </div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults;
