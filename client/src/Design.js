import React from 'react'

class Design extends React.Component {
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
  }
  closeModal = (event) => {
    this.setState({
      modalDisplay: false,
    });
  }

  render() {
    return (
      <div>
        <div id='Design'>
          <div id='designContent'>
            <h1>Here will live a mighty carousel</h1>
          </div>
          <div id='designCopy'></div>
        </div>
        <div className='more-to-come'>
          <h3>More on the way, stay tuned...</h3>
        </div>
      </div>
    )
  }
}

export default Design