import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Sliderapp extends React.Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div
          style={{
            // backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "30px",
            color: "blue",
            // border: "1px blue solid",
          }}
        >
          {i + 1}
        </div>
      ),
    };
    return (
      <div style={{ width: 500, margin: "0 auto" }}>
        <h2> Single Item</h2>
        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        >
          <div>
            <h3 style={{ backgroundColor: "lightblue" }}>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Sliderapp;
