import { Carousel } from '../../components/carousel/carousel'
import { Navbar } from '../../components/nav/nav'
import './home.css'
import React, { Component } from 'react'

const Home = () => {
    return(
        <div id="st-container" class="st-container">
            <div class="st-pusher">
                <div class="st-content">
                    <div class="st-content-inner">
                        <header>
                            <Navbar />
                        </header>
                        <Carousel />
                        <div class="container">
                            <div className="content-wrapper">
                                <Services/>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;