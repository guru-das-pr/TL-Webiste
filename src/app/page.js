import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "./components/navbar/navbarTwo";
import Partners from "./components/partners";
import Team from "./components/team";
import PricingThree from "./components/pricing/pricingThree";
import ClientTwo from "./components/client/clientTwo";
import BlogTwo from "./components/blog/blogTwo";
import FooterFour from "./components/footer/footerFour";
import ScrollTop from "./components/scrollTop";
import HeroSlider from "./components/business/heroSlider";
import VideoModal from "./components/business/videoModal";
import Cta from "./components/business/cta";
import Counter from "./components/business/counter";

import { aboutData } from "./data/business";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function IndexBusiness() {
    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <HeroSlider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 order-1 order-md-2">
                            <div className="features-absoluteTwo">
                                <div className="position-relative">
                                    <Image src='/images/01.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="" />
                                    <VideoModal />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 order-2 order-md-1">
                            <div className="section-title text-center">
                                <h6 className="text-primary">Our Key Services</h6>
                                <h4 className="title fw-semibold mt-2 mb-3">We specialize in delivering cutting-edge solutions across various domains.</h4>
                            </div>
                            <div className="row">
                                {aboutData.map((item, index) => {
                                    let Icon = item.icon
                                    return (
                                        <div className="col-lg-6 col-12 mb-4 pt-2" key={index}>
                                            <div className="card features feature-primary">
                                                <Icon className="icon h1 d-block mb-3" />
                                                <Link href="/page-single-service" className="h5 title text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <Partners />
                </div>
            </section>

            <section className="section bg-light py-5">
                {/* Our Story Section */}
                <div className="container mb-5">
                    <div className="section-title text-center mb-5">
                        <h6 className="text-primary">Our Story</h6>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <Image
                                src="/images/about.jpg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '70%', height: 'auto' }}
                                className="img-fluid rounded shadow"
                                alt="About TL Company"
                            />
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Story of TL Company</h4>
                                <p className="text-muted">
                                    Founded in 2020, TL Technologies has evolved from a small startup into a leading technology solutions provider. Our journey began with a simple mission: to leverage technology to solve real-world problems. Over the years, we have expanded our services, built a talented team, and established a reputation for innovation and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* About Our CEO Section */}
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <h6 className="text-primary">About Our CEO</h6>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6 order-2 order-md-1">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Sangeetha C. Gopalakrishnan</h4>
                                <p className="text-muted">
                                    Sangeetha C. Gopalakrishnan is the visionary Founder and CEO of TL Technologies Pvt. Ltd. With a strong leadership style, clear vision, and the ability to inspire others, she has been the driving force behind the company's success. With over 20 years of experience in the USA in program management, cable television, and SaaS industries, Sangeetha has a proven track record in managing IT vendor contracts, website creation, hosting, IT operations, and application development. Her courage to take risks and initiate enhanced communication with clients has set a high standard for the organization. Known for her excellent communication and negotiation skills, Sangeetha values collaboration over competition, ensuring clients receive authentic and trustworthy services.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 order-1 order-md-2 mb-4 mb-lg-0">
                            <Image
                                src="/images/about.jpg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '70%', height: 'auto' }}
                                className="img-fluid rounded shadow"
                                alt="About Sangeetha C. Gopalakrishnan"
                            />
                        </div>
                    </div>
                </div>

                {/* Optional Team Section */}
                {/* <div className="container-fluid mt-100 mt-60">
        <Team />
    </div> */}


            </section>

            {/* need to remove            
            <section className="section">
                <PricingThree />
            </section> */}
            <Cta />
            <section className="section">

                <ClientTwo />
                <div className="container mt-5">
                    <Counter />
                </div>
                <div className="container mt-100 mt-60">
                    <BlogTwo />
                </div>
            </section>
            <FooterFour />
            <ScrollTop />
        </>
    )
}