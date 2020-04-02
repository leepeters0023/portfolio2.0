import React from 'react'

class WebDev extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDisplay: false
    }
  }
  openModal = (event) => {
    this.setState({
      modalDisplay: true
    })
    console.log('clicked')

  }
  closeModal = (event) => {
    this.setState({
      modalDisplay: false,
    });
  }
  handleClick = (event) => {
    // do something that gets the ID of the photo that's been clicked
  }

  render() {
    return (
      <div>
        <div id='webDev'>
          <img id='yelpington' className='webdev-thumb' onClick={this.openModal} src='Images/yelpington.png'></img>
        </div>
        {this.state.modalDisplay ? <Modal closeModal={this.closeModal} /> : null}
        <div className='more-to-come'>
          <h3>More on the way, stay tuned...</h3>
        </div>
      </div>
    )
  }
}


function Modal(props) {
  return (
    <div id='webDev'>
      <div id='Modal' className='modal'>
        <div className='video'>
          <iframe className='vidIframe' src="https://www.loom.com/share/e7754b14c80249eaaa0844afea3f4c84" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}

async function getVids() {
  let vidList = await fetch('videos.json')
    .then((response) => {
      return response.json();
    }).then((jsonObj) => {
      return jsonObj;
    })

  let link = video - links.//id of thing returned by click event;
  // now return the link to the modal 
}

// never call functions, they are called in event
// all componants should be capitalized
export default WebDev
