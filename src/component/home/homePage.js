import React from 'react';
import fetch from 'isomorphic-fetch';
import Sliders from './SliderScreen';
import HomeListItem from './homelistitem';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            sections: []
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

    render() {
        return (

            <div>
               <Sliders />

                <div className="button-mv">
                    <Button class="active" variant="danger" size="lg">Our Mission</Button>
                    <Button variant="light" size="lg">Our Vission</Button>
                </div>
                <h1 className="mt-5">React Testing Application Website</h1>

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