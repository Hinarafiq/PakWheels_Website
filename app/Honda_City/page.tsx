import Link from "next/link"
import Image from "next/image"
export default function Honda_City () {
    return (
      <div className=" bg-blue-100 w-full h-full">
         <h1 className="flex justify-center items-center font-bold pt-5">Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
         <hr className="text-black" />

        <div className="flex justify-center items-center">
            <Image src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945" 
            alt="Image Of Honda City" width="200" height="96" className=" mt-3"/>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-blue-600 font-bold text-white rounded-md border-solid border-black border h-9 m-12 w-48">Book A Test Drive</button>
            <button className="bg-white font-bold text-blue-600 rounded-md border-solid border-black border h-9 m-12 w-56">Request Bank Finance</button>
            <button className="bg-white font-bold text-blue-600 rounded-md border-solid border-black border h-9 m-12 w-32">Visit Place</button>
            <button className="bg-white font-bold text-blue-600 rounded-md border-solid border-black border h-9 m-12 w-32">Car Inspection</button>
        </div>

         <h1 className="font-bold flex justify-center items-center">Vehcile Description</h1>
        
         <p className="flex justify-center items-center gap-6"><b>Number of doors:</b>4 <b>Condition:</b>8.5/10 <b>Driven:</b> 9,500 KM <b>Suspension Type:</b>Soft Type </p>
         <p className="flex justify-center items-center gap-6"><b>Average:</b>13 Km per Ltr <b>Transmission:</b>Automatic <b>Fuel Type:</b>High Octane</p>
   
         <h1 className="flex justify-center items-center font-medium text-green-500">PKR 5,050,000</h1>
        <div className="flex justify-center items-center">
          <Link href="/Form"><button className=" bg-blue-600 font-bold text-white rounded-md border-solid border-black border h-9 m-12 w-48">Make Payment</button></Link>
        </div>
     </div>
    )
}