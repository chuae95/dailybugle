import React, {useEffect, useState} from 'react'
import {Card, Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import axios from "axios";

function Comics({comicList, singleHero, id, addToCart, name, cart, user}) {

    const [individualComic, setIndividualComic] = useState([])

    const [loading, setLoading] = useState(true)

    function updateCart(obj) {
        if (user == null) {
            alert("Please login to add item to cart")
        } else {
            if (cart.indexOf(obj) >= 0) {
                alert("You have already added this item to cart")
            } else {
                addToCart(prevState => ([...prevState, obj]))
            }
        }

    }

    useEffect(() => {

        const a = getInfo(`${comicList.resourceURI}?ts=1&apikey=3471aeb1ecc235abf317b810dfa2ed7f&hash=16758f16bf31f97be2027a67da287bd4`)

    }, [id, loading, name])

    async function getInfo(url) {
        await axios.get(url)
            .then(response => {
                setIndividualComic(response.data.data.results[0])
                setLoading(false)
            })
    }

    return (
         <div style={{width: "95VW", margin: "auto"}}>
             {(loading) ? <div>Loading</div> :
             <Row className="p-0" style={{width: "100%", height: "45VH", backgroundSize: "cover", backgroundImage: "url(https://wallpapercave.com/wp/wp5265940.jpg)"}}>
                 <Col className="d-flex justify-content-center align-items-center" md={"2"}>
                     <Card.Img style={{height: "40VH"}} src = {`${individualComic.thumbnail.path}/portrait_xlarge.${individualComic.thumbnail.extension}`} />
                 </Col>
                 <Col style={{color: "white"}} className="d-flex flex-column justify-content-center" md={"3"}>
                     <Card.Title>#{individualComic.issueNumber}</Card.Title>
                     <Card.Subtitle>{individualComic.description}</Card.Subtitle>
                 </Col>
                 <Col style={{color: "white"}} className="d-flex justify-content-center align-items-center" md={"1"}>
                     <Card.Subtitle>US$ {individualComic.prices[0].price}</Card.Subtitle>
                 </Col>
                 <Col className="d-flex justify-content-center align-items-center" md={"1"}>
                     <Button onClick={() => updateCart(individualComic)}>Buy Now</Button>
                 </Col>
                 <Col style={{color: "white"}} className = "d-flex flex-column justify-content-start">
                     <Card.Subtitle className="mt-3">Characters Involved</Card.Subtitle>
                     <div className="d-flex flex-column" style={{height: "40VH"}}>
                         {individualComic.characters.items.map((ele, idx) => (
                             <Link style={{color: "white"}} key={idx} onClick={()=>setLoading(true)} to={`/characters/${ele.resourceURI.slice(47)}`}>{ele.name}</Link>
                         ))}
                     </div>
                 </Col>
             </Row>
             }
         </div>
        // <div>
        //     <Row style={{height: "45VH", backgroundSize: "cover", backgroundImage: "url(https://wallpapercave.com/wp/wp5265940.jpg)"}}>
        //         <Col className="d-flex justify-content-center align-items-center" md={"2"}>
        //             <Card.Img style={{height: "40VH"}} src = {`${temp.thumbnail.path}/portrait_xlarge.${temp.thumbnail.extension}`} />
        //         </Col>
        //         <Col style={{color: "white"}} className="d-flex flex-column justify-content-center" md={"3"}>
        //             <Card.Title>{temp.issueNumber}</Card.Title>
        //             <Card.Subtitle>{temp.description}</Card.Subtitle>
        //         </Col>
        //         <Col style={{color: "white"}} className="d-flex justify-content-center align-items-center" md={"1"}>
        //             <Card.Subtitle>US$ {temp.prices[0].price}</Card.Subtitle>
        //         </Col>
        //         <Col className="d-flex justify-content-center align-items-center" md={"1"}>
        //             <Button onClick={()=>updateCart(individualComic[0])}>Buy Now</Button>
        //         </Col>
        //         <Col style={{color: "white"}} className = "d-flex flex-column justify-content-start">
        //             <Card.Subtitle className="mt-3">Characters Involved</Card.Subtitle>
        //             <div style={{height: "40VH", overflowY: "scroll"}} className="d-flex flex-column">
        //             {temp.characters.items.map(ele => (
        //                 <Link style={{color: "white"}}>{ele.name}</Link>
        //             ))}
        //             </div>
        //         </Col>
        //
        //     </Row>
        // </div>


        );
     }

export default Comics




