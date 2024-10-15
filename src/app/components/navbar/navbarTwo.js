'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {LuSearch, BiBriefcaseAlt2,HiOutlinePresentationChartLine,AiOutlinePieChart,SiSimpleanalytics, BsPhone,FiAirplay,CgClapperBoard,ImLoop2,GiStamper,TbCoinBitcoin,RiCupLine,FiUser,ImImage,PiBracketsCurly,FiThumbsUp,TfiLayoutListThumb,AiOutlineShopping,LuBookMinus} from "../../assets/icons/vander"
import {IoRestaurantOutline} from "react-icons/io5"

export default function NavbarTwo({navClass,manuClass,navDark}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [searchBox, setSearchBox] = useState(false)

    let [manu , setManu] = useState('');
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


    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {navDark === true ?  
                <Link className="logo" href="/">
                    <Image src='/images/logo-dark.png' width={110} height={30} className="logo-light-mode" alt=""/>
                    <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt=""/>
                </Link> :
                <Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src='/images/logo-dark.png' width={110} height={30} className="l-dark" alt=""/>
                        <Image src='/images/logo-light.png' width={110} height={30} className="l-light" alt=""/>
                    </span>
                    <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt=""/>
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
                               <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={()=>setSearchBox(!searchBox)}>
                                    <LuSearch className="h5 text-dark mb-0"/>
                                </button>:
                            <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={()=>setSearchBox(!searchBox)}>
                                <LuSearch className="h5 text-dark nav-light-icon-dark mb-0"/>
                                <LuSearch className="h5 text-white nav-light-icon-white mb-0"/>
                            </button>
                        }
                          
                            <div className={`${searchBox === true ? "show" : ''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-4 py-0`} style={{width:'300px',inset: '0px 0px auto auto',position:'absolute', transform: "translate(0px, 31px)"}}>
                                <form className="p-4">
                                    <input type="text" id="text" name="name" className="form-control border bg-white" placeholder="Search..."/>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li className={`${["/",].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="/">Home</Link><span className="menu-arrow"></span>
                           
                        </li>
        
                        <li className={`${["/page-aboutus", "/page-services-two","/page-faqs","/page-team","/page-comingsoon","/page-maintenance","/page-error"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/page-aboutus" || "" ? "active" : ""}><Link href="/page-aboutus" className="sub-menu-item">About Us</Link></li>
                                <li className={`${["/page-services","/page-services-two", "/page-single-service"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Services</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/page-services" || "" ? "active" : ""}><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                        <li className={manu === "/page-services-two" || "" ? "active" : ""}><Link href="/page-services-two" className="sub-menu-item">Services Two</Link></li>
                                        <li className={manu === "/page-single-service" || "" ? "active" : ""}><Link href="/page-single-service" className="sub-menu-item">Single Service </Link></li>
                                    </ul> 
                                </li>
                                <li><Link href="/page-faqs" className="sub-menu-item">FAQs</Link></li>
                                <li><Link href="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link href="/page-team" className="sub-menu-item">Team</Link></li>                                
                                <li className={`${["/shop-grids","/shop-product-detail", "/shop-cart","/shop-checkout"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Shop</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/shop-grids" || "" ? "active" : ""}><Link href="/shop-grids" className="sub-menu-item">Product Grids</Link></li>
                                        <li className={manu === "/shop-product-detail" || "" ? "active" : ""}><Link href="/shop-product-detail" className="sub-menu-item">Product Details</Link></li>
                                        <li className={manu === "/shop-cart" || "" ? "active" : ""}><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                        <li className={manu === "/shop-checkout" || "" ? "active" : ""}><Link href="/shop-checkout" className="sub-menu-item">Checkouts</Link></li>
                                    </ul>
                                </li>
                                <li className={`${["/page-comingsoon","/page-maintenance", "/page-error"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/page-comingsoon" || "" ? "active" : ""}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li className={manu === "/page-maintenance" || "" ? "active" : ""}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li className={manu === "/page-error" || "" ? "active" : ""}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${["/portfolio-classic-two","/portfolio-classic-three", "/portfolio-classic-four","/portfolio-classic-five","/portfolio-classic-six","/portfolio-classic-sidebar","/portfolio-creative-two","/portfolio-creative-three","/portfolio-creative-four","/portfolio-creative-five","/portfolio-creative-six","/portfolio-creative-sidebar","/portfolio-modern-two","/portfolio-modern-three","/portfolio-modern-four","/portfolio-modern-five","/portfolio-modern-six","/portfolio-modern-sidebar","/portfolio-masonry-two","/portfolio-masonry-three","/portfolio-masonry-four","/portfolio-masonry-five","/portfolio-masonry-six","/portfolio-masonry-sidebar","/portfolio-detail-one","/portfolio-detail-two","/portfolio-detail-three","/portfolio-detail-four"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li className={manu === "/portfolio-classic-two" || "" ? "active" : ""}><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={manu === "/portfolio-classic-three" || "" ? "active" : ""}><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={manu === "/portfolio-classic-four" || "" ? "active" : ""}><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={manu === "/portfolio-classic-five" || "" ? "active" : ""}><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={manu === "/portfolio-classic-six" || "" ? "active" : ""}><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                        <li className={manu === "/portfolio-classic-sidebar" || "" ? "active" : ""}><Link href="/portfolio-classic-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li className={manu === "/portfolio-creative-two" || "" ? "active" : ""}><Link href="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={manu === "/portfolio-creative-three" || "" ? "active" : ""}><Link href="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={manu === "/portfolio-creative-four" || "" ? "active" : ""}><Link href="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={manu === "/portfolio-creative-five" || "" ? "active" : ""}><Link href="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={manu === "/portfolio-creative-six" || "" ? "active" : ""}><Link href="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                        <li className={manu === "/portfolio-creative-sidebar" || "" ? "active" : ""}><Link href="/portfolio-creative-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li className={manu === "/portfolio-modern-two" || "" ? "active" : ""}><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={manu === "/portfolio-modern-three" || "" ? "active" : ""}><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={manu === "/portfolio-modern-four" || "" ? "active" : ""}><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={manu === "/portfolio-modern-five" || "" ? "active" : ""}><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={manu === "/portfolio-modern-six" || "" ? "active" : ""}><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                        <li className={manu === "/portfolio-modern-sidebar" || "" ? "active" : ""}><Link href="/portfolio-modern-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li  className={manu === "/portfolio-masonry-two" || "" ? "active" : ""}><Link href="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={manu === "/portfolio-masonry-three" || "" ? "active" : ""}><Link href="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={manu === "/portfolio-masonry-four" || "" ? "active" : ""}><Link href="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={manu === "/portfolio-masonry-five" || "" ? "active" : ""}><Link href="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={manu === "/portfolio-masonry-six" || "" ? "active" : ""}><Link href="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                        <li className={manu === "/portfolio-masonry-sidebar" || "" ? "active" : ""}><Link href="/portfolio-masonry-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li className={manu === "/portfolio-detail-one" || "" ? "active" : ""}><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li className={manu === "/portfolio-detail-two" || "" ? "active" : ""}><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li className={manu === "/portfolio-detail-three" || "" ? "active" : ""}><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li className={manu === "/portfolio-detail-four" || "" ? "active" : ""}><Link href="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${["/blog-grid","/blog-masonry", "/blog-list","/blog-grid-sidebar","/blog-masonry-sidebar","/blog-list-sidebar","/blog-image-grid","/blog-image-masonry","/blog-image-grid-sidebar","/blog-image-masonry-sidebar","/blog-detail-one","/blog-detail-two","/blog-detail-three","/blog-detail-four","/blog-detail-five","/blog-standard-post","/blog-slider-post","/blog-youtube-post","/blog-vimeo-post","/blog-html-video-post","/blog-audio-post","/blog-html-audio-post","/blog-blockquote-post","/blog-author"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Blogs</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={`${["/blog-grid","/blog-masonry", "/blog-list","/blog-grid-sidebar","/blog-masonry-sidebar","/blog-list-sidebar"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Blog</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/blog-grid" || "" ? "active" : ""}><Link href="/blog-grid" className="sub-menu-item">Blog Grids</Link></li>
                                        <li className={manu === "/blog-masonry" || "" ? "active" : ""}><Link href="/blog-masonry" className="sub-menu-item">Blog Masonry</Link></li>
                                        <li className={manu === "/blog-list" || "" ? "active" : ""}><Link href="/blog-list" className="sub-menu-item">Blog List</Link></li>
                                        <li className={manu === "/blog-grid-sidebar" || "" ? "active" : ""}><Link href="/blog-grid-sidebar" className="sub-menu-item">Blog-Sidebar</Link></li>
                                        <li className={manu === "/blog-masonry-sidebar" || "" ? "active" : ""}><Link href="/blog-masonry-sidebar" className="sub-menu-item">Blog Masonry-sidebar</Link></li>
                                        <li className={manu === "/blog-list-sidebar" || "" ? "active" : ""}><Link href="/blog-list-sidebar" className="sub-menu-item">Blog List-Sidebar</Link></li>
                                    </ul>
                                </li>
                                <li className={`${["/blog-image-grid","/blog-image-masonry", "/blog-image-grid-sidebar","/blog-image-masonry-sidebar"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Image Blog</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/blog-image-grid" || "" ? "active" : ""}><Link href="/blog-image-grid" className="sub-menu-item">Blog Grids</Link></li>
                                        <li className={manu === "/blog-image-masonry" || "" ? "active" : ""}><Link href="/blog-image-masonry" className="sub-menu-item">Blog Masonry</Link></li>
                                        <li className={manu === "/blog-image-grid-sidebar" || "" ? "active" : ""}><Link href="/blog-image-grid-sidebar" className="sub-menu-item">Blog-Sidebar</Link></li>
                                        <li className={manu === "/blog-image-masonry-sidebar" || "" ? "active" : ""}><Link href="/blog-image-masonry-sidebar" className="sub-menu-item">Blog Masonry-sidebar</Link></li>
                                    </ul> 
                                </li>
                                <li className={`${["/blog-detail-one","/blog-detail-two", "/blog-detail-three","/blog-detail-four","/blog-detail-five"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Blog Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/blog-detail-one" || "" ? "active" : ""}><Link href="/blog-detail-one" className="sub-menu-item">Blog Detail One</Link></li>
                                        <li className={manu === "/blog-detail-two" || "" ? "active" : ""}><Link href="/blog-detail-two" className="sub-menu-item">Blog Detail Two</Link></li>
                                        <li className={manu === "/blog-detail-three" || "" ? "active" : ""}><Link href="/blog-detail-three" className="sub-menu-item">Blog Detail Three</Link></li>
                                        <li className={manu === "/blog-detail-four" || "" ? "active" : ""}><Link href="/blog-detail-four" className="sub-menu-item">Blog Detail Four</Link></li>
                                        <li className={manu === "/blog-detail-five" || "" ? "active" : ""}><Link href="/blog-detail-five" className="sub-menu-item">Blog Detail Five</Link></li>
                                    </ul>  
                                </li>
                                <li className={`${["/blog-standard-post","/blog-slider-post", "/blog-youtube-post","/blog-vimeo-post","/blog-html-video-post","/blog-audio-post","/blog-html-audio-post","/blog-blockquote-post"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Single Blog Post</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/blog-standard-post" || "" ? "active" : ""}><Link href="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                        <li className={manu === "/blog-slider-post" || "" ? "active" : ""}><Link href="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                        <li className={manu === "/blog-youtube-post" || "" ? "active" : ""}><Link href="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                        <li className={manu === "/blog-vimeo-post" || "" ? "active" : ""}><Link href="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                        <li className={manu === "/blog-html-video-post" || "" ? "active" : ""}><Link href="/blog-html-video-post" className="sub-menu-item">HTML Video Post</Link></li>
                                        <li className={manu === "/blog-audio-post" || "" ? "active" : ""}><Link href="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                        <li className={manu === "/blog-html-audio-post" || "" ? "active" : ""}><Link href="/blog-html-audio-post" className="sub-menu-item">HTML Audio Post</Link></li>
                                        <li className={manu === "/blog-blockquote-post" || "" ? "active" : ""}><Link href="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                    </ul>
                                </li>
                                <li className={manu === "/blog-author" || "" ? "active" : ""}><Link href="/blog-author" className="sub-menu-item">Author</Link></li>
                            </ul>
                        </li>

                        <li className={manu === "/page-contact" || "" ? "active" : ""}><Link href="/page-contact" className="sub-menu-item">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}