import React, {useState, useEffect} from 'react'
import {Card, Row, Col, Form} from "react-bootstrap"
import axios from "axios";
import {Link} from "react-router-dom"

import DemoV4 from "./Banner";

function Characters() {

    const [charArr, setCharArr] = useState([])
    const [singleHero, setSingleHero] = useState("")
    const [singleChar, setSingleChar] = useState("")
    const [singleCharArr, setSingleCharArr] = useState([])
    const [offset, setOffset] = useState(0)

    function pointer(e) {
        e.target.style.cursor = "pointer"
        e.target.style.padding = "5px"
        e.target.style.border = "2px solid black"
    }

    function normal(e) {
        e.target.style.cursor = "normal"
        e.target.style.border = "none"
        e.target.style.padding = "0px"
    }

    function addOffset() {
        setOffset(prevState => prevState + 30)
    }

    function updateHeroList(str) {
        let temp = []
        temp = charArr.filter(value =>
            value.name.toUpperCase().includes(str.toUpperCase())
        )
        setSingleCharArr(temp)
        setSingleChar("")
    }

    useEffect(() => {

        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3471aeb1ecc235abf317b810dfa2ed7f&hash=16758f16bf31f97be2027a67da287bd4&limit=100&offset=${offset}`)
            .then(response => {
                let temp = []
                response.data.data.results.forEach(ele => {
                    temp.push(ele)
                })
                setCharArr(temp)
            })

    }, [singleCharArr, offset])

        return (
            <div>
                <Row>
                    <DemoV4 />
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex">
                            <Form.Control value={singleChar} onChange={(e)=>{setSingleChar(e.target.value)}} placeholder="Search for your character" />
                            <button onClick={()=>{updateHeroList(singleChar)}}>Enter</button>
                        </div>
                    </Col>
                    <Col>
                        <div onClick={addOffset}>Next</div>
                    </Col>
                </Row>
                <Row>
                    {(singleCharArr.length === 0) ?
                        charArr.map(ele => (
                                <Col key={ele.id} md={"3"}>
                                    <Card className="m-5" onMouseEnter={pointer} onMouseLeave={normal}>
                                        <Card.Img
                                            src={`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`}/>
                                        <Card.Title>{ele.name}</Card.Title>
                                        <Link to={`/characters/${ele.id}`}>View Character</Link>
                                        <a href={`${ele.urls[0].url}`}>View Bio</a>
                                    </Card>
                                </Col>
                            ))
                        :
                        singleCharArr.map(ele => (
                            <Col key={ele.id} md={"3"}>
                                <Card className="m-5" onMouseEnter={pointer} onMouseLeave={normal}>
                                    <Card.Img
                                        src={`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`}/>
                                    <Card.Title>{ele.name}</Card.Title>
                                    <Link to={`/characters/${ele.id}`}>View Character</Link>
                                    <a href={`${ele.urls[0].url}`}>View Bio</a>
                                </Card>
                            </Col>
                        ))


                    }

                </Row>
            </div>
        );
     }

export default Characters


