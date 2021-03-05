import React, {useEffect, useState} from 'react'
import {Row, Card, Col} from "react-bootstrap"
import axios from "axios"

function ComicsLib({addToCart, cart, user}) {

    const [comicList, setComicList] = useState([])
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(0)

    const API_KEY = process.env.REACT_APP_DB_API_KEY

    function pointer(e) {
        e.target.style.cursor = "pointer"
    }

    function normal(e) {
        e.target.style.cursor = "cursor"
    }

    function comicSelected(value) {
        setIndex(value)
    }

    function updateCart(obj) {
        if (user == null) {
            alert("Please login to add item to cart")
        } else {
            if (cart.indexOf(obj) >= 0) {
                alert("You have already added this item to cart")
            } else {
                addToCart(prevState => [...prevState, obj])

            }
        }

    }

    useEffect(() => {

        getComics()

    },[index])

    async function getComics() {
        let temp = []
        const a = await axios.get(`http://gateway.marvel.com/v1/public/comics?${API_KEY}&limit=100`)
            .then(response =>
            response)
        for(let i = 0; i < 100; i++) {
            const b = await axios.get(`${a.data.data.results[i].resourceURI}?${API_KEY}`)
                .then(resp => {
                    temp.push(resp.data.data.results[0])
                })
        }
        setComicList(temp)
        setLoading(false)
    }

        return (
            <div className="d-flex" style={{width: "100VW", height: "100VH", backgroundColor:"black"}}>
                {(comicList.length > 0) ?
                    <div className="d-flex flex-column align-items-center justify-content-center flex-wrap" style={{width: "60VW",height: "auto", backgroundColor: "white", backgroundSize: "cover", backgroundImage: "url('https://i.stack.imgur.com/QgTND.jpg')"}}>
                        <Row>
                            <Col>
                                <Card className="pl-3 pr-3 pt-3 pb-3">
                                    <Card.Title style={{width: "450px"}}>{comicList[index].title}</Card.Title>
                                    <Card.Img className="mb-3" style={ {width: "450px", height: "600px"}} src = {`${comicList[index].thumbnail.path}/portrait_xlarge.${comicList[index].thumbnail.extension}`}/>
                                    <Card.Subtitle className="mb-3" style={{width: "450px", height: "100px", overflowY: "scroll"}}>
                                        {(comicList[index].description === null) ?
                                        "Unfortunately, the summary is unavailable at the moment, kindly use the link below for more information" :
                                            comicList[index].description}
                                    </Card.Subtitle>
                                    {/*<Card.Subtitle className="mb-3"> USD*/}
                                    {/*    {(comicList[index].prices[0].price) === undefined) ?*/}
                                    {/*        "This comic is no longer available" :*/}
                                    {/*        comicList[index].prices[0].price}*/}
                                    {/*</Card.Subtitle>*/}
                                    {(comicList[index].urls[0].url === undefined) ?
                                        "No Link available" :
                                        <a href={`${comicList[index].urls[0].url}`}>View Summary</a>
                                    }
                                    <button onClick={()=>updateCart(comicList[index])}>Buy Now</button>
                                </Card>
                            </Col>
                        </Row>
                    </div>:
                    <div style={{backgroundPosition: "center", position: "fixed", zIndex: "1",backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100VW", height: "100VH", color: "white", backgroundImage: "url(https://enginestories.com/wp-content/uploads/2020/04/marvel-gif.gif)"}}></div>
                }
                <div style={{width: "40VW", overflowY: "scroll"}} className="d-flex justify-content-center">
                    <Row style={{width: "90%"}} className="mt-5">

                        {comicList.map((ele, idx) =>
                            <Col key={idx} md={"5"}>
                                <Card onClick={(e)=>comicSelected(idx)} className="mt-3" onMouseEnter={pointer} onMouseLeave={normal}>
                                    <Card.Title>{ele.id}</Card.Title>
                                    <Card.Img src = {`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`} />
                                </Card>
                            </Col>

                        )}

                    </Row>
                </div>



            </div>
        );
}

export default ComicsLib


