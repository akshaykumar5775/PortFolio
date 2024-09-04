import React from 'react'
import {arrow} from '../assets/icons'
import { Link } from 'react-router-dom'

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center '>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn h-50 w-100">
        <span style={{ whiteSpace: 'nowrap' }}>{btnText}</span>
        <img src={arrow} className='w-50 h-50 object-contain'/>
        </Link>
    </div>
)

const renderContent={
    1:(
        <h1 className='="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <br/><span className='font-semibold'>Akshay Kumar Arora.</span>
            <br/>
             <span style={{ fontSize: 14}}>( A Student , Developer and Learner )</span>
        </h1>
    ),
    2:(
        <InfoBox text="Native Graduate Developer and An Enthusiastic Learner"
        link="/about"
        btnText="Learn More"
        />
    ),
    3:(
        <InfoBox text="Work Experiences and Projects"
        link="/projects"
        btnText="Check out"
        />
    ),
    4:(
        <InfoBox text="Need a project done ??"
        link="/contact"
        btnText="Contact us"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage]|| null;
}

export default HomeInfo