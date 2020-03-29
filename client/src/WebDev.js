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

  render() {
    return (
      <div>
        <div id='webDev'>
          <img className='webDevThumb' onClick={this.openModal} src='Images/yelpington.png'></img>
        </div>
        {this.state.modalDisplay ? <TestModal closeModal={this.closeModal} /> : null}
      </div>
    )
  }
}
function TestModal(props) {
  return (
    <div id='webDev'>
      <div id='testModal' className='modal'>
        <div className='video'>
          <iframe className='vidIframe' src="https://www.loom.com/embed/b1aad2d883204016b1e0a0d08f25f41b" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}
// never call functions, they are called in event
// all comps should be capitalized
export default WebDev
