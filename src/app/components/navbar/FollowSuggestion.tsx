import React from 'react'
import UserImage from '../UserImage'

const FollowSuggestion = () => {
  return (
    <div>

    
     {/* RIGHT BOX: "Who to Follow" */}
{/* <div className="order-1 lg:order-3 w-full lg:w-[25%] border border-gray-600 rounded-xl p-6 self-start bg-card"> */}
  <h2 className="text-xl font-bold mb-4">Who to Follow</h2>
  
  <div className="space-y-6">
    {/* User Suggestion Row */}
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="h-11 w-11 rounded-full flex-shrink-0">
          <UserImage />
        </div>
        
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
// </div>

  )
}

export default FollowSuggestion