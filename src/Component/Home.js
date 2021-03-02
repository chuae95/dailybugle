import React, {useEffect, useState} from "react"
import ReactPlayer from "react-player"
import {Link} from "react-router-dom"
import {Row, Col, Card} from "react-bootstrap"
import axios from "axios"
import "../CSS/Home.css"

function Home() {

    const [news, setNews] = useState([])

    let temp = [
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Sam Haysom",
            "title": "That historic Thanos-inspired Reddit ban has finally been reversed",
            "description": "Remember a couple of years back, when a small corner of Reddit decided to ban half its user base in homage to Thanos?\nWell, those users have finally been let out of their digital purgatory.\nIt all started in summer 2018 on the r/thanosdidnothingwrong sub (a s…",
            "url": "https://mashable.com/article/reddit-thanos-ban-reversed/",
            "urlToImage": "https://mondrian.mashable.com/2021%252F02%252F11%252F52%252F18e463fba27a4279979f948c3484d15f.9501c.jpg%252F1200x630.jpg?signature=zRUUFzJHCYHBrGuoppwaEW5hEA8=",
            "publishedAt": "2021-02-11T14:48:42Z",
            "content": "Remember a couple of years back, when a small corner of Reddit decided to ban half its user base in homage to Thanos?\r\nWell, those users have finally been let out of their digital purgatory.\r\nIt all … [+1351 chars]"
        },
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Alexis Nedd",
            "title": "'WandaVision' cracked the MCU open with a 71.3 billion dollar cameo",
            "description": "WandaVision star Elisabeth Olsen set fans' minds racing when she teased one of the show's upcoming surprises and compared it to The Mandalorian's jaw-dropping Luke Skywalker cameo in Season 2. If the surprise she alluded to was the phenomenal ending of WandaV…",
            "url": "https://mashable.com/article/wandavision-x-men-quicksilver/",
            "urlToImage": "https://mondrian.mashable.com/2021%252F02%252F05%252F75%252F65574aef5230433db6c5e599867d7a07.3a360.jpg%252F1200x630.jpg?signature=DCxqSTN5F7_JzPok5LCVMyeGbQA=",
            "publishedAt": "2021-02-05T16:49:48Z",
            "content": "WandaVision star Elisabeth Olsen set fans' minds racing when she teased one of the show's upcoming surprises and compared it to The Mandalorian's jaw-dropping Luke Skywalker cameo in Season 2. If the… [+5163 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Ari Notis",
            "title": "Marvel’s Avengers Receives Hawkeye, Next-Gen Versions On March 18",
            "description": "The Avengers can’t stop assembling. Clint Barton—also known as Hawkeye, or the “Really? Him?” Avenger—is coming to Marvel’s Avengers on March 18, alongside dedicated next-gen versions of the game.Read more...",
            "url": "https://kotaku.com/marvel-s-avengers-receives-hawkeye-next-gen-versions-o-1846280462",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/smymqw8s12osnf57s1hv.jpg",
            "publishedAt": "2021-02-16T18:58:00Z",
            "content": "The Avengers cant stop assembling. Clint Bartonalso known as Hawkeye, or the Really? Him? Avengeris coming to Marvels Avengers on March 18, alongside dedicated next-gen versions of the game.\r\nMarvels… [+1714 chars]"
        }
        ]

    function selectNews(e) {
        e.target.style.cursor = "pointer"
    }



    useEffect(() => {

        setNews(temp)

        // const a = getNews()



    }, [])

    async function getNews() {
        await axios.get("https://newsapi.org/v2/everything?q=avengers&apiKey=c7b7b6777f3241b2a3ebe792b13f3aac")
            .then(response => {
                let temp = []
                for (let i=0; i<3; i++) {
                    temp.push(response.data.articles[i])
                }

                setNews(temp)
            })
    }


    return (
        <div className="player-wrapper">
            <div id="priorityOne">
                <div id="poster" style={{backgroundImage: "url(https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/33286_black_widow_mb?$mb$)"}}>
                    <div id="poster-desc" style={{fontFamily: "Russo One"}}>
                        <ReactPlayer
                            className="react-player"
                            url="https://www.youtube.com/watch?v=ybji16u608U"
                        />
                        <div className="pl-5 pr-5">
                            In Marvel Studios' action-packed spy thriller "Black Widow," Natasha Romanoff aka Black Widow
                            confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.
                            <br/>
                            <br/>
                            Pursued by a force that will stop at nothing to bring her down,
                            Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.
                            <br/>
                            <br/>
                            Join Agent Romanoff as she confronts familiar enemies and reunites with old friends.
                        </div>
                        <button style={{backgroundColor: "black",color: "red", border: "1px solid red"}}>Click here to view Trailer</button>
                    </div>
                </div>

            </div>
            <h1 style={{textAlign: "center", fontWeight: "bolder", fontSize: "50px"}}>News</h1>
            <div style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url(https://blog.playstation.com/tachyon/2019/08/Aug-29-Spider-Man-Photo-Mode-Guide-featured-image.jpg?resize=1088,612&crop_strategy=smart&zoom=1)"}}>
            <Row id="news" className="d-flex align-items-center">
                {news.map(ele => (
                    <Col>
                        <div>
                            <Card className="default mr-3 ml-3" style={{height: "80VH", backgroundColor: "rgba(255,255,255,1)"}} onMouseOver={selectNews}>
                                <Card.Title className="pl-3 pb-3 pt-2" style={{fontSize: "30px"}}>{ele.source.name}</Card.Title>
                                <Card.Img className="pl-3 pr-3 pb-3" style={{width: "100%", height: "50%"}} src={ele.urlToImage} />
                                <Card.Subtitle style={{fontSize: "30px", textDecoration: "underline"}} className="pb-4 pl-3 pr-3">{ele.title}</Card.Subtitle>
                                <Card.Text className="pl-3 pr-3">{ele.description}</Card.Text>
                                <a className="pl-3 pr-3" href={`${ele.url}`}>Read the full article here!</a>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
            </div>
            <div id="characters">
                <div id="characters-desc">
                    <div>
                        <div>What are you waiting for? <br/> Join Your Favourite Heroes in their adventures now!</div>
                        <button>Click here to find out more!</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home