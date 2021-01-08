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

items = items.map((item, i)  => {
  return (
    <div key={i}>
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
  };
};

export default Design;
