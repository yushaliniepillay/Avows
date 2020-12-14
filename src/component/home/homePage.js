import React from 'react';
import fetch from 'isomorphic-fetch';
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
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="images not found" >
                            <div class="cover">
                                <div class="container">
                                    <div class="header-content">
                                        <div class="line"></div>
                                        <h2>Teimagine Digital Experience with</h2>
                                        <h1>Start-ups and solutions</h1>
                                        <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                                    </div>
                                </div>
                            </div>
                        </img>
                    </div>

                    <div class="item">
                        <img src="https://cdn.pixabay.com/photo/2019/11/18/02/41/autumn-leaves-4633854_960_720.jpg" alt="images not found">
                            <div class="cover">
                                <div class="container">
                                    <div class="header-content">
                                        <div class="line animated bounceInLeft"></div>
                                        <h2>Reimagine Digital Experience with</h2>
                                        <h1>Intelligent solutions</h1>
                                        <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                                    </div>
                                </div>
                            </div>
                        </img>
                    </div>

                    <div class="item">
                        <img src="https://cdn.pixabay.com/photo/2020/04/16/02/44/dandelion-5048825_960_720.jpg" alt="images not found">
                            <div class="cover">
                                <div class="container">
                                    <div class="header-content">
                                        <div class="line animated bounceInLeft"></div>
                                        <h2>Peimagine Digital Experience with</h2>
                                        <h1>Intelligent Solutions</h1>
                                        <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                                    </div>
                                </div>
                            </div>
                        </img>
                    </div>

                    <div className="button-mv">
                        <Button class="active" variant="danger" size="lg">Our Mission</Button>
                        <Button variant="light" size="lg">Our Vission</Button>
                    </div>
                    <h1 className="mt-5">React Testing Application Website</h1>

                </div >
            </div>

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