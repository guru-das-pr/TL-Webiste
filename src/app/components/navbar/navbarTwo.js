'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import { LuSearch, BiBriefcaseAlt2, HiOutlinePresentationChartLine, AiOutlinePieChart, SiSimpleanalytics, BsPhone, FiAirplay, CgClapperBoard, ImLoop2, GiStamper, TbCoinBitcoin, RiCupLine, FiUser, ImImage, PiBracketsCurly, FiThumbsUp, TfiLayoutListThumb, AiOutlineShopping, LuBookMinus } from "../../assets/icons/vander"
import { IoRestaurantOutline } from "react-icons/io5"

export default function NavbarTwo({ navClass, manuClass, navDark }) {
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [searchBox, setSearchBox] = useState(false)

    let [manu, setManu] = useState('');
    let pathname = usePathname();

    useEffect(() => {
        setManu(pathname)
        function scrollHandler() {
            setScroll(window.scrollY > 50)
        }
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
        }
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [setManu]);


    // Toggle menu
    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <>
            <header id="topnav" className={`${scroll ? "nav-sticky" : ""} ${navClass}`}>
                <div className="container">
                    {navDark === true ?
                        <Link className="logo" href="/">
                            <Image src='/images/logo-dark.png' width={110} height={30} className="logo-light-mode" alt="" />
                            <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt="" />
                        </Link> :
                        <Link className="logo" href="/">
                            <span className="logo-light-mode">
                                <Image src='/images/logo-dark.png' width={110} height={30} className="l-dark" alt="" />
                                <Image src='/images/logo-light.png' width={110} height={30} className="l-light" alt="" />
                            </span>
                            <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt="" />
                        </Link>
                    }
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item search-icon mb-0">
                            <div className="dropdown">
                                {navDark === true ?
                                    <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={() => setSearchBox(!searchBox)}>
                                        <LuSearch className="h5 text-dark mb-0" />
                                    </button> :
                                    <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={() => setSearchBox(!searchBox)}>
                                        <LuSearch className="h5 text-dark nav-light-icon-dark mb-0" />
                                        <LuSearch className="h5 text-white nav-light-icon-white mb-0" />
                                    </button>
                                }

                                <div className={`${searchBox === true ? "show" : ''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-4 py-0`} style={{ width: '300px', inset: '0px 0px auto auto', position: 'absolute', transform: "translate(0px, 31px)" }}>
                                    <form className="p-4">
                                        <input type="text" id="text" name="name" className="form-control border bg-white" placeholder="Search..." />
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className={manuClass}>
                            <li className={`${["/",].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                                <Link href="/">Home</Link><span className="menu-arrow"></span>

                            </li>


                            <li className={`${["/page-services-two", "/portfolio-masonry-three", "/page-faqs", "/page-comingsoon", "/page-maintenance", "/page-error"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                                <Link href="#">Features</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-services-two" || "" ? "active" : ""}><Link href="/page-services-two" className="sub-menu-item">Product & Services</Link></li>
                                    <li className={manu === "/page-careers" || "" ? "active" : ""}><Link href="/page-services-two" className="sub-menu-item">Careers</Link></li>

                                    <li className={`${["/portfolio-masonry-three"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                                        <Link href="/portfolio-masonry-three">Portfolio</Link><span className="menu-arrow"></span>

                                    </li>

                                    {/* <li className={`${["/page-services","/page-services-two", "/page-single-service"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Services</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/page-services" || "" ? "active" : ""}><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                        <li className={manu === "/page-services-two" || "" ? "active" : ""}><Link href="/page-services-two" className="sub-menu-item">Services Two</Link></li>
                                        <li className={manu === "/page-single-service" || "" ? "active" : ""}><Link href="/page-single-service" className="sub-menu-item">Single Service </Link></li>
                                    </ul> 
                                </li> */}
                                    <li className={manu === "/page-faqs" || "" ? "active" : ""}><Link href="/page-faqs" className="sub-menu-item">FAQs</Link></li>
                                    <li className={manu === "/page-privacy-policy" || "" ? "active" : ""}><Link href="/page-privacy-policy" className="sub-menu-item">Privacy Policy</Link></li>
                                    <li className={manu === "/page-terms-conditions" || "" ? "active" : ""}><Link href="/page-terms-conditions" className="sub-menu-item">Terms & Conditions</Link></li>
                                    <li className={`${["/page-comingsoon", "/page-maintenance", "/page-error"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Special</Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/page-comingsoon" || "" ? "active" : ""}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                            <li className={manu === "/page-maintenance" || "" ? "active" : ""}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                            <li className={manu === "/page-error" || "" ? "active" : ""}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={manu === "/page-aboutus" || "" ? "active" : ""}><Link href="/page-aboutus" className="sub-menu-item">About</Link></li>
                            <li className={manu === "/page-team" || "" ? "active" : ""}><Link href="/page-team" className="sub-menu-item">Team</Link></li>



                            <li className={`${["/blog-image-grid-sidebar"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                                <Link href="/blog-image-grid-sidebar">Blogs</Link><span className="menu-arrow"></span>

                            </li>




                            <li className={manu === "/page-contact" || "" ? "active" : ""}><Link href="/page-contact" className="sub-menu-item">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}