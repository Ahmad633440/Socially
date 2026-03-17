import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils" 

interface UserImageProps {
  src?: string;
  fallback?: string;
  className?: string; // For custom sizes
}

const UserImage = ({ src, fallback = "U", className }: UserImageProps) => {
  return (
    <Avatar className={cn("h-12 w-12 border border-gray-600", className)}>
      <AvatarImage src={src} alt="User profile" className="object-cover" />
      <AvatarFallback className="bg-blue-600 text-white">
        {fallback}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserImage