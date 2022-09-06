import React from 'react'
import { Feature } from '../../Components/Feature/Feature'
import Header from '../../Components/Header/Header'
import './Home.css'

export const Home = () => {
  return (
    <div>
      <Header/>
      <div className="homecontainer">
      <Feature/>
      </div>
    </div>
  )
}
