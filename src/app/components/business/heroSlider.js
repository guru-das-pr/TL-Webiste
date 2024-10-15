'use client'
import React from 'react';
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSlider() {
    return (
        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showThumbs={false}>
                <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/bg/busi01.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                            <h1 className="fw-semibold display-3 text-white title-dark mb-4">Win the Global Market with
                                                Our IT Solutions</h1>
                                            <p className="para-desc mx-auto text-white-50">Providing our clients with personalized, affordable, and strategic IT consulting services.</p>

                                            <div className="mt-4 pt-2">
                                                <Link href="/page-services" className="btn btn-primary">See Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/bg/busi02.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">Excellence through Stunning Graphics</h1>
                                        <p className="para-desc mx-auto text-white-50">Take your business to the next level with TL Technologies' stunning graphic design services and grow without a hitch.</p>

                                        <div className="mt-4 pt-2">
                                            <Link href="/page-services" className="btn btn-primary">See Services</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active" data-bs-interval="2000">
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/bg/busi03.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">Digital Marketing Solutions:
                                            We’ll Get You Noticed!</h1>
                                        <p className="para-desc mx-auto text-white-50">Let us help you grow your business online and offline by providing online marketing services tailored to your needs.</p>

                                        <div className="mt-4 pt-2">
                                            <Link href="/page-aboutus" className="btn btn-primary">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}