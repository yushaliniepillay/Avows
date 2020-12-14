import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Sliders from './SliderScreen';
import HomeListItem from './homelistitem';
import { Button } from 'react-bootstrap';

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            sections: [],
            content: true
        }

    }

    componentWillMount() {
        fetch(`http://localhost:1337/sections`).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((sections) => {
            this.setState({ sections: sections });
        })
    }

    componentHideAndShow = () => {
        const { content } = this.state;

        this.setState(previousState => ({ content: !previousState.content }))
    }



    render() {
        const { content } = this.state;
        return (

            <div>
                <Sliders />
                <div className="our-mv">

                    <div className="button-mv">
                        <Button variant="light" size="lg" type="submit" onclick={this.componentHideAndShow} >Our Mission</Button>
                        <Button variant="light" size="lg" type="submit" onClick={this.componentHideAndShow} >Our Vission</Button>
                        <br></br>
                    </div>
                    {
                        this.state.content ? (
                            <article >
                                <p> </p>
                                <h3>We have a great Mission</h3>
                                <p>"To be Recognized as <br />the “Preferred Technology Partner of Choice” by all Customers”</p>
                            </article>
                        ) :
                            (
                                <article >
                                    <p> </p>
                                    <h3>We have a one focused Vision</h3>
                                    <p>“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of <br />
                                        Services & Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to <br />
                                        position themselves best price-performers of choice in their industries” </p>
                                </article>
                            )
                    }
                </div>
                <div>
                    {
                        this.state.sections.map(({ id, title, featureimage }) => (
                            <div className="container">
                                <div className="row">
                                    <HomeListItem key={id} title={title} featureimage={featureimage} />
                                    {/* <h1>{title}</h1> */}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div >

            // <div>
            //     {
            //         this.state.sections.map(({id, title, featureimage}) => (
            //             <div className="container">
            //                 <div className="row">
            //                 <HomeListItem key={id} title={title} featureimage={featureimage} />
            //                 {/* <h1>{title}</h1> */}
            //                 </div>
            //             </div>
            //         ))
            //     }
            // </div>


        )

    }
}

export default HomePage;