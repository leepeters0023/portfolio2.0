import React from 'react'

class Design extends React.Component {
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
          <img src='/Images/HollywoodBowl-2.jpg' alt='hollywoodbowl2' id='HollywoodBowl' className='designImg' data='test test'></img>
          <div className='item-description'><h4>Custom logo for Hollywood Bowl, a concert venue in California</h4></div>
          <img src='/Images/alligiance.png' alt='alligiance-logo' id='alligiance' className='designImg'></img>
          <div className='item-description'><h4>Custom logo for Alligiance Benefits, an insurance broker in Montana</h4></div>
          <img src='/Images/mrp.png' alt='mar river path' id='mrp' className='designImg'></img>
          <div className='item-description'><h4>Custom logo for the Mad River Path, an environmental non-profit in Vermont</h4></div>
          <img src='Images/lyftSelect.png' alt='lyft select' id='lyft-select' className='designImg'></img>
          <div className='item-description'><h4>Rebrand exploration for the popular ride share app, Lyft.<br></br>This work served as part of a pitch deck for proposed new verticals. 
          <br></br>Here, we see a possible logo for Lyft's high end service</h4></div>
          <img src='Images/lyftWorks.png' alt='lyft works' id='lyft-works'className='designImg'></img>
          <div className='item-description'><h4>Rebrand exploration for the popular ride share app, Lyft.<br></br>A possible logo for Lyft's service aimed at ride sharing to work</h4></div>
          <img src='Images/lyftBesties2.png' alt='lyft besties two' id='lyft-besties2'className='designImg'></img>
          <div className='item-description'><h4>Rebrand exploration for the popular ride share app, Lyft.<br></br>A possible logo for Lyft's proposed referral program</h4></div>
          <img src='Images/lyftBesties.png' alt='lyft besties' id='lyft-besties'className='designImg'></img>
          <img src='Images/heartbay.png' alt='heart bay organics' id='heartbay' className='designImg'></img>
          <div className='item-description'><h4>Custom logo for Heart Bay Organics, a small batch family operated maple syrup producer in New York</h4></div>
          <img src='Images/destdev.png' alt='destination development' id='destdev' className='designImg'></img>
          <div className='item-description'><h4>Custom logo for Destination Development, a Colorado based tourism organization</h4></div>
          <img src='Images/destinationdev.png' id='dest-dev-small' alt='destination development' className='designImg'></img>
          <img src='Images/bloom.png' alt='bloom graphic' id='bloom' className='designImg'></img>
          <div className='item-description'><h4>Label for Clean Bottle Bloom Infusion Pods, a tea like product</h4></div>
          <img src='Images/sqlabel.png' alt='clean bottle square logo' id='sqlabel'className='designImg'></img>
          <div className='item-description'><h4>One of many labels created for the Clean Bottle Square water bottle</h4></div>
          <img src='Images/jenniePoster.jpg' alt='Jennie Bender Promo poster' id='jennie-poster'className='designImg'></img>
          <div className='item-description'><h4>Promotional poster for Jennie Bender, professional nordic ski racer</h4></div>
          <img src='/Images/HollywoodBowl1.jpg' alt='hollywood bowl' id='HollywoodBowl1'className='designImg'></img>
          <div className='item-description'><h4>Additional custom logo for Hollywood Bowl, a concert venue in California</h4></div>
          <img src='/Images/cleanBottle8.png' alt='clean bottle display' id='Cleanbottle8' className='designImg'></img>
          <div className='item-description'><h4>Custom display for Clean Bottle Square water bottle</h4></div>
          <img src='/Images/cleanBottleSellSheet.jpg' alt='cleanbottle sell sheet' id='cleanBottleSellSheet' className='designImg'></img>
          <div className='item-description'><h4>Custom sell sheet Clean Bottle Square water bottle</h4></div>
          <img src='/Images/cleanBottleInsta2.jpg' alt='clean bottle instagram' id='cleanBottleInsta2' className='designImg'></img>
          <div className='item-description'><h4>Avant garde Instagram fun for Clean Bottle</h4></div>
          <img src='/Images/cleanBottleInsta3.jpg' alt='clean bottle instagram' id='cleanBottleInsta3' className='designImg'></img>
          <div className='item-description'><h4>Promotional Instagram collaboration with the Amgen Tour of California</h4></div>
          <img src='/Images/custombottles.jpg' alt='custom clean bottles' id='custombottles' className='designImg'></img>
          <div className='item-description'><h4>Sample of various custom Clean Bottles</h4></div>
        </div>
        {this.state.modalDisplay ? <Modal closeModal={this.closeModal} currentModal={this.state.currentModal} /> : null}
      </div>
    )
  }
}
function Modal(props) {
  return (
    <div id='webDev'>
      <div id='designModal' className='modal'>
        <div className='video'>
          <div>
        <h4>{props.currentModal}</h4>
        </div>
      </div>
      <button className='headerButton' id='closeModalButton' onClick={props.closeModal}>Close</button>
    </div>
    </div >
  )
}

export default Design