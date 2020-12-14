import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../home/slider-animations.css";

class SliderScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            sliders: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:1337/sliders`).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((sliders) => {
            this.setState({ sliders: sliders });
        })
    }

    render() {
        return (
            <div>
                <Slider className="slider-wrapper" autoplay={1000}>
                    {
                        this.state.sliders.map(({ id, title, description, list, image }) => (
                            <div key={id}
                                className="slider-content"
                                style={{ background:  {image} }} >
                                {/* <img  src= {`http://localhost:1337${image.url}`} /> */}
                                <div className="inner">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <p>{list}</p>
                                </div>
                                <div className="slider-button">
                                    <section>
                                        <Button class="active" variant="danger" size="lg" href=''>View Details</Button>
                                    </section>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div >

        )

    }

}
export default SliderScreen;