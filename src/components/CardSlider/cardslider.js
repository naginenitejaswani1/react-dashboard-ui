import { useState } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './cardslider.css'

import Country from '../Country/country';


import bankImage from '../../assets/bank.webp';
import business from '../../assets/business.png';
import capex from '../../assets/capex.png';
import hotelsecurity from '../../assets/hotelsecurity.webp';
import onlinelearning from '../../assets/onlinelearning.avif';
import onlineserviceshumanizeai  from '../../assets/onlineserviceshumanizeai.png';
import retail from '../../assets/retail.png';
import stock from '../../assets/stock.avif';




const cardItems = [{
        
        image: bankImage,
        title: "Banking Industry",
        description: "Industry that deals with financial transactions, including deposits, loans, investments, and currency exchange.",
      },
    
      {
        
        image: business,
        title: "Essentials of Business",
        description: "Business involves the creation, distribution, and exchange of goods and services to meet the needs and wants of consumers.",
      },
    
      {
      
        image: capex,
        title: "The Central Capex Surge",
        description: "Central Capex Surge refers to a significant increase in capital expenditures by central governments or organizations.",
      },
      {
       
        image: hotelsecurity,
        title: "Hotel Security Measures",
        description: "Hotel security encompasses the protocols and measures put in place to ensure the safety and property within a hotel establishment.",
      },

      {
        
        image: retail,
        title:"Retail Landscape Evolution",
        description:"Retail refers to the sale of goods and services directly to consumers through various channels, and mobile apps",
      },
    
      {
        
        image: onlinelearning,
        title: "Online Learning Revolution",
        description: "Refers to the use of digital technology to deliver educational content and facilitate learning outside the traditional classroom setting.",
      },
    
      {
        
        image: onlineserviceshumanizeai,
        title: "Humanizing AI through Online Services",
        description: "Online services are increasingly incorporating AI technologies to enhance user experience and personalize interactions.",
      },
    
      {
        
        image: stock,
        title: "Stock Market Dynamics",
        description: "Stock market, also known as equity market, is where shares of publicly traded companies are bought and sold.",
      },
    ]

const CardSlider = () => {

  const [isbuttonclicked, onClickView] = useState(true)
  const toggle = () => onClickView (!isbuttonclicked);


    const settings = {
      dots: true,
      Infinite:true,
      speed:500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }

    
    
  return (
    <div className="body-container">
      <div className="carousel-container"  style={{overflow : isbuttonclicked ? "hidden" : "scroll"}} >
        {isbuttonclicked ? 
        <div className='mt-20'>
          <Slider {...settings}>
            {cardItems.map(eachItem => (
              <div className='cards-container cards-container-mar'>
                <div>
                  <img src={eachItem.image} alt="" className='image' />
                </div>
                <div>
                  <h1 className='title'>{eachItem.title}</h1>
                  <p className='description'>{eachItem.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>: 
        <div className="view-container">
          {cardItems.map(eachItem => (
                <div className='cards-container mar'>
                  <div>
                    <img src={eachItem.image} alt="" className='image' />
                  </div>
                  <div>
                    <h1 className='title'>{eachItem.title}</h1>
                    <p className='description'>{eachItem.description}</p>
                  </div>
                </div>
              ))}
          </div> 
          }
        
          <button onClick={toggle} className='view-button'>{isbuttonclicked ? "view more" : "view less"}</button>
        </div>
      <Country />
    
  </div>
  )
}

export default CardSlider




