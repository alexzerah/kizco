import Link from 'next/link';
import {useEffect} from "react";

export default function Project() {
    useEffect(() => {
        async function loadAsync() {
            if(window !== undefined) {
                const body = document.querySelector('body');
                body.id = "js-scroll";
                const LocomotiveScroll = (await import("locomotive-scroll")).default;
                const anime = (await import("animejs")).default;
                const gsap = (await import("gsap")).default;
                const Expo = (await import("gsap/dist/gsap")).default;
                // smooth scroll
                const scroll = new LocomotiveScroll({
                    el: document.querySelector('#js-scroll'),
                    smooth: true,
                    smoothMobile: true,
                    inertia: 0.75
                });

                // project title animation
                const textWrapper = document.querySelector('.anime-js-title');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime.timeline()
                    .add({
                        targets: '.anime-js-title .letter',
                        translateY: [60, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                        duration: 1200,
                        delay: (el, i) => 600 + 30 * i
                    });


                // project subtitle animation
                gsap.from(".project__container-subtitle",  {
                    duration: 2,
                    y: 10,
                    opacity: 0,
                    ease: Expo.easeInOut
                });

                // project image fade
                gsap.from(".project__image-one",  {
                    duration: 2,
                    opacity: 0,
                    ease: Expo.easeInOut
                });
            }
        }
        loadAsync();
    }, [])

    return (
        <div>
            <div className="wrapper">
                {/*menu*/}
                <nav className="nav menu">
                    <div className="menu__logo">
                        <Link href="/">Kizco</Link>
                    </div>
                    <div className="menu__items">
                        <div className="menu__items-link"><Link href="/">Projets</Link></div>
                        <div className="menu__items-link"><Link href="/about">A propos</Link></div>
                    </div>
                </nav>

                {/*project section*/}
                <div className="project__container" data-scroll-section={"true"}>

                    <div className="project__container-title" data-scroll={"true"}>
                        <h1 className="anime-js-title">Creative mix</h1>
                    </div>
                    <div className="project__container-subtitle" data-scroll={"true"}>
                        <p>Visual design</p>
                    </div>

                    <div className="project__container-images">
                        <div className="project__image project__image-one" data-scroll={"true"} data-scroll-speed="1">
                        </div>
                        <div className="project__image project__image-two" data-scroll={"true"} data-scroll-speed="4">
                        </div>
                        <div className="project__image project__image-three" data-scroll={"true"} data-scroll-speed="2">
                        </div>
                        <div className="project__image project__image-four" data-scroll={"true"} data-scroll-speed="4">
                        </div>
                    </div>
                    <div className={"positionRelativ"} data-scroll={"true"} data-scroll-speed={"3"}>
                        <h2>Bonjour</h2>
                        <ul>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                        </ul>
                        <p>lorem ipsume et doloris is.lorem ipsume et doloris is.lorem ipsume et doloris is.lorem ipsume et doloris is.lorem ipsume et doloris is.lorem ipsume et doloris is.lorem ipsume et doloris is.</p>
                    </div>
                    <div className="project-next-link" data-scroll={"true"}>
                        <Link href="/">Next</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
