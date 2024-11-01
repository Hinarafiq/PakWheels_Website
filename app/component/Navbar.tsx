import Image from "next/image"
export default function Navbar () {
    return(
        <div className="bg-black w-full h-28 px-10 py-2 ">
            <div className="text-white font-bold h-2">
              <p>Download app via SMS</p>
            </div>

            <div className="flex justify-end items-center pb-2 gap-5">
             <p className="text-red-600 font bold">Urdu |</p>
             <p className="text-white font-bold">Sign In |</p>
             <p className="text-white font-bold">Sign Out </p>
           </div>

         <hr />

          <div className=" flex justify-start items-center text-white ">
             <nav className="w-48 h-20 pt-2 ">
           <Image src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="logo" width="96" height="88" className="m-4" />
             </nav>

            <div className=" flex justify-evenly items-center tracking-widest font-bold w-4/5 pb-5">
             <div>Used Cars</div>
             <div>New Cars</div>
             <div>Bikes</div>
             <div>Auto Store</div>
             <div>Videos</div>
             <div>Forums</div>
             <div>Blog</div>
             <div>More</div>
            </div>
  
            <button type="submit" className="bg-red-700 font-bold rounded-md border-solid h-8 w-32 mb-5 ">Post an AD</button>
          </div>
       </div>
    )
} 