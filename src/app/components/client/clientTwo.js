'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false })
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientTwo() {
    let settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
    };
    let clientData = [
        {
            image: '/images/client/FF Logo.jpg',
            name: 'Frosty Foods',
            title: 'C.E.O',
            desc: '" TL Technologies transformed our business with their innovative solutions. Highly recommended. "'
        },
        {
            image: '/images/client/keralaDrives-logo.jpg',
            name: 'Kerala Drives',
            title: 'Manager',
            desc: '"Their team is knowledgeable, professional, and always delivers on time."'
        },
        {
            image: '/images/client/SCF Logo.png',
            name: 'Study Abroad Networks',
            title: 'Manager',
            desc: '" We highly recommend TL Technologies for their outstanding services. "'
        },
    ]
    return (
        <>
            <div className="conatainer">
                <div className="row justify-content-center">
                <div className="section-title text-center">
                                <h6 className="text-primary">Testimonials</h6>
                                <h4 className="title fw-semibold mt-2 mb-3">Hear what our clients have to say about us:</h4>
                                </div>
                    <div className="col-lg-6">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {clientData.map((item, index) => {
                                    return (
                                        <div className="tiny-slide px-md-5" key={index}>
                                            <div className="card client-testi text-center">
                                                <Image src={item.image} width={65} height={65} className="avatar  avatar-small rounded-pill mx-auto object-cover" alt="" />

                                                <div className="card-body pb-0 content">
                                                    <p className="h5 fw-normal text-muted fst-italic">{item.desc}</p>

                                                    <div className="name mt-4">
                                                        <small className="text-uppercase fw-semibold d-block">{item.name}</small>
                                                        {/* <small className="text-muted">{item.title}</small> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}