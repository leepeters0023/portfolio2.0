import React from 'react'

class WebDev extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDisplay: false,
      currentModal: ''
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
  handleChange = (event) => {
    this.setState({
      currentModal: event.target.id
    })
  }

  render() {
    return (
      <div>
        <div id='webDev'>
          <img id='e7754b14c80249eaaa0844afea3f4c84' alt='yelpington thumb' className='webdev-thumb' onClick={this.openModal} handleChange={this.handleChange} src='Images/yelpington.png'></img>
          <img id='171415a1c6d745d39dda2471215219cb' alt='geo vermonter thumb' className='webdev-thumb' onClick={this.openModal} handleChange={this.handleChange} src='Images/geoVT.png'>
          </img>
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
          <iframe className='vidIframe' src={`https://www.loom.com/share/${props.currentModal}`} webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}

// never call functions, they are called in event
// all componants should be capitalized

export default WebDev
