import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import '../styles/Media.css'
// import bitcoinImg from '../../images/bitcoin.jpg'

class Media extends PureComponent {

  // state = {
  //   author: this.props.author
  // }

  handleClick = (e) =>{
    // console.log(this.props.title);
    // this.setState({ author: 'Ricardo Perez' })
    this.props.handleOpenModal(this.props)
  }

  render() {
    
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }

    const { author, title, cover} = this.props
    return (
      <div className="Media" onClick={this.handleClick} >
        <div className="Media-cover" >
          <img 
            src={cover}
            alt="imagen"
            width={240}
            height={160}
            className="Media-img"
          />
          <h3 className="Media-title" >{ title }</h3>
          <p className="Media-author" >{ author }</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;