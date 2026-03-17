"use client"
import NextImage from 'next/image'
// Ensure your icon import looks like this to avoid conflict:
// import { Image as ImageIcon } from 'lucide-react'
import { Image, ImageIcon, X } from 'lucide-react'
import UserImage from './UserImage'
import { useRef, useState } from 'react'


const MindIdeaSharing = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>
  (null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hanldeImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const file = e.target.files?.[0];
    if (file){
      // Create a temporary URL for the preview
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div>
      <div className="w-full border border-gray-600 rounded-xl p-6 bg-card">
    <div className="flex items-center gap-4 mb-4">
      {/* Profile Avatar Placeholder */}
      <div className="h-12 w-12  rounded-full flex-shrink-0" ><UserImage /></div>
      <input 
        type="text" 
        placeholder="What's on your mind?" 
        className="w-full bg-transparent border-none outline-none text-lg"
      />
    </div>
    
  

    <div className="border-t border-gray-700 pt-4 flex items-center gap-4">
          {/* HIDDEN FILE INPUT */}
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef}
            onChange={hanldeImageChange}
          />
    
          {/* TRIGGER BUTTON (Not type="submit") */}
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-lg transition text-gray-300"
          >
            <ImageIcon size={20} /> 
            <span>Image</span>
          </button>
    
          {/* DYNAMIC PREVIEW AREA */}
          {selectedImage && (
            <div className="relative h-12 w-12 border border-gray-600 rounded-md overflow-hidden">
              <NextImage 
                src={selectedImage} 
                alt="Preview" 
                fill 
                className="object-cover" 
              />
              <button 
                onClick={removeImage}
                className="absolute top-0 right-0 bg-red-600 text-white p-0.5 rounded-bl-md hover:bg-red-700"
              >
                <X size={12} />
              </button>
            </div>
          )}
          
          {/* Spacer to push Post button to the right */}
          <div className="flex-1" />
    
          {/* ACTUAL SUBMIT BUTTON */}
          <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold transition">
            Post
          </button>
        </div>
    
  </div>

    </div>
  )
}

export default MindIdeaSharing


