import { Image, Link, LocateIcon, Mail, MapIcon, MapPin } from "lucide-react";
import FollowSuggestion from "./components/navbar/FollowSuggestion";
import MindIdeaSharing from "./components/MindIdeaSharing";
import UserImage from "./components/UserImage";





export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen gap-6 p-6 box-border">
  

  {/* LEFT BOX (Profile): HIDDEN on mobile, LEFT on desktop */}
  <div className="hidden lg:block lg:order-1 lg:w-[25%] h-[600px] border border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center justify-center py-12 gap-4">

    <div className="h-20 w-20  rounded-full justify-items-center">
      <UserImage />
    </div>    
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
  <MindIdeaSharing />

  {/* BOTTOM: Posts / Remaining Height */}
  <div className="flex-1 w-full border border-gray-600 rounded-xl p-6 min-h-[500px]">
    <div >

    </div>
  </div>
    
</div>

   {/* */}
  {/* RIGHT BOX: "Who to Follow" */}
<div className="order-1 lg:order-3 w-full lg:w-[25%] border border-gray-600 rounded-xl p-6 self-start bg-card">
  <FollowSuggestion />
</div>



</div>
  );
}
