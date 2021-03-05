import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

import Comics from "./Comics";

function SingleHero({addToCart, cart, user}) {

    const {id} = useParams()
    const [singleHero, setSingleHero] = useState({})
    const [comicList, setComicList] = useState([])

    const API_KEY = process.env.REACT_APP_DB_API_KEY



    useEffect(() => {

        axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?${API_KEY}`)
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
                <div className="d-flex" style={{margin: "auto", width: "97.5VW", height: "300px"}}>
                    <div style={{width: "70%"}}>
                        <h3 style={{height: "50px"}}>{singleHero.name}</h3>
                        <h4 style={{height:"242px", overflowY:"scroll"}}>{singleHero.description}</h4>`
                    </div>
                    <div style={{backgroundPosition: "center", height: "300px", width: "30%",backgroundSize: "cover", backgroundImage: "url('https://static3.srcdn.com/wordpress/wp-content/uploads/2019/12/marvel-logo-header.jpg?q=50&fit=crop&w=960&h=500')"}}>
                    </div>
                </div>
                <div style={{margin: "auto", width: "97.5VW", color: "white", backgroundColor: "#233645"}}>
                    {comicList.map((ele, idx) => (
                        <div style={{border: "0.5px solid white"}} key = {idx}>
                            <h3 className="ml-3 mt-3">{ele.name}</h3>
                            <Comics comicList={comicList[idx]} singleHero={singleHero} id={id} name={ele.name} addToCart={addToCart} cart={cart} user={user}/>
                        </div>
                    ))}
                </div>
            </div>
        );
     }


export default SingleHero


