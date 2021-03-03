import React, {useEffect, useState} from 'react'
import {Row, Button, Col} from "react-bootstrap"

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
                        <h2 style={{textAlign: "center", fontFamily: "Shippori Mincho B1"}}>Your Cart is empty</h2>
                        <Button onMouseLeave={btnHoverFalse} onMouseEnter={btnHoverTrue} style={{backgroundColor: "black"}} className="comics mt-3">View Comics now</Button>
                    </div>
                    :
                    <div style={{fontFamily: "Shippori Mincho B1", height: "100VH", backgroundImage: "url(https://images8.alphacoders.com/817/817547.jpg)"}}>
                        <div style={{width: "66%", height: "100VH"}}>
                            <h2 className="mt-4" style={{marginLeft: "115px"}}>Update your shopping cart and check out!</h2>

                            {cart.map(ele => (
                                <div style={{overflowY: "Scroll",color: "white",width: "80%", margin: "0 auto", border: "1px solid black", backgroundColor: "rgba(0,0,0,1"}}>
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

                            <h3 style={{marginLeft: "900px"}}>Cart Balance: {total}</h3>
                        </div>
                    </div>
                }
            </div>
        );
     }

export default Cart


