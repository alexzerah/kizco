import Link from 'next/link';
import TweenMax from "gsap/";
import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        async function loadAsync() {
            if (window !== undefined) {
                const body = document.querySelector('body');
                body.id = "js-scroll";

                const LocomotiveScroll = (await import("locomotive-scroll")).default;

                // smooth scroll
                const scroll = new LocomotiveScroll({
                    el: document.querySelector('#js-scroll'),
                    smooth: true,
                    smoothMobile: true,
                    inertia: 0.75
                });
                console.log(scroll);

                // scroll.init()

                console.log(scroll)

                // div following mouse
                TweenMax.from(".cursor-follow", 2, {
                    delay: 1,
                    opacity: 0
                });

                const follower = document.querySelector('.cursor-follow');

                let posX = 0;
                let posY = 0;
                let mouseX = 0;
                let mouseY = 0;

                TweenMax.to({}, 0.016, {
                    repeat: -1,
                    onRepeat: function () {
                        posX += (mouseX - posX) / 9;
                        posY += (mouseY - posY) / 9;

                        TweenMax.set(follower, {
                            css: {
                                left: posX - 40,
                                top: posY - 40,
                            }
                        });
                    }
                });

                document.addEventListener("mousemove", function (e) {
                    mouseX = e.pageX;
                    mouseY = e.pageY;
                });
            }
        }
        loadAsync()
    }, [])

    return (
        <div className={"wrapper"}>
                {/*menu*/}
                <nav className="nav menu">
                    <div className="menu__logo">
                        <Link href="/">Kizco</Link>
                    </div>
                    <div className="menu__items">
                        <div className="menu__items-link"><Link href="/">Projets</Link></div>
                        <div className="menu__items-link active"><Link href="/">A propos</Link></div>
                    </div>
                </nav>

                {/*about-section*/}
                <div className="about__container" data-scroll-section="true">
                    <p className="about__container-data" data-scroll={"true"}>Hey ! Nous sommes passionnés 🔥.<br/>Nous adorons
                        faire des projets (créatifs). <span>D'abord, il y a
                            <Link href="https://www.instagram.com/thibaultasseum/" target="_blank">Thibault</Link>.</span><br/>Culture
                        Skate, Kurt Cobain, sapes maitrisées et une grande dose de spirituelle.
                        Voilà notre homme.
                        <br/><span>Ensuite, <Link href="https://www.instagram.com/keymonmusic/" target="_blank">Keymon</Link> : il s'interroge pour donner une maximum de sens à sa vie. <br/>Sa plume est le lampadaire de nos crises existencielles.</span><span><br/>Puis, <a
                            href="https://www.instagram.com/iamcoolalexz/" target="_blank">Alex</a>, créateur de cyclopes et passionné par lézard autant que les humains.</span><br/>Voilà
                        notre Team.</p>

                    <p data-scroll={"true"}>Pour nous contacter =&gt; <span
                        className="about__container-contact-link"><Link href="mailto:contact@kizco.xyz"
                                                                     target="_blank">Envoyer un mail.</Link></span></p>
                </div>

                <div className="cursor-follow"></div>
        </div>
    )
}
