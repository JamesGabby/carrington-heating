import React, { Component } from "react";
import Carousel from "react-simply-carousel";

class ClientCarousel extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <Carousel 
        autoplay={true} 
        speed={1000}
        delay={3000}
        activeSlideIndex={this.state.activeSlideIndex}
        onRequestChange={this.setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
      >
        <div style={{ width: 300, height: 400 }}>
            <h3>Sophie Brookes</h3>
            <p id="P-carousel">
                "Had a new boiler fitted today by Chris, after having problems with our old one that he kindly fixed prior to fitting the new one to ensure 
                we had heating whilst we waited. Very impressed with his service, 
                he’s extremely punctual, explains everything he’s doing and very reasonable in price. Would highly recommend."
            </p>
        </div>
        <div style={{ width: 300, height: 400 }}>
            <h3>Karen Brailsford</h3>
            <p id="P-carousel">
                "Very grateful to Chris for coming as soon as he could and sorting our boiler out.
                Excellent service and would recommend to anyone."
            </p>
        </div>
        <div style={{ width: 300, height: 400 }}>
            <h3>Craig Johnston</h3>
            <p id="P-carousel">
                "Chris has done a service for us and installed a hive on separate occasions. I have found him to be very reasonable 
                when it comes to cost and he is clearly very experienced, informative and punctual. 
                I would highly recommend Chris’ services to anyone."
            </p>
        </div>
        <div style={{ width: 300, height: 400 }}>
            <h3>Scott Allsop</h3>
            <p id="P-carousel">
                "Chris removed our old back boiler and fitted a new combi in a different location, which involved a fair bit of new piping. 
                He also installed a Hive thermostat which is particularly useful now the weather is getting colder. 
                Really clear and timely communication throughout (including at the P-carousel stage where he spoke through the various 
                pros & cons of different boiler options), and I wouldn't hesitate to recommend to him."
            </p>
        </div>
      </Carousel>
    );
  }
}

export default ClientCarousel;