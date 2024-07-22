import Image from "next/image";
import Link from 'next/link';








export default function Home() {
return (
  <main>

    <div className="min-h-screen bg-[#FFF9F4]">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-cursive text-[#FFB830]">FoodHouse</div>
        <nav>
          <ul className="flex space-x-12 text-[20px] gap-[30px] my-[42px]" >
            <li><Link href="/" className="text-[#FFB830]">HOME</Link></li>
            <li><Link href="/restaurant" className="text-gray-500">RESTAURANT</Link></li>
            <li><Link href="/services" className="text-gray-500">SERVICES</Link></li>
            <li><Link href="/cart" className="text-gray-500">CART</Link></li>
          </ul>
        </nav>
        <button className="text-gray-500 text-[23px] mr-[53px]">Sign In</button>
      </header>




      <main className="container mx-auto px-4 py-12 flex">
        <div className="w-1/2 pr-9 my-[100px]">
          <h1 className="text-6xl font-bold mb-4">
            Enjoy Delicious<br />
            Food in <span className="text-[#FFB830]">Helthy Life</span>
          </h1>
          <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
            Tandoori masala is an Indian spice blend consisting of a
            variety of spices Tandoori masala is an Indian spice blend
            consisting of a variety of spices
          </p>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg">
            ORDER NOW
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/chicken.png"
            alt="Grilled Chicken"
            width={700}
            height={11}
            className="rounded-full"
          />




        </div>
      </main>
    </div>



    <div className="font-bold  mt-8 text-center text-[45px]">
      <p className="italic">Online store</p>
      <h1 className="font-bold text-center text-[45px]">Popular Foods  </h1>
      <div className="border-b-4 border-yellow-400 w-20 mx-auto mb-12"></div>
    </div>




    <div className="flex ml-[100px] my-[43px] ">
      <div className="w-1/2 relative text-centre">
        <Image
          src="/grill.jpg"
          alt="Roasted Chicken"
          width={300}
          height={4}
          className="rounded-full"




        />
        <p className="text-[30px] font-medium ml-[54px] " >Fruit Dish</p>
        <br />
        <p className="ml-[74px] font-light">Dinko Food</p>
        <br />
        <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;</p>
        <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
          Add to cart  $ 678
        </button>








      </div>
      <div className="w-1/2 relative ml-[73px] ">
        <Image
          src="/Dinko.jpg"
          alt="sea food"
          width={300}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
        <br />
        <p className="ml-[74px] font-light">Dinko Food</p>
        <br />
        <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;</p>
        <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
          Add to cart  $ 678
        </button>




      </div>
      <div className="w-1/2 relative">
        <Image
          src="/raw.jpg"
          alt="Sea food"
          width={300}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
        <br />
        <p className="ml-[74px] font-light">Dinko Food</p>
        <br />
        <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;</p>
        <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
          Add to cart  $ 678
        </button>j




      </div>




      <div className="w-1/2 relative">
        <Image
          src="/pizza.jpg"
          alt="Pizza"
          width={300}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
        <br />
        <p className="ml-[74px] font-light">Dinko Food</p>
        <br />
        <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;</p>
        <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
          Add to cart  $ 678
        </button>

      </div>
    </div>





    <div className="min-h-screen bg-[#FFF9F4]">
  
      <main className="container mx-auto px-4 py-12 flex">
        <div className="w-1/2 pr-9 my-[100px]">
          <h1 className="text-6xl font-bold mb-4">
            Our Special Offer
          </h1>
          <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
            Best cooks and best delivery guys at your service. Hot tasty food will
            reach you in 60 minutes.
          </p>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg">
            See All Menu
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/rice.png"
            alt="Rice and Steak"
            width={700}
            height={11}
            className="rounded-full"
          />




        </div>
      </main>
    </div>








    <div className="font-bold  mt-8 text-center text-[45px]">
      <p className="italic">Online store</p>
      <h1 className="font-bold text-center text-[45px]">Popular Foods  </h1>
      <div className="border-b-4 border-yellow-400 w-20 mx-auto mb-12"></div>








    </div>
    <div className="text-center pt-10">
    <h6>Quality Food</h6>
    <h1 className="font-extrabold text-6xl pt-10">Get The Best Offers</h1>
    <p className="pt-10 text-3xl">Rhe food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
    </div>
    <div className="flex  pl-80 gap-80 ">
       <div className="flex ">
         <div className="pt-20">
           <h2>Any day offers</h2>
           <p>New phenomenon <br/> Burger taste</p>
           <p>$12.90</p>
           </div>
           <div>
           <Image  src="/hamburger.jpg"
            alt="Sandwich"
            width={300}
            height={5}
            className="rounded-full"/>
           </div>
       </div>
       <div className="flex" >
         <div className="pt-20">
           <h2>Other flavors</h2>
           <p>Save room. <br/> We madesalats</p>
           <p>$12.90</p>
           </div>
           <div>
           <Image  src="/salad.jpg"
            alt="Salad"
            width={300}
            height={5}
            className="rounded-full"/>
           </div>
       </div>
       <div className="flex">
         <div className="pt-20">
           <h2>Find a poco <br/> store near you</h2>
           <p>$12.90</p>
           </div>
           <div className="image">
         <Image  src="/location.jpg"
            alt="Map Pinned location"
            width={300}
            height={5}
            className="rounded-full"/>
           </div>
       </div>
      </div>
  


      <div className="flex ml-[100px] my-[43px] ">
      <div className="w-1/2 relative text-centre">
        <Image
          src="/home.png"
          alt="Restuarants"
          width={150}
          height={11}
          className="rounded-full"




        />
        <p className="text-[30px] font-medium ml-[54px] " >55+ Restaurants</p>
        <br />
        </div>
      <div className="w-1/2 relative ml-[73px] ">
        <Image
          src="/setting.png"
          alt="Roasted Chicken"
          width={150}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Good Quality</p>
        <br />
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/delivery.png"
          alt="Roasted Chicken"
          width={200}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Discount system</p>
        <br />
        </div>




      <div className="w-1/2 relative">
        <Image
          src="/scooter.png"
          alt="Roasted Chicken"
          width={200}
          height={11}
          className="rounded-full"
        />
        <p className="text-[30px] font-medium ml-[64px] " >Fast Delivery</p>
        <br />
       </div>
    </div>


    <main className="container mx-auto px-4 py-12 flex">


    <div className="w-1/2 relative">
          <Image
            src="/phoneapp.jpeg"
            alt="Roasted Chicken"
            width={400}
            height={11}
          
          />




        </div>
        <div className="w-1/2 pr-9 my-[100px]">
          <h1 className="text-6xl font-bold mb-4">
            Enjoy Delicious<br />
            Food in <span className="text-[#FFB830]">Helthy Life</span>
          </h1>
          <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
            Tandoori masala is an Indian spice blend consisting of a
            variety of spices Tandoori masala is an Indian spice blend
            consisting of a variety of spices
          </p>
          <div className="flex">
        <Image
        src="/appstore2.png"
        alt="play store"
        width={250}
        height={8}
         />
        <Image
        src="/googleplay.png"
        alt=""
        width={250}
        height={8}
        />
        </div>
        </div>
       
      </main>


      <div className="flex gap-80 pl-60">


       <div>
         <h1>
           Subscribe our newsletter
         </h1>
         <p>
           Subscribe on our newsletter to get our <br />
           news
         </p></div>


         <div>
           <input type="email" name="email" placeholder="Your email address"/>
           <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px]">
         Subscribe
        </button>
         </div>


      </div>




    <footer className="bg-[#1a0f0f] text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
          <p className="text-sm text-gray-400 mb-4">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </p>
          <div className="flex space-x-4">
          
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Career</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Press Info</Link></li>
            <li><Link href="#">Features</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Fudo</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Why Fudo</Link></li>
            <li><Link href="#">How it Works</Link></li>
            <li><Link href="#">Why Choose Us</Link></li>
            <li><Link href="#">Client Stories</Link></li>
            <li><Link href="#">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Breakfast</Link></li>
            <li><Link href="#">Lunch</Link></li>
            <li><Link href="#">Dinner</Link></li>
            <li><Link href="#">Fast Foods</Link></li>
            <li><Link href="#">Drinks</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-yellow-400 py-4 text-center text-[#1a0f0f]">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <p className="color-white">Copyright 2021 Besnik All Right Reserved</p>
        <div className="space-x-4">
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Security</Link>
        </div>
      </div>
    </div>
  </footer>








  </main>
);
}






