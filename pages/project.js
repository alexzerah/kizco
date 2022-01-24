// import Link from 'next/link';
// import LocomotiveScroll from "locomotive-scroll";
// import anime from "animejs"
// import TweenMax from "gsap/gsap-core";
// import {useEffect} from "react";
//
// export default function Project() {
//     useEffect(() => {
//         // smooth scroll
//         const scroll = new LocomotiveScroll({
//             el: document.querySelector('#js-scroll'),
//             smooth: true,
//             smoothMobile: true,
//             inertia: 0.75
//         });
//
//         // project title animation
//         const textWrapper = document.querySelector('.anime-js-title');
//         textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span className='letter'>$&</span>");
//
//         anime.timeline()
//             .add({
//                 targets: '.anime-js-title .letter',
//                 translateY: [60, 0],
//                 translateZ: 0,
//                 opacity: [0, 1],
//                 easing: "easeOutExpo",
//                 duration: 1200,
//                 delay: (el, i) => 600 + 30 * i
//             });
//
//         // project subtitle animation
//         TweenMax.from(".project__container-subtitle", 2, {
//             y: 10,
//             opacity: 0,
//             ease: Expo.easeInOut
//         });
//
//         // project image fade
//         TweenMax.from(".project__image-one", 2, {
//             opacity: 0,
//             ease: Expo.easeInOut
//         });
//     })
//
//     return (
//         <div>
//             <body id="js-scroll">
//             <div className="wrapper">
//
//                 {/*menu*/}
//                 <nav className="menu">
//                     <div className="menu__logo">
//                         <Link href="/">Kizco</Link>
//                     </div>
//                     <div className="menu__items">
//                         <div className="menu__items-link"><Link href="/project">Projets</Link></div>
//                         <div className="menu__items-link"><Link href="/about">A propos</Link></div>
//                     </div>
//                 </nav>
//
//                 {/*project section*/}
//                 <div className="project__container" data-scroll-section>
//
//                     <div className="project__container-title" data-scroll>
//                         <h1 className="anime-js-title">Creative mix</h1>
//                     </div>
//                     <div className="project__container-subtitle" data-scroll>
//                         <p>Visual design</p>
//                     </div>
//
//                     <div className="project__container-images">
//                         <div className="project__image project__image-one" data-scroll data-scroll-speed="1">
//                         </div>
//                         <div className="project__image project__image-two" data-scroll data-scroll-speed="4">
//                         </div>
//                         <div className="project__image project__image-three" data-scrol data-scroll-speed="2">
//                         </div>
//                         <div className="project__image project__image-four" data-scroll data-scroll-speed="4">
//                         </div>
//                     </div>
//                     <div className="project-next-link" data-scroll>
//                         <Link href="/project">Next</Link>
//                     </div>
//
//                 </div>
//             </div>
//             </body>
//         </div>
//     )
// }
