import Link from "next/link"
export default function Forms(){
    return(
        <div>
            <h1 className="text-6xl font-bold text-blue-700 text-center uppercase mt-8">Enter Your Details</h1>
            
            <div>
            <form className="flex mt-8 gap-5 flex-col justify-center items-center">

                <input type="text" className="p-2 border border-blue-950 w-2/5 rounded-2xl" placeholder="Enter Your Name" />
                <input type="email" className="p-2 border border-blue-950 w-2/5 rounded-2xl" placeholder="Enter Your Email" />
                <input type="number" className="p-2 border border-blue-950 w-2/5 rounded-2xl" placeholder="Enter Your Card Number" />
                <input type="text" className="p-2 border border-blue-950 w-2/5 rounded-2xl " placeholder="Enter Your Address" />

                <Link href="/ThankYou"><button className="py-5 px-2 bg-blue-700 text-white rounded-lg mb-8">Place Your Order</button></Link>
            </form>
            </div>
        </div>
    )
}