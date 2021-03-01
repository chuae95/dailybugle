import React from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;
const height = 800

class DemoV4 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.state = {
            autoplay: true,
        };
    }
    _autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };

    render() {
        return (
            <div id="demo" className="container-fluid" style={{ paddingBottom: 20 }}>
                <Row>
                    <Col md={"12"}>
                        <RBCarousel
                            animation={true}
                            autoplay={this.state.autoplay}
                            slideshowSpeed={2000}
                            defaultActiveIndex={0}
                            onSelect={this._onSelect}
                            ref={this.slider}
                            version={4}
                            arrows={false}
                        >
                            <div style={{ height: `${height}` }}>
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://i.pinimg.com/originals/9e/14/48/9e1448fa620bb2fadd6822fcd9239fd5.jpg"
                                />
                                <div className="carousel-caption">Image</div>
                            </div>
                            <div style={{ height: `${height}` }}>
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://blog.zoombackground.io/media/posts/2/responsive/marvel-zoom-background-lg.jpg"
                                />
                                <div className="carousel-caption">Image</div>
                            </div>
                            <div style={{ height: `${height}` }}>
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://wallpapercave.com/wp/wp2887677.jpg"
                                />
                                <div className="carousel-caption">Image</div>
                            </div>

                        </RBCarousel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DemoV4


