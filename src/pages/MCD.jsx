import React from "react";
import img1 from "../images/mcd/Ray_Kroc.png";
import img2 from "../images/mcd/burgers.png";
import {Link} from 'react-router-dom'
import "../css/Blogs.css"

export default function BlogsPage() {
  return (
    <>
      <div className="bg-gray-900 py-12 px-36 lg:py-20">
      <Link to= "/"  ><button>Home</button></Link>        
      <div className="py-8">
          <h1 className="text-white text-6xl text-center font-bold pb-12">
            Detangling Mcdonalds...
          </h1>
          <p className="text-right italic">Published on 15 May 2023</p>
        </div>

        <div className="lg:flex lg:flex-row-reverse w-full">
          <div className="w-full lg:w-2/5 lg:px-16">
            <img src={img1} className="w-full py-24 md:py-32"></img>
          </div>
          <div className="lg:w-3/5 pb-12 text-2xl pb-8">
            <h1 className="text-white text-4xl font-bold pb-4">History</h1>
            <p>
              Ray Kroc opened his first McDonald's restaurant in Des Plaines,
              Illinois, in 1955. It's one of the world's largest fast-food
              restaurant chains. Did you know that Ray Kroc was not the founder
              of McDonald's? The founders were the McDonald brothers. The very
              first McDonald's restaurant was opened by New Hampshire brothers
              Richard and Maurice McDonald on May 15, 1940, in San Bernardino,
              California. The McDonald brothers started by serving slow-cooked
              barbecue, and the business took off quickly.
            </p>
            <h1 className="text-white text-4xl font-bold pb-12">
              Business Model
            </h1>
            <ul className="text-white list-disc">
              <li>
                Leverages fast food to franchisees who lease properties at given
                McDonald-owned locations and pay a fixed rent for the location.
              </li>
              <li>93% of world McDonald's locations are franchises</li>
              <li>
                Due to impressive margins, these franchisees are guaranteed
                money makers.
              </li>
              <li>
                McDonald's is committed to growth sticking to its three growth
                accelerators-EOTF, delivery, and digital.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex w-full">
          <div className="lg:w-2/5 flex-column justify-center items-center m-auto">
            <img src={img2} className="w-full"></img>
          </div>
          <div className="lg:w-3/5 text-2xl pb-8">
            <h1 className="text-white text-4xl font-bold pb-4">
              Revenue, Number of Branches
            </h1>
            <p>Number of Restaurants - 38000</p>
            <p> Customers served per day - 68 Million</p>
            <p> Brand Value - $40 billion</p>
            <p>
              McDonalds Keeps 82% of the revenue generated by franchisees and
              16% from the company- operated locations further trimmed by the
              operating costs of this unit. IITINDORE
            </p>
            <h1 className="text-white text-4xl font-bold pb-4">Growth Plan</h1>
            <p>
              The Velocity Growth Plan, which was first introduced in 2017, is
              McDonald's customer- centric strategy that focuses on the key
              drivers of the business, namely food, value, and customer
              experience. So,the next time you munch on your burger while
              relishing some fries alongside, do realize that a small idea
              coupled with perseverance can go a long way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
