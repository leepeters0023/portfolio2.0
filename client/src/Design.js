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
      </div>
    )
  }
  testModal = () => {
    return (
      <div id='testModal' className='modal'>
      </div>
    )
  }
}

export default Design