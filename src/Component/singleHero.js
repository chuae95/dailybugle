import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

import Comics from "./Comics";



function SingleHero({addToCart}) {

    const {id} = useParams()
    const [singleHero, setSingleHero] = useState({})
    const [comicList, setComicList] = useState([])

    let temp = [
        {
            "id": 40776,
            "digitalId": 27172,
            "title": "Dark Avengers (2012) #177",
            "issueNumber": 177,
            "variantDescription": "",
            "description": "<ul><li> The TimeStream-TravelingThunderbolts battle Dr. Doom in the past for the fate of the future!\n</li><li> Skaar discovers the secret agenda of the Dark Avengers! </li></ul>",
            "modified": "2014-07-31T15:58:22-0400",
            "isbn": "",
            "upc": "5960605602-17711",
            "diamondCode": "MAY120659",
            "ean": "",
            "issn": "1094-1258",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "<ul><li> The TimeStream-TravelingThunderbolts battle Dr. Doom in the past for the fate of the future!\n</li><li> Skaar discovers the secret agenda of the Dark Avengers! </li></ul>"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40776",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/40776/dark_avengers_2012_177?utm_campaign=apiRef&utm_source=3471aeb1ecc235abf317b810dfa2ed7f"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/Dark-Avengers-177/digital-comic/27172?utm_campaign=apiRef&utm_source=3471aeb1ecc235abf317b810dfa2ed7f"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=27172&utm_campaign=apiRef&utm_source=3471aeb1ecc235abf317b810dfa2ed7f"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/27172?utm_campaign=apiRef&utm_source=3471aeb1ecc235abf317b810dfa2ed7f"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/789",
                "name": "Dark Avengers (2012 - 2013)"
            },
            "variants": [

            ],
            "collections": [

            ],
            "collectedIssues": [

            ],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2012-07-11T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2012-06-26T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2013-04-08T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2012-07-11T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 2.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/519678bcecbaf",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/519678bcecbaf",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/40776/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                        "name": "Tom Brennan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                        "name": "John Tyler Christopher",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/824",
                        "name": "Jeff Parker",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11354",
                        "name": "Declan Shalvey",
                        "role": "artist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                        "name": "Kev Walker",
                        "role": "artist"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 12,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/40776/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
                        "name": "Aaron Stack"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010371",
                        "name": "Boomerang"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011367",
                        "name": "Dark Avengers"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009215",
                        "name": "Luke Cage"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009420",
                        "name": "Man-Thing"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010347",
                        "name": "Mr. Hyde"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011360",
                        "name": "Red Hulk"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011035",
                        "name": "Satana"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011223",
                        "name": "Skaar"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016452",
                        "name": "Spider-Man (Ai Apaec)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010360",
                        "name": "Thunderbolts"
                    }
                ],
                "returned": 12
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/40776/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92376",
                        "name": "Dark Avengers (2012) #177",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92377",
                        "name": "Interior #92377",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/40776/events",
                "items": [

                ],
                "returned": 0
            }
        }
    ]


    useEffect(() => {

        axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=3471aeb1ecc235abf317b810dfa2ed7f&hash=16758f16bf31f97be2027a67da287bd4`)
            .then(response => {
                setSingleHero(response.data.data.results[0])
                let temp = []
                response.data.data.results[0].comics.items.forEach(ele => {
                    temp.push(ele)
                })
                setComicList(temp)
            })
    }, [id])


        return (
            <div>
                <div className="d-flex">
                <div style={{width: "60%"}}>
                    <h3>{singleHero.name}</h3>
                    {/*<img src = {`${singleHero.thumbnail.path}/portrait_xlarge.${singleHero.thumbnail.extension}`} />*/}
                    <h4>{singleHero.description}</h4>`
                </div>
                <div style={{width: "40%",backgroundSize: "cover", backgroundImage: "url('https://static3.srcdn.com/wordpress/wp-content/uploads/2019/12/marvel-logo-header.jpg?q=50&fit=crop&w=960&h=500')"}}>
                </div>
                </div>
                {comicList.map((ele, idx) => (
                    <div style={{border: "1px solid black"}}key = {idx}>
                        <h4>{ele.name}</h4>
                        <Comics comicList={comicList[idx]} singleHero={singleHero} id={id} name={ele.name} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        );
     }


export default SingleHero


