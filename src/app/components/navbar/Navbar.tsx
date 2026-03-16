'use client'
import Link from 'next/link'
import ModeToggle from './ModeToggle'
import { BellIcon, CircleUserRound, Home, PersonStanding } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <div className='w-full h-18 border border-gray-600 flex items-center justify-between px-16'>
     
     {/* MOST LEFT */}
     <Link href={"/"} className='font-bold italic text-2xl'>Socially</Link>

     {/* CENTER */}
     <div className='px-14 flex flex-row gap-10'>
     
      <div className='gap-2 flex flex-row justify-center items-center'><Home className='size-5' /> Home</div> 
      <Link href={"/notifications"} className='gap-2 flex flex-row justify-center items-center'><BellIcon className='size-5' /> Notifications</Link> 
      <Link href={"/profile"} className='gap-2 flex flex-row justify-center items-center'><CircleUserRound className='size-5' /> Profile</Link> 
     </div>

     {/* MOST RIGHT */}
     {/* <div> */}

   <div>

       <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
   <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone. </SheetDescription>
      <ModeToggle />
    </SheetHeader>
  </SheetContent>
</Sheet>
   </div>
  

    </div>
  )
}

export default Navbar