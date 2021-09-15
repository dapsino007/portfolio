import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";
import {
    list,
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(()=>{
        switch (selected) {
            case "featured":
              setData(featuredPortfolio);
              break;
            case "web":
              setData(webPortfolio);
              break;
            case "mobile":
              setData(mobilePortfolio);
              break;
            case "design":
              setData(designPortfolio);
              break;
            case "content":
              setData(contentPortfolio);
              break;
            default:
              setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item =>
                    <PortfolioList key={item.id} 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id}
                    />
                )}
               
            </ul>
            <div className="container">
                {data.map(item =>
                    <div key={item.id}  className="item">
                        <img src={item.img} alt=""/>
                        <h3>{item.title}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio
