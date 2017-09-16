import React, {Component} from 'react';

class Gallery extends Component {
  // constructor() {
  //
  // }
  render() {
    let altImage = 'http://www.adelaidefashionfestival.com.au/wp-content/plugins/wd-instagram-feed/images/missing.png';
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            console.log(imageLinks.thumbnail);
            return (
              <a key={index} className='book' href={infoLink} target='_blank'>
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : altImage}
                  alt={'book image'}
                  className='book-img' />
                <div className='book-title'>{title}</div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default Gallery;
