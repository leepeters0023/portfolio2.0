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
  /*handleChange = (event) => {
    this.setState({
      modalDisplay: event.target.value
    });
  }*/

  render() {
    return (
      <div>
        <div id='Design'>
         <div id='designContent'>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
          <img src='Images/' className='designImg'></img>
         </div>
         <div id='designCopy'></div>
        </div>
      </div>
    )
  }
  testModal = () => {
    return(
      <div id='testModal' className='modal'>
      </div>
    )}
}



export default Design