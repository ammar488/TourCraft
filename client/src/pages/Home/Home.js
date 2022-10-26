import React from 'react'
import { Feature } from '../../Components/Feature/Feature'
import FeaturedProperties from '../../Components/FeaturedProperties/featuredProperties'
import Header from '../../Components/Header/Header'
import {PropertyList} from '../../Components/PropertyList/propertyList'
import './Home.css'

let url = 'http://localhost:8800/api/hotels'

export const Home = () => {
  return (
    <div>
      <Header/>
      <div className="homecontainer">
      <Feature/>
      </div>
      <div className="homecontainer">
      <PropertyList/>
      </div>
      <div className="homecontainer">
      <FeaturedProperties/>
      </div>
    </div>
  )
}
