import Head from 'next/head'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import personal from "../public/personal.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/images/web7.png";
import web8 from "../public/images/web8.png";
import web9 from "../public/web9.png";



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
    <div>
      <Head>
        <title>William Huang Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">WilliamH</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.linkedin.com/in/wenfeng-huang-14369323a/"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              William Huang
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Geographer and cartographer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            HELLO! Welcome to my personal website and check out my applications below!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/williameyey"><AiFillTwitterCircle /> </a>
              <a href="https://www.linkedin.com/in/wenfeng-huang-14369323a/"><AiFillLinkedin /></a>
              <a href="https://github.com/WilliamHuang711"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={personal} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            In 2021, I received my BS in <span className="text-teal-500">Geography and GIST </span> at UC Berkeley; 
            After I graduated from UCB, I started to learn something that I never try before,
            such as to be a part-time hair colorist, traders buy and sell stocks to get a short-term profit
            and currently finishing my <span className="text-teal-500">Full Stack Web Developer’s certification </span>
            at UC Berkeley Extension.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            My Favorite Quote: Try and fail, but don't fail to try.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">

              <h3 className="text-lg font-medium pt-8 pb-2  ">
                GIS Analyst
              </h3>
              <p className="py-2">
              Using mapping software to analyze spatial data and design digital maps
              </p>
              <h4 className="py-4 text-teal-600">Mainly Use Tools</h4>
              <p className="text-gray-800 py-1">ArcMap/Pro</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Cartographer
              </h3>
              <p className="py-2">
              Collect and interpret geographic information in order to 
              create and update maps and charts for specific purposes.
              </p>
              <h4 className="py-4 text-teal-600">Mainly Use Tools</h4>
              <p className="text-gray-800 py-1">ArcMap/Pro</p>
              <p className="text-gray-800 py-1">ENVI</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 ">Web Developer</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Mainly Use Tools</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://williamhuang711.github.io/Homework3/">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/WilliamHuang711/HomeWork04">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/WilliamHuang711/Work-Day-Scheduler">
              <Image
                
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://williamhuang711.github.io/WeatherDashboard/">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://gentle-reef-64843.herokuapp.com/">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/WilliamHuang711/Employee-Tracker">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
               </a>
            </div>
           
          </div>
        </section>

        <section className="py-10">
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">Cartographer Protfolio</h3>
          
          </div>
          {/* <div className=" flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web7}
              />
            </div>
            <div className=" flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web8}
              />
            </div> */}
            <div className=" flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
        </section>


        <footer className="flex justify-center">

      <br />
      
      <p className=" dark:text-white">William Huang © 2022</p>

    </footer>

      </main>


    </div>
    </div>
  )
}
