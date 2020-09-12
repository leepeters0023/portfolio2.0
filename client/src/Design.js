import React from "react";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  500: 1,
};

let items = [
  {
    id: 1,
    name: "My First Item",
    src: "/Images/HollywoodBowl-2.jpg",
    alt: "hollywoodbowl2",
    id: "HollywoodBowl",
  },
  {
    id: 2,
    name: "Another item",
    src: "/Images/alligiance.png",
    alt: "alligiance-logo",
    id: "alligiance",
  },
  {
    id: 3,
    name: "Third Item",
    src: "/Images/mrp.png",
    alt: "mar river path",
    id: "mrp",
  },
  {
    id: 4,
    name: "Here is the Fourth",
    src: "Images/lyftSelect.png",
    alt: "lyft select",
    id: "lyft-select",
  },
  {
    id: 5,
    name: "High Five",
    src: "Images/lyftWorks.png",
    alt: "lyft works",
    id: "lyft-works",
  },
  {
    id: 6,
    name: "x",
    src: "Images/lyftBesties2.png",
    alt: "lyft besties two",
    id: "lyft-besties2",
  },
  {
    id: 7,
    name: "x",
    src: "Images/lyftBesties.png",
    alt: "lyft besties",
    id: "lyft-besties",
  },
  {
    id: 8,
    name: "x",
    src: "Images/heartbay.png",
    alt: "heart bay organics",
    id: "heartbay",
  },
  {
    id: 9,
    name: "x",
    src: "Images/destdev.png",
    alt: "destination development",
    id: "destdev",
  },
  {
    id: 10,
    name: "x",
    src: "Images/destinationdev.png",
    id: "dest-dev-small",
    alt: "destination development",
  },
  {
    id: 12,
    name: "x",
    src: "Images/sqlabel.png",
    alt: "clean bottle square logo",
    id: "sqlabel",
  },
  {
    id: 13,
    name: "x",
    src: "Images/jenniePoster.jpg",
    alt: "Jennie Bender Promo poster",
    id: "jennie-poster",
  },
  {
    id: 14,
    name: "x",
    src: "/Images/HollywoodBowl1.jpg",
    alt: "hollywood bowl",
    id: "HollywoodBowl1",
  },
  {
    id: 15,
    name: "x",
    src: "/Images/cleanBottle8.png",
    alt: "clean bottle display",
    id: "Cleanbottle8",
  },
  {
    id: 16,
    name: "x",
    src: "/Images/cleanBottleSellSheet.jpg",
    alt: "cleanbottle sell sheet",
    id: "cleanBottleSellSheet",
  },
  {
    id: 17,
    name: "x",
    src: "/Images/cleanBottleInsta2.jpg",
    alt: "clean bottle instagram",
    id: "cleanBottleInsta2",
  },
  {
    id: 18,
    name: "x",
    src: "/Images/cleanBottleInsta3.jpg",
    alt: "clean bottle instagram",
    id: "cleanBottleInsta3",
  },
  {
    id: 19,
    name: "x",
    src: "/Images/custombottles.jpg",
    alt: "custom clean bottles",
    id: "custombottles",
  },
  {
    id: 11,
    name: "x",
    src: "Images/bloom.png",
    alt: "bloom graphic",
    id: "bloom",
  },
];

items = items.map(function (item) {
  return (
    <div key={item.id}>
      <img src={item.src} alt={item.alt} id={item.id} className="designImg" />
    </div>
  );
});

class Design extends React.Component {
  render() {
    return (
      <div id="masonry-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    );
  }

  /* render() {
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
           <div className='item-description'><h4>More Destination Development, this time a little more modern</h4></div>
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
       </div>
     )
   }


   [<img src='/Images/HollywoodBowl-2.jpg' alt='hollywoodbowl2' id='HollywoodBowl' className='designImg'></img>,
           <img src='/Images/alligiance.png' alt='alligiance-logo' id='alligiance' className='designImg'></img>,
           <img src='/Images/mrp.png' alt='mar river path' id='mrp' className='designImg'></img>,
           <img src='Images/lyftSelect.png' alt='lyft select' id='lyft-select' className='designImg'></img>,
           <img src='Images/lyftWorks.png' alt='lyft works' id='lyft-works'className='designImg'></img>,
           <img src='Images/lyftBesties2.png' alt='lyft besties two' id='lyft-besties2'className='designImg'></img>,
           <img src='Images/lyftBesties.png' alt='lyft besties' id='lyft-besties'className='designImg'></img>,
           <img src='Images/heartbay.png' alt='heart bay organics' id='heartbay' className='designImg'></img>,
           <img src='Images/destdev.png' alt='destination development' id='destdev' className='designImg'></img>,
           <img src='Images/destinationdev.png' id='dest-dev-small' alt='destination development' className='designImg'></img>,
           <img src='Images/bloom.png' alt='bloom graphic' id='bloom' className='designImg'></img>,
           <img src='Images/sqlabel.png' alt='clean bottle square logo' id='sqlabel'className='designImg'></img>,
           <img src='Images/jenniePoster.jpg' alt='Jennie Bender Promo poster' id='jennie-poster'className='designImg'></img>,
           <img src='/Images/HollywoodBowl1.jpg' alt='hollywood bowl' id='HollywoodBowl1'className='designImg'></img>,
           <img src='/Images/cleanBottle8.png' alt='clean bottle display' id='Cleanbottle8' className='designImg'></img>,
           <img src='/Images/cleanBottleSellSheet.jpg' alt='cleanbottle sell sheet' id='cleanBottleSellSheet' className='designImg'></img>,
           <img src='/Images/cleanBottleInsta2.jpg' alt='clean bottle instagram' id='cleanBottleInsta2' className='designImg'></img>,
           <img src='/Images/cleanBottleInsta3.jpg' alt='clean bottle instagram' id='cleanBottleInsta3' className='designImg'></img>,
           <img src='/Images/custombottles.jpg' alt='custom clean bottles' id='custombottles' className='designImg'></img>,
           ]}
   */
}

export default Design;
