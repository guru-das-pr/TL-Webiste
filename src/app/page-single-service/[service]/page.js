'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarTwo from "../../components/navbar/navbarTwo";

import { progressData } from "../../data/services";
import { AiOutlineCheckCircle } from "../../assets/icons/vander"
import VideoModal from "../../components/services/videoModal";
import FooterSeven from "../../components/footer/footerSeven";
import ScrollTop from "../../components/scrollTop";
import { servicesData } from "@/app/data/business";
import { useParams } from "next/navigation";

export default function SingleService() {
    const { service } = useParams(); // Get the dynamic 'service' param
    const currentService = servicesData.find(item => item.slug === service);

    if (!currentService) {
        return <div>Service not found</div>; // Handle the case where the service is not found
    }

    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="bg-half-80 d-table bg-primary bg-gradient w-100" style={{ backgroundImage: "url('/images/bg/services.jpg')", backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row g-0 align-items-center mt-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="title-heading text-md-start text-center">
                                <h5 className="heading fw-semibold page-heading text-white title-dark">{currentService.title}</h5>
                                <p className="text-white-50 mb-0">{currentService.subtitle}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                            <div className="text-md-end text-center">
                                <nav aria-label="breadcrumb" className="d-inline-block">
                                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                        <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                        <li className="breadcrumb-item"><Link href="#">Services</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{currentService.title}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="section-title">
                                {currentService.imageUrl && (
                                    <Image src={currentService.imageUrl} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded" alt={currentService.title} />
                                )}

                                <h4 className="mt-4">Preparing for your success with {currentService.title}</h4>

                                <p className="text-muted mt-4">{currentService.description || currentService.desc}</p>

                                {currentService.quote && (
                                    <blockquote className="text-center mx-auto blockquote">
                                        <i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i>
                                        {currentService.quote}
                                        <small className="d-block text-muted mt-2">- {currentService.author}</small>
                                    </blockquote>
                                )}

                                {currentService.features && currentService.features.length > 0 && (
                                    <>
                                        <h5 className="mt-4">Features: </h5>
                                        <ul className="list-unstyled text-muted mb-0">
                                            {currentService.features.map((feature, index) => (
                                                <li key={index} className="mb-0">
                                                    <span className="text-primary h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <h5 className="mt-4">Ability: </h5>

                                {progressData.map((item, index) => (
                                    <div className="progress-box mt-4" key={index}>
                                        <h6 className="text-muted fw-normal">{item.title}</h6>
                                        <div className="progress position-relative">
                                            <div className="progress-bar position-relative bg-primary" style={{ width: item.progress }}></div>
                                            <div className="progress-value d-block text-muted h6 fw-normal">{item.progress}</div>
                                        </div>
                                    </div>
                                ))}

                                {currentService.reviewText && (
                                    <>
                                        <h5 className="mt-4">Reviews: </h5>
                                        <div className="bg-primary bg-gradient rounded shadow-lg px-4 py-5 mt-4">
                                            <div className="card text-center">
                                                {currentService.reviewImage && (
                                                    <Image src={currentService.reviewImage} width={110} height={110} className="avatar avatar-medium rounded-pill mx-auto" alt="Client Image" />
                                                )}
                                                <div className="card-body pb-0 content">
                                                    <p className="h5 fw-normal text-white-50 fst-italic">{currentService.reviewText}</p>
                                                    <div className="name mt-4">
                                                        <small className="text-uppercase text-light title-dark fw-semibold d-block">{currentService.reviewerName}</small>
                                                        <small className="text-white-50">{currentService.reviewerPosition}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="sidebar sticky-bar">
                                <div className="widget text-center position-relative">
                                    <div className="rounded shadow bg-white">
                                        <div className="position-relative">
                                            <Image src='/images/blog/12.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="" />
                                            <VideoModal />
                                        </div>
                                    </div>
                                </div>
                                <div className="widget mt-4 pt-2">
                                    <div className="rounded p-4 shadow bg-white">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">Subscribe</h6>
                                        <form className="mt-4">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="foot-subscribe mb-3">
                                                        <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                        <input type="email" name="email" id="emailsubscribe" className="form-control rounded" placeholder="Your email : " required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary w-100" value="Subscribe" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSeven />
            <ScrollTop />
        </>
    );
}