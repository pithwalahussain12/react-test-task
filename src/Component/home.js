import React, { Component } from 'react'
import Sliders from './subcomponent/Carousel'
import Blog from './subcomponent/blog'

export default class home extends Component {
    render() {
        return (
            <div>
                <Sliders />
                <div>
                    <div className="container-fluid style1 p-4 ">
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-white text-center m-auto ">
                                    <div className="card-overlay bg-dark">
                                        <p className="card-text ">This is a wider card with supporting text below as a natural <span className="display-4 font-weight-bold"> 20</span> lead-in to additional</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-white text-center m-auto">
                                    <div className="card-overlay bg-dark">
                                        <p className="card-text ">This is a wider card with supporting text below as a natural <span className="display-4 font-weight-bold"> 20</span> lead-in to additional</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-white text-center m-auto">
                                    <div className="card-overlay bg-dark">
                                        <p className="card-text ">This is a wider card with supporting text below as a natural <span className="display-4 font-weight-bold"> 20</span> lead-in to additional</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-white text-center m-auto">
                                    <div className="card-overlay bg-dark">
                                        <p className="card-text ">This is a wider card with supporting text below as a natural <span className="display-4 font-weight-bold"> 20</span> lead-in to additional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Blog/>
                </div>
            </div>
        )
    }
}
