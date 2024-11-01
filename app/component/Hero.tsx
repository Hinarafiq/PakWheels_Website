export default function Hero () {
    return (
    
        <div className=" h-96 w-9/12 p-14 m-24">
          <h1 className="font-extrabold text-black text-center">Sell Your Car on PakWheels and Get the Best Price</h1><br />
          <div className="flex justify-evenly pl-16">
               <div className="white w-96 h-72">
                  <h1 className="text-blue-700 font-bold ">Post your Ad on PakWheels
                  </h1> <br />
                  <ul>
                    <li>Post your Ad for Free in 3 Easy Steps</li>
                    <li>Get Genuine offers from Verified Buyers</li>
                    <li>Sell your car Fast at the Best Price</li>
                  </ul>
                  <button className="bg-red-700 font-bold text-white rounded-md border-solid h-9 m-12 w-32">Post Your Ad</button>
               </div>

                <h1 className="font-extrabold m-10">OR</h1>

               <div className="white w-96 h-72">
                 <h1 className="text-blue-700 font-bold">Try PakWheels Sell It For Me
                 </h1> <br />
                 <ul>
                  <li>Dedicated Sales Expert to Sell your Car</li>
                  <li>We Bargain for you and share the Best Offer</li>
                  <li>We ensure Safe & Secure Transaction</li>
                 </ul>
                 <button className="bg-blue-700 font-bold text-white rounded-md border-solid m-12 h-9 w-36">Register Your Car</button>
               </div>
          </div>
        </div>
    )
}