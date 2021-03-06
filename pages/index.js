import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    async function scroll() {
      const blocks = document.getElementsByClassName("container__item");
      const container = document.getElementsByClassName("container");

      const body = document.querySelector("body");
      body.classList.add("home");

      if (window !== undefined) {
        const HorizontalScroll = await import("horizontal-scroll/dist");
        const hs = await new HorizontalScroll.default({
          blocks: blocks,
          container: container,
          isAnimated: true,
          springEffect: 0.8,
        })
      }
    }
    scroll();
  }, [])

  return (
    <div className={"wrapper"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        {/*menu */}
        <nav className="nav menu">
          <div className="menu__logo">
            <Link href="/">Kizco</Link>
          </div>
          <div className="menu__items">
            <div className="menu__items-link active"><Link href="/">Projets</Link></div>
            <div className="menu__items-link"><Link href="/about">A propos</Link></div>
          </div>
        </nav>

        {/*horizontal scroll items*/}
        <div className="container">
          <div className="container__item container__item-header">
            <h1>Kizco. <br/>Live with passion.</h1>
          </div>

          <div className="container__item container__item-1">
            <Image src={"/images/img-one.jpeg"} layout='fill'/>
            <h1 className="container__item-title">
              <Link href="/project">(nom de code)</Link>
            </h1>
          </div>
          <div className="container__item container__item-2">
            <h1 className="container__item-title">
              <Link href="/project">Evasion</Link>
            </h1>
          </div>
          <div className="container__item container__item-3">
            <h1 className="container__item-title">
              <Link href="/project">Alex Harez (dessins)</Link>
            </h1>
          </div>
          <div className="container__item container__item-4">
            <h1 className="container__item-title">
              <Link href="/project">Brutal</Link>
            </h1>
          </div>
          <div className="container__item container__item-5">
            <h1 className="container__item-title">
              <Link href="/project">Mouthwash</Link>
            </h1>
          </div>
        </div>
    </div>
  )
}
