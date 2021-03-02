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

    useEffect(() => {

        updateBalance(cart)

    }, [cart])

        return (
            <div>
                <h1>Update your shopping cart and check out!</h1>
                <h1>Cart Balance: {total}</h1>
                {(cart.length === 0) ?
                    <div style={{width: "100VW", height: "100VH", marginTop: "50px"}}>
                        <h2 style={{textAlign: "center"}}>Your Cart is empty</h2>
                        <img src="https://i.pinimg.com/originals/4c/71/46/4c71462e185934ee10366e08fb4f8fa1.jpg"/>
                    </div>
                    :
                    <div>
                        {cart.map(ele => (
                            <Row>
                                <Col md={"1"}></Col>
                                <Col className="d-flex align-items-center border-right-0" md = {"2"} style={{border: "1px solid black"}}>
                                    <h4>{ele.id}</h4>
                                </Col>
                                <Col className="d-flex align-items-center border-right-0" md = {"2"} style={{border: "1px solid black"}}>
                                    <h4>{ele.title}</h4>
                                </Col>
                                <Col className="d-flex align-items-center" md = {"2"} style={{border: "1px solid black"}}>
                                    <h4>{ele.prices[0].price}</h4>
                                </Col>
                                <Col md = {"1"} style={{border: "1px solid black"}}>
                                    <img src = {`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`} />
                                </Col>
                                <Col md={"1"} className="d-flex align-items-center" style={{border: "1px solid black"}}>
                                    <Button className="btn-danger" onClick={()=>updateCart(ele)}>Remove Item</Button>
                                </Col>
                                <Col></Col>
                            </Row>

                        ))}
                    </div>
                }
            </div>
        );
     }

export default Cart


