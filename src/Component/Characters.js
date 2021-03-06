import React, {useState, useEffect} from 'react'
import {Card, Row, Col, Form} from "react-bootstrap"
import axios from "axios";
import {Link} from "react-router-dom"
import "../CSS/Characters.css"

import DemoV4 from "./Banner";

function Characters() {

    const [charArr, setCharArr] = useState([])
    const [singleHero, setSingleHero] = useState("")
    const [singleChar, setSingleChar] = useState("")
    const [singleCharArr, setSingleCharArr] = useState([])
    const [offset, setOffset] = useState(0)

    const API_KEY = process.env.REACT_APP_DB_API_KEY

    function addOffset() {
        if (offset < 1200) {
            setOffset(prevState => prevState + 100)
        }
    }

    function minusOffset() {
        if (offset > 0) {
            setOffset(prevState => prevState - 100)
        }
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

        axios.get(`https://gateway.marvel.com/v1/public/characters?${API_KEY}&limit=100&offset=${offset}`)
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
                    <Col md={"4"}></Col>
                    <Col md={"3"}>
                        <div className="d-flex pl-5">
                            <Form.Control style={{width: "300px"}} value={singleChar} onChange={(e)=>{setSingleChar(e.target.value)}} placeholder="Search for your character" />
                            <button onClick={()=>{updateHeroList(singleChar)}}>Enter</button>
                        </div>
                    </Col>
                    <Col>
                        <button onClick={minusOffset}>Previous</button>
                        <button onClick={addOffset}>Next</button>
                    </Col>
                </Row>
                <Row style={{width: "80VW", margin: " 30px auto"}}>
                    {(singleCharArr.length === 0) ?
                        charArr.map(ele => (
                                <Col className="mt-3 char" key={ele.id} md={"2"}>
                                    <div style={{width: "100%"}}>
                                        <a href={`${ele.urls[0].url}`}>
                                            <img style={{width: "100%"}} src = {`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`} />
                                        </a>
                                        <a className ="links" href={`${ele.urls[0].url}`}>
                                            <h5 style={{height: "50px", marginTop: "30px"}}>{ele.name}</h5>
                                        </a>

                                        <h6>
                                            <Link to={`/characters/${ele.id}`}>Browse Stories</Link>
                                        </h6>
                                    </div>
                                    {/*<Card onMouseOver={pointer} onMouseOut={normal}>*/}
                                    {/*    <Card.Img src={`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`}/>*/}
                                        {/*<Card.Title>{ele.name}</Card.Title>*/}
                                        {/*<Link to={`/characters/${ele.id}`}>View Comics</Link>*/}
                                        {/*<a href={`${ele.urls[0].url}`}>View Bio</a>*/}
                                    {/*</Card>*/}
                                </Col>
                            ))
                        :
                        singleCharArr.map(ele => (
                            <Col className="mt-3 char" key={ele.id} md={"2"}>
                                <div style={{width: "100%"}}>
                                    <a href={`${ele.urls[0].url}`}>
                                        <img style={{width: "100%"}} src = {`${ele.thumbnail.path}/portrait_xlarge.${ele.thumbnail.extension}`} />
                                    </a>
                                    <a className ="links" href={`${ele.urls[0].url}`}>
                                        <h5 style={{height: "50px", marginTop: "30px"}}>{ele.name}</h5>
                                    </a>
                                    <h6>
                                        <Link to={`/characters/${ele.id}`}>Browse Stories</Link>
                                    </h6>
                                </div>

                            </Col>
                        ))


                    }

                </Row>
            </div>
        );
     }

export default Characters


