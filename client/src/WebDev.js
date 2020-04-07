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
      modalDisplay: true,
      currentModal: event.target.id

    })
    console.log('clicked')
    console.log(event.target.id)
  }
  closeModal = (event) => {
    this.setState({
      modalDisplay: false,
    });
  }

  render() {
    return (
      <div>
        <div id='webDev'>
          <img id='e7754b14c80249eaaa0844afea3f4c84' alt='yelpington thumb' className='webdev-thumb' onClick={this.openModal} src='Images/yelpington.png'></img>
          <img id='171415a1c6d745d39dda2471215219cb' alt='geo vermonter thumb' className='webdev-thumb' onClick={this.openModal} src='Images/geoVT.png'>
          </img>
        </div>
        {this.state.modalDisplay ? <Modal closeModal={this.closeModal} currentModal={this.state.currentModal} /> : null}
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
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0'}}>
        <iframe src={`https://www.loom.com/embed/${props.currentModal}`} frameBorder="0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
        </div>
      </div>
      <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
    </div>
    </div >
  )
}

// never call functions, they are called in event
// all componants should be capitalized

export default WebDev
