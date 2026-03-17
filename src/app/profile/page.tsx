'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Globe, Twitter, Edit2, Check, X, Camera } from "lucide-react"
import UserImage from '../components/UserImage'
import { Input } from '../components/Input'

const ProfilePage = () => {
  // 1. STATE MANAGEMENT
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: "ahmad_dev",
    employment: "Software Engineer @Google",
    github: "https://github.com/Ahmad633440",
    linkedin: "",
    twitter: "",
    website: ""
  })
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  // 2. HANDLERS
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-12 min-h-screen text-white">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 border-b border-gray-800 pb-10">
        {/* Dynamic Size: h-24 on mobile, h-40 on desktop */}
        <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
  {/* The Image Component */}
  <UserImage 
    src={profileImage || "/default-avatar.png"} 
    className="h-24 w-24 lg:h-40 lg:w-40 ring-4 ring-green-400 transition-opacity group-hover:opacity-75" 
  />
  
  {/* The "Change" Overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="bg-black/50 p-3 rounded-full">
      <Camera className="text-white" size={24} />
    </div>
  </div>

  {/* Hidden Input Field */}
  <input 
    type="file" 
    ref={fileInputRef} 
    onChange={handleImageChange} 
    className="hidden" 
    accept="image/*" 
  />
</div>
        
        <div className="flex-1 text-center lg:text-left space-y-3">
          <h1 className="text-4xl font-extrabold text-white">Ahmad Ali</h1>
          <p className="text-gray-400 text-lg">@{profile.username}</p>
          
          <Button 
            variant={isEditing ? "destructive" : "outline"} 
            onClick={() => setIsEditing(!isEditing)}
            className="mt-2"
          >
            {isEditing ? <><X className="mr-2 h-4 w-4" /> Cancel</> : <><Edit2 className="mr-2 h-4 w-4" /> Edit Profile</>}
          </Button>
        </div>
      </div>

      {/* INFO & LINKS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        
        {/* LEFT COLUMN: IDENTITY */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-l-4 border-green-400 pl-3">General Info</h3>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Username</label>
            {isEditing ? (
              <Input name="username" value={profile.username} onChange={handleChange} className="bg-gray-900 border-gray-700 focus:ring-green-400" />
            ) : (
              <p className="text-lg bg-gray-900/50 p-3 rounded-md">@{profile.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Current Role</label>
            {isEditing ? (
              <Input name="employment" value={profile.employment} onChange={handleChange} className="bg-gray-900 border-gray-700" />
            ) : (
              <p className="text-lg bg-gray-900/50 p-3 rounded-md">{profile.employment}</p>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: LINKS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-l-4 border-blue-400 pl-3">Professional Links</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Github className="text-gray-400 shrink-0" size={20} />
              {isEditing ? (
                <Input name="github" value={profile.github} onChange={handleChange} placeholder="GitHub URL" className="bg-gray-900 border-gray-700" />
              ) : (
                <a href={profile.github} target="_blank" className="text-blue-400 hover:underline truncate">{profile.github || "Not set"}</a>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="text-gray-400 shrink-0" size={20} />
              {isEditing ? (
                <Input name="linkedin" value={profile.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="bg-gray-900 border-gray-700" />
              ) : (
                <a href={profile.linkedin} target="_blank" className="text-blue-400 hover:underline truncate">{profile.linkedin || "Not set"}</a>
              )}
            </div>
            {/* Add Twitter/Website similarly */}
          </div>
        </div>
      </div>

      {/* SAVE BUTTON (Only shown when editing) */}
      {isEditing && (
        <div className="flex justify-end mt-6">
          <Button className="bg-green-500 hover:bg-green-600 px-10 py-6 text-lg font-bold" onClick={() => setIsEditing(false)}>
            <Check className="mr-2" /> Save Changes
          </Button>
        </div>
      )}
    </div>
  )
}

export default ProfilePage