import React from 'react'
import Banner from '../components/Banner'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Offers from '../components/Offers'
import PopularFoods from '../components/PopularFoods'

function Home() {
  return (
    <>
        <Banner/>
        <Offers/>
        <PopularFoods/>
        <Comments/>
        <Footer/>
    </>
  )
}

export default Home