import React from 'react'
import {Form, Button} from "react-bootstrap"

function Footer() {

        return (
            <div className="d-flex align-items-center" style={{fontFamily: "Francois One", color: "white", width: "100%", height: "30VH", backgroundColor: "black"}}>
                <div className="p-3" style={{marginLeft: "20px", width: "50%", border: "1px solid white"}}>
                    <h3 className="m-1 mb-3">Sign up for our weekly updates!</h3>
                    <Form.Control className="m-1" placeholder="Enter Email here!"/>
                    <Button className="m-1 btn-danger" style={{float: "right"}}>Submit</Button>
                </div>
            </div>
        );
     }

export default Footer


