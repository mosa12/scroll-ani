'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const car = document.getElementById("car");
    const trail = document.getElementById("trail");
    const letters = gsap.utils.toArray(".value-letter") as HTMLElement[];
    const valueAdd = document.querySelector(".value-add");

    if (!car || !trail || !valueAdd) return;

    const valueRect = valueAdd.getBoundingClientRect();
    const letterOffsets = letters.map((letter) => letter.offsetLeft);

    const roadWidth = window.innerWidth;
    const carWidth = 150;
    const endX = roadWidth - carWidth;

    gsap.to(car, {
      scrollTrigger: {
        trigger: ".section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".track",
      },
      x: endX,
      ease: "none",
      onUpdate: function () {
        const carX = Number(gsap.getProperty(car, "x")) + carWidth / 2;
        letters.forEach((letter, i) => {
          const letterX = valueRect.left + letterOffsets[i];
          if (carX >= letterX) {
            letter.style.opacity = "1";
          } else {
            letter.style.opacity = "0";
          }
        });
        gsap.set(trail, { width: carX });
      },
    });

    gsap.to("#box1", {
      scrollTrigger: {
        trigger: ".section",
        start: "top+=400 top",
        end: "top+=600 top",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to("#box2", {
      scrollTrigger: {
        trigger: ".section",
        start: "top+=600 top",
        end: "top+=800 top",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to("#box3", {
      scrollTrigger: {
        trigger: ".section",
        start: "top+=800 top",
        end: "top+=1000 top",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to("#box4", {
      scrollTrigger: {
        trigger: ".section",
        start: "top+=1000 top",
        end: "top+=1200 top",
        scrub: true,
      },
      opacity: 1,
    });
  }, [])

  return (
    <div>
      <section className="section h-[200vh] relative bg-gray-900 text-white">
        <div className="track sticky top-0 h-screen flex items-center justify-center relative">
          <div className="road w-screen h-[200px] bg-black relative overflow-hidden">
            <img
              src="/car1.webp"
              alt="car"
              className="car absolute top-0 left-0 h-[200px] w-[150px] z-10"
              id="car"
            />
            <div
              className="trail h-[200px] bg-green-500 absolute top-0 left-0 z-1"
              id="trail"
              style={{ width: 0 }}
            ></div>
            <div
              className="value-add absolute left-[5%] top-[15%] text-8xl font-bold flex gap-3 z-5"
              id="valueText"
            >
              <span className="value-letter opacity-0">W</span>
              <span className="value-letter opacity-0">E</span>
              <span className="value-letter opacity-0">L</span>
              <span className="value-letter opacity-0">C</span>
              <span className="value-letter opacity-0">O</span>
              <span className="value-letter opacity-0">M</span>
              <span className="value-letter opacity-0">E</span>
              <span className="value-letter opacity-0">&nbsp;</span>
              <span className="value-letter opacity-0">I</span>
              <span className="value-letter opacity-0">T</span>
              <span className="value-letter opacity-0">Z</span>
              <span className="value-letter opacity-0">F</span>
              <span className="value-letter opacity-0">I</span>
              <span className="value-letter opacity-0">Z</span>
              <span className="value-letter opacity-0">Z</span>
            </div>
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            id="box1"
            style={{ top: '5%', right: '30%', background: '#def54f', color: '#111' }}
          >
            <span className="num-box text-6xl font-semibold">58%</span> Increase in pick up point use
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            id="box2"
            style={{ bottom: '5%', right: '35%', background: '#6ac9ff', color: '#111' }}
          >
            <span className="num-box text-6xl font-semibold">23%</span> Decreased in customer phone calls
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            id="box3"
            style={{ top: '5%', right: '10%', background: '#333', color: '#fff' }}
          >
            <span className="num-box text-6xl font-semibold">27%</span> Increase in pick up point use
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            id="box4"
            style={{ bottom: '5%', right: '12.5%', background: '#fa7328', color: '#111' }}
          >
            <span className="num-box text-6xl font-semibold">40%</span> Decreased in customer phone calls
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Scroll Down</h2>
          <p className="text-lg text-gray-600">This is additional content to enable scrolling and see the animation effect.</p>
        </div>
      </section>
    </div>
  )
}
