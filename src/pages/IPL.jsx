import React from 'react'
import img1 from '../images/ipl/ipl.webp'
import img2 from '../images/ipl/ss1.webp'
import img3 from '../images/ipl/viacom.png'
import {Link} from 'react-router-dom'
export default function BlogsPage5() {
  return (
    <div>
      <>
            <div className="bg-gray-900 py-12 px-36 lg:py-20">
            <Link to= "/back" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" >&larr; Home</Link>
                <div className="py-8">
                    <h1 className="text-white text-6xl text-center font-bold pb-12">IPL-Case Study</h1>
                    <p className="text-right italic">Published on 30 May 2023</p>
                </div>
                
                <div className="lg:flex lg:flex-row-reverse w-full">
                <div className="w-full lg:w-2/6 lg:px-16">
                        <img src={img1} className="w-full py-24 md:py-32"></img>
                    </div>
                    <div className="lg:w-3/5 pb-12 text-2xl pb-8">
                    {/* <h1 className="text-white text-4xl font-bold pb-4">Origin</h1> */}
                        <p>IPL is a profitable venture started back in 2008 by BCCI. And now it has become a money making machine for the organization. Let us have a look at the Brand value of IPL and the earnings of BCCI through IPL.
                         </p><p> Last Year Viacom 18 in the month of June won the IPL's digital media rights for Rs 23,758 crore, while Star India grabbed India TV rights for 23,575 crore in a SAIA five-year deal. vive Camera & Musk Cantera & Music vivo Camera </p>
                    
                    </div>
                </div>
                <div className="lg:flex w-full">
                <div className="lg:w-2/6 flex-column justify-center items-center m-auto">
                        <img src={img2} className="w-full"></img>
                    </div>
                <div className="lg:w-3/5 text-2xl pb-8">
                <h1 className="text-white text-4xl font-bold pb-12">Business Model</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, inventore maiores praesentium eius pariatur et blanditiis amet laboriosam voluptas tempora sint recusandae fugit odio quasi. Maiores eaque eveniet sunt accusamus!</p>
                             
                        
                    
                    </div>

                </div>
                <div className="lg:flex lg:flex-row-reverse w-full">
                <div className="w-full lg:w-2/3 lg:px-16">
                        <img src={img3} className="w-full py-24 md:py-32"></img>
                    </div>
                    <div className="lg:w-3/5 pb-12 text-2xl pb-8">
                    <h1 className="text-white text-4xl font-bold pb-4">Revenue</h1>
                    <ul className ="text-white list-disc">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi cumque fugiat.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus nostrum hic.</li>
                        </ul>
                    <h1 className="text-white text-4xl font-bold pb-4">Growth</h1>
                    <ul className ="text-white list-disc">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi cumque fugiat.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus nostrum hic.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus nostrum hic.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus nostrum hic.</li>
                        </ul>
                    
                    </div>
                </div>
                <div className="pb-12 text-2xl pb-8">
                    <h1 className="text-white text-4xl font-bold pb-4">Advertising Strategy</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure dicta sequi quis beatae obcaecati. Ea quaerat labore 
                            accusantium beatae voluptatum, voluptate temporibus porro 
                            iusto accusamus libero, nam maxime optio alias. Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Earum, amet.
                             Officia vero nihil, itaque, officiis ratione possimus alias 
                             vitae nam sed quisquam id maiores, dolorum quod unde eos 
                             repudiandae similique.</p>
                    
                    </div>
                
            </div>
        </>
    </div>
  )
}
