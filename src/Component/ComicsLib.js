import React, {useEffect, useState} from 'react'
import {Row, Card, Col} from "react-bootstrap"
import axios from "axios"

function ComicsLib({addToCart, cart, user}) {

    const [comicList, setComicList] = useState([])
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(0)

    let temp = [
    {
        "id": 23665,
        "title": "Marvel Previews (2017 - Present)",
        "description": null,
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
        "urls": [
        {
            "type": "detail",
            "url": "http://marvel.com/comics/series/23665/marvel_previews_2017_-_present?utm_campaign=apiRef&utm_source=3471aeb1ecc235abf317b810dfa2ed7f"
        }
    ],
        "startYear": 2017,
        "endYear": 2099,
        "rating": "",
        "type": "",
        "modified": "2020-02-07T09:35:58-0500",
        "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
    },
        "creators": {
        "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/23665/creators",
            "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021",
                "name": "Jim Nausedas",
                "role": "editor"
            }
        ],
            "returned": 1
    },
        "characters": {
        "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/23665/characters",
            "items": [

        ],
            "returned": 0
    },
        "stories": {
        "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/23665/stories",
            "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698",
                "name": "cover from Marvel Previews (2017)",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699",
                "name": "story from Marvel Previews (2017)",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/183704",
                "name": "cover from Marvel Previews (2017)",
                "type": "cover"
            }
        ],
            "returned": 3
    },
        "comics": {
        "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/23665/comics",
            "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82967",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65364",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82969",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/72736",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82970",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/73776",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74320",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74697",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75662",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75668",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65028",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82965",
                "name": "Marvel Previews (2017)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65158",
                "name": "Marvel Previews (2017)"
            }
        ],
            "returned": 13
    },
        "events": {
        "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/23665/events",
            "items": [

        ],
            "returned": 0
    },
        "next": null,
        "previous": null
    }
]

    function pointer(e) {
        e.target.style.cursor = "pointer"
        e.target.style.padding = "5px"
        e.target.style.border = "2px solid black"
    }

    function normal(e) {
        e.target.style.cursor = "cursor"
        e.target.style.padding = "none"
        e.target.style.border = "none"
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

        // setComicList(temp)
    },[index])

    async function getComics() {
        let temp = []
        const a = await axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=3471aeb1ecc235abf317b810dfa2ed7f&hash=16758f16bf31f97be2027a67da287bd4&limit=100")
            .then(response =>
            response)
        for(let i = 0; i < 5; i++) {
            const b = await axios.get(`${a.data.data.results[i].resourceURI}?ts=1&apikey=3471aeb1ecc235abf317b810dfa2ed7f&hash=16758f16bf31f97be2027a67da287bd4`)
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
                    <div style={{position: "fixed", zIndex: "1",backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100VW", height: "100VH", color: "white", backgroundImage: "url(https://enginestories.com/wp-content/uploads/2020/04/marvel-gif.gif)"}}></div>
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


