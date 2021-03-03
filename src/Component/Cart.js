import React, {useEffect, useState} from 'react'
import {Row, Button, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

function Cart({cart, removeFromCart}) {

    const [total, setTotal] = useState(0)

    function updateCart(obj) {
        let index = cart.indexOf(obj)
        let temp = []
        cart.splice(index, 1)
        temp = [...temp, ...cart]
        removeFromCart(temp)
    }

    function updateBalance(arr) {
        let sum = 0
        arr.forEach(ele => (
            sum += ele.prices[0].price
        ))
        setTotal(sum)
    }

    function btnHoverTrue(e) {
        e.target.style.backgroundColor = "white";
        e.target.style.border = "1 px solid black";
        e.target.style.color = "black";
    }

    function btnHoverFalse(e) {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    }


    useEffect(() => {

        updateBalance(cart)

    }, [cart])

        return (
            <div>
                {(cart.length === 0) ?
                    <div className="d-flex flex-column align-items-center" style={{position: "fixed",width: "100VW", height: "100VH", backgroundImage: "url(https://i.pinimg.com/originals/4c/71/46/4c71462e185934ee10366e08fb4f8fa1.jpg)"}}>
                        <h2 style={{marginTop: "50px", textAlign: "center", fontFamily: "Shippori Mincho B1"}}>Your Cart is empty</h2>
                        <Link to="/comics">
                            <Button onMouseLeave={btnHoverFalse} onMouseEnter={btnHoverTrue} style={{backgroundColor: "black"}} className="comics mt-3">View Comics now
                            </Button>
                        </Link>

                    </div>
                    :
                    <div style={{fontFamily: "Shippori Mincho B1", height: "65VH", backgroundImage: "url(https://images8.alphacoders.com/817/817547.jpg)"}}>
                        <h2 className="ml-3">Update your shopping cart and check out!</h2>
                        <Row className="ml-3" style={{width: "70VW", backgroundColor: "white", color: "black"}}>
                            <Col md={"2"}>ID</Col>
                            <Col md={"4"}>Title</Col>
                            <Col md={"2"}>Price</Col>
                            <Col></Col>
                        </Row>
                        <div className="d-flex align-items-center flex-wrap justify-content-center ml-3" style={{overflowX: "hidden", width:"70VW", overflowY: "scroll", height: "50VH", border: "1px solid white", backgroundColor: "black"}}>

                            {cart.map(ele => (
                                <div style={{color: "white",width: "100%", backgroundColor: "rgba(0,0,0,1"}}>
                                    <Row>
                                        <Col className="d-flex align-items-center justify-content-center" md = {"2"}>
                                            <h4>{ele.id}</h4>
                                        </Col>
                                        <Col className="d-flex align-items-center" md = {"4"}>
                                            <h4>{ele.title}</h4>
                                        </Col>
                                        <Col className="d-flex align-items-center" md = {"2"}>
                                            <h4>US$ {ele.prices[0].price}</h4>
                                        </Col>
                                        <Col md = {"2"}>
                                            <img src = {`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`} />
                                        </Col>
                                        <Col md={"2"} className="d-flex justify-content-center align-items-center">
                                            <Button className="btn-danger" onClick={()=>updateCart(ele)}>Remove Item</Button>
                                        </Col>
                                    </Row>
                                </div>
                            ))}

                        </div>
                        <Row className="ml-3" style={{width: "70VW", backgroundColor: "white", color: "black"}}>
                            <Col md={"8"}></Col>
                            <Col>Cart Balance: US${total.toFixed(2)}</Col>
                        </Row>
                    </div>
                }
            </div>
        );
     }

export default Cart


