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
      <div id='Design'>
        <div id='design-content'>
          <img src='/Images/HollywoodBowl-2.jpg' alt='hollywoodbowl2' id='HollywoodBowl' className='designImg'></img>
          <img src='/Images/alligiance.png' alt='alligiance-logo' id='alligiance' className='designImg'></img>
          <img src='/Images/mrp.png' alt='mar river path' id='mrp' className='designImg'></img>
          <img src='Images/lyftSelect.png' alt='lyft select' id='lyft-select' className='designImg'></img>
          <img src='Images/lyftWorks.png' alt='lyft works' id='lyft-works'className='designImg'></img>
          <img src='Images/lyftBesties2.png' alt='lyft besties two' id='lyft-besties2'className='designImg'></img>
          <img src='Images/lyftBesties.png' alt='lyft besties' id='lyft-besties'className='designImg'></img>
          <img src='Images/heartbay.png' alt='heart bay organics' id='heartbay' className='designImg'></img>
          <img src='Images/destdev.png' alt='destination development' id='destdev' className='designImg'></img>
          <img src='Images/destinationdev.png' id='dest-dev-small' alt='destination development' className='designImg'></img>
          <img src='Images/bloom.png' alt='bloom graphic' id='bloom' className='designImg'></img>
          <img src='Images/sqlabel.png' alt='clean bottle square logo' id='sqlabel'className='designImg'></img>
          <img src='Images/jenniePoster.jpg' alt='Jennie Bender Promo poster' id='jennie-poster'className='designImg'></img>
          <img src='/Images/HollywoodBowl1.jpg' alt='hollywood bowl' id='HollywoodBowl1'className='designImg'></img>
          <img src='/Images/CleanBottle8.png' alt='clean bottle display' id='Cleanbottle8' className='designImg'></img>
          <img src='/Images/cleanBottleSellSheet.jpg' alt='cleanbottle sell sheet' id='cleanBottleSellSheet' className='designImg'></img>
          <img src='/Images/cleanBottleInsta2.jpg' alt='clean bottle instagram' id='cleanBottleInsta2' className='designImg'></img>
          <img src='/Images/cleanBottleInsta3.jpg' alt='clean bottle instagram' id='cleanBottleInsta3' className='designImg'></img>
          <img src='/Images/custombottles.jpg' alt='custom clean bottles' id='custombottles' className='designImg'></img>
        </div>

      </div>
    )
  }
}

export default Design