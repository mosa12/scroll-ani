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
    const carWidth = 200;
    const endX = roadWidth - carWidth;

    gsap.to(car, {
      scrollTrigger: {
        trigger: ".section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: ".track",
      },
      x: endX,
      ease: "power2.out",
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
      <section className="section h-[200vh] relative bg-gradient-to-b from-orange-900 via-red-900 to-black text-white">
        <div className="track sticky top-0 h-screen flex items-center justify-center relative">
          <div className="road w-screen h-[200px] bg-black relative overflow-hidden">
            <img
              src="/bike5.jpg"
              alt="car"
              className="car absolute top-0 left-0 h-[200px] w-[420px] z-10"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.8))' }}
              id="car"
            />
            <div
              className="trail h-[200px] bg-gradient-to-r from-orange-500 to-red-500 absolute top-0 left-0 z-1"
              id="trail"
              style={{ width: 0 }}
            ></div>
            <div
              className="value-add absolute left-[5%] top-[15%] text-8xl font-bold flex gap-3 z-5 text-black"
              style={{ WebkitTextStroke: '2px #ff0000' }}
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
              <span className="value-letter opacity-0">S</span>
              <span className="value-letter opacity-0">&nbsp;</span>
              <span className="value-letter opacity-0">&nbsp;</span>
              <span className="value-letter opacity-0">M</span>
              <span className="value-letter opacity-0">E</span>
            </div>
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            style={{ top: '5%', right: '30%', background: '#ff4500', color: '#fff', boxShadow: '0 0 20px rgba(255, 69, 0, 0.8)' }}
            id="box1"
          >
            <span className="num-box text-6xl font-semibold">58%</span> Increase in pick up point use
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            style={{ bottom: '5%', right: '35%', background: '#dc143c', color: '#fff', boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)' }}
            id="box2"
          >
            <span className="num-box text-6xl font-semibold">23%</span> Decreased in customer phone calls
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            style={{ top: '5%', right: '10%', background: '#8b0000', color: '#fff', boxShadow: '0 0 20px rgba(139, 0, 0, 0.8)' }}
            id="box3"
          >
            <span className="num-box text-6xl font-semibold">27%</span> Increase in pick up point use
          </div>
          <div
            className="text-box opacity-0 p-8 rounded-lg m-4 absolute z-5 flex flex-col justify-center items-start gap-1"
            style={{ bottom: '5%', right: '12.5%', background: '#ff6347', color: '#fff', boxShadow: '0 0 20px rgba(255, 99, 71, 0.8)' }}
            id="box4"
          >
            <span className="num-box text-6xl font-semibold">40%</span> Decreased in customer phone calls
          </div>
        </div>
      </section>
    </div>
  )
}
