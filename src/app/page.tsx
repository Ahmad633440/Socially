import { Image, Link, LocateIcon, Mail, MapIcon, MapPin } from "lucide-react";





export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen gap-6 p-6 box-border">
  

  {/* LEFT BOX (Profile): HIDDEN on mobile, LEFT on desktop */}
  <div className="hidden lg:block lg:order-1 lg:w-[25%] h-[600px] border border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center justify-center py-12 gap-4">

    <div className="h-20 w-20 bg-red-600 rounded-full"></div>    
    <div className="text-lg font-extrabold">Your Name</div>    
    <div className="text-gray-300">Your Name</div>    
    <div className="text-gray-300">Software Engineer @google</div>    

    <div className="border-b-2 border-t-2 w-full flex flex-row m-4 justify-between items-center h-16 p-7">
      <div className="flex-col flex justify-center items-center text-gray-400"><p className="text-white font-extrabold">2</p> Following</div>
      <div className="flex-col flex justify-center items-center text-gray-400"><p className="text-white font-extrabold">8</p> Followers</div>
    </div>

    <div className="gap-4">
      <div className="flex flex-row gap-2 text-gray-400"><MapPin size={16}/> Pakistan</div>
      <div className="flex flex-row gap-2 text-gray-400"> <Link size={16}/> https://github.com/Ahmad633440</div> 
      
    </div>
    </div>
  </div>



 

{/* CENTER COLUMN: Vertical container for Input + Feed */}
<div className="order-2 lg:order-2 flex-1 flex flex-col gap-6 w-full">
  
  {/* TOP: "What's on your mind?" Box */}
  <div className="w-full border border-gray-600 rounded-xl p-6 bg-card">
    <div className="flex items-center gap-4 mb-4">
      {/* Profile Avatar Placeholder */}
      <div className="h-12 w-12 bg-red-600 rounded-full flex-shrink-0" />
      <input 
        type="text" 
        placeholder="What's on your mind?" 
        className="w-full bg-transparent border-none outline-none text-lg"
      />
    </div>
    
    <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
      <button className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-lg transition">
        <Image size={20} /> <span>Image</span>
      </button>
      <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold transition">
        Post
      </button>
    </div>
  </div>

  {/* BOTTOM: Posts / Remaining Height */}
  <div className="flex-1 w-full border border-gray-600 rounded-xl p-6 min-h-[500px]">
    <div className="">

    </div>
  </div>
    
</div>

  
  {/* RIGHT BOX: "Who to Follow" */}
<div className="order-1 lg:order-3 w-full lg:w-[25%] border border-gray-600 rounded-xl p-6 self-start bg-card">
  <h2 className="text-xl font-bold mb-4">Who to Follow</h2>
  
  <div className="space-y-6">
    {/* User Suggestion Row */}
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="h-11 w-11 bg-red-600 rounded-full flex-shrink-0" />
        
        {/* Info */}
        <div className="flex flex-col">
          <p className="font-bold text-sm hover:underline cursor-pointer">Jane Doe</p>
          <p className="text-gray-400 text-xs truncate w-32">Software Engineer @Meta</p>
        </div>
      </div>

      {/* Action - Changed from "Post" to "Follow" */}
      <button className="bg-white text-black hover:bg-gray-200 px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95">
        Follow
      </button>
    </div>

    {/* Repeat this block for more users */}
  </div>
</div>

</div>
  );
}
