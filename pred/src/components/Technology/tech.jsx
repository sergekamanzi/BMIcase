import React from 'react'
import { FaCalculator } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { DiGithubAlt } from "react-icons/di";
import './tech.css'
const tech = () => {
  return (
    <div className='tech'>
       <h2>Technology</h2>
       <div className='tech-card'>
          <div className='card'>
            <FaCalculator />
            <h4>Precise Calculations</h4>
            <p>Advanced algorithms ensure accurate BMI 
                measurements based on international 
                health standards.
            </p>
          </div>

          <div className='card'>
          <FaHeartCircleCheck />
            <h4>Health Insights</h4>
            <p>Get detailed health recommendations and personalized insights based on your BMI.
            </p>
          </div>

          <div className='card'>
          <DiGithubAlt />
            <h4>Open Source</h4>
            <p>Transparent and community-driven development ensures reliability and trust.
            </p>
          </div>
       </div>
    </div>
  )
}

export default tech
