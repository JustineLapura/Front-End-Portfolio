import Image from "next/image";
import React from "react";
import foodOne from "/public/OrderingAppImgs/food1.jpg";
import foodstrip from "/public/OrderingAppImgs/foodstrip.jpg";
import dessert from "/public/OrderingAppImgs/dessert.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards  */}
      <div className="rounded-xl relative">
        {/* Overlay  */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Suns's Out, BOGO&rsquo;s Out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={foodOne}
          alt="/"
        />
      </div>
      {/* Cards  */}
      <div className="rounded-xl relative">
        {/* Overlay  */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New restaurants </p>
          <p className="px-2">added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={foodstrip}
          alt="/"
        />
      </div>
      {/* Cards  */}
      <div className="rounded-xl relative">
        {/* Overlay  */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too &rsquo; Tasty Treats
          </p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={dessert}
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;


// import Image from "next/image";
// import React from "react";
// import foodOne from "/public/OrderingAppImgs/food1.jpg";
// import foodstrip from "/public/OrderingAppImgs/foodstrip.jpg";
// import dessert from "/public/OrderingAppImgs/dessert.jpg";

// const HeadlineCards = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
//       {/* Cards  */}
//       <div className="rounded-xl relative">
//         {/* Overlay  */}
//         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
//           <p className="font-bold text-2xl px-2 pt-4">
//             Suns's Out, BOGO's Out
//           </p>
//           <p className="px-2">Through 8/26</p>
//           <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
//             Order Now
//           </button>
//         </div>
//         <Image
//           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
//           src={foodOne}
//           alt="/"
//         />
//       </div>
//       {/* Cards  */}
//       <div className="rounded-xl relative">
//         {/* Overlay  */}
//         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
//           <p className="font-bold text-2xl px-2 pt-4">New restaurants </p>
//           <p className="px-2">added daily</p>
//           <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
//             Order Now
//           </button>
//         </div>
//         <Image
//           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
//           src={foodstrip}
//           alt="/"
//         />
//       </div>
//       {/* Cards  */}
//       <div className="rounded-xl relative">
//         {/* Overlay  */}
//         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
//           <p className="font-bold text-2xl px-2 pt-4">
//             We Deliver Desserts Too{" "}
//           </p>
//           <p className="px-2">Tasty Treats</p>
//           <button className="border-white bg-white text-black mx-2 absolute bottom-4 border rounded-xl px-5 py-1">
//             Order Now
//           </button>
//         </div>
//         <Image
//           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
//           src={dessert}
//           alt="/"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeadlineCards;
