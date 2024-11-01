import Link from "next/link"
import Image from "next/image"
export default function Featured () {
       return (
        <div className="bg-gray-300 w-full h-96">

            <div className="flex justify-between px-10 py-2">
                <p className="font-bold text-gray-700">Featured New Cars</p>
                <p className="text-blue-600">View All New Cars</p>
            </div>

            <div className="flex gap-5 px-10 py-2">
                <p className="font-bold"><u>Popular</u></p>
                <p>Upcoming</p>
                <p>Newly Launched</p>
            </div>

            <div className="flex justify-between px-10 py-2">
               <div className="bg-white border border-solid border-black rounded-md w-56 h-56">
                <Link href="/Toyota_Corolla">
                    <Image src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Toyota Corolla" width="200" height="96"/>
                     <p className="flex justify-center font-bold ">Toyota Corolla</p>
                     <p className="flex justify-center text-green-500 ">PKR 59.7 - 75.5 lacs</p>
                 </Link>    
                </div>
                <div className="bg-white border border-solid border-black rounded-md w-56 h-56">
                 <Link href="/SuzukiAlto">
                    <Image src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100" alt="Suzuki Alto" width="200" height="96"/>
                    <p className="flex justify-center font-bold">Suzuki Alto</p>
                    <p className="flex justify-center text-green-500 ">PKR 23.3 - 30.5 lacs</p>
                 </Link>
                </div>
                <div className="bg-white border border-solid border-black rounded-md w-56 h-56">
                  <Link href="/Honda_City">
                    <Image src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="Honda City" width="200" height="96" />
                    <p className="flex justify-center font-bold">Honda City</p>
                    <p className="flex justify-center text-green-500">PKR 46.5 - 58.5 lacs</p>
                  </Link>
                </div>
                <div className="bg-white border border-solid border-black rounded-md w-56 h-56">
                  <Link href="/HondaCivic">
                    <Image src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="Honda Civic" width="200" height="96"/>
                    <p className="flex justify-center font-bold">Honda Civic</p>
                    <p className="flex justify-center text-green-500">PKR 86.6 - 99.0 lacs</p>
                  </Link>
                </div>
            </div>
        </div>
       )
}