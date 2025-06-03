"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { User } from "@/components/auth/auth-provider"

interface UserAvatarProps {
  user: User | null
  className?: string
  size?: "sm" | "md" | "lg"
}

export function UserAvatar({ user, className, size = "md" }: UserAvatarProps) {
  // 根据size确定尺寸
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-20 w-20",
  }

  const sizeClass = sizeClasses[size]

  return (
    <Avatar className={`${sizeClass} ${className || ""}`}>
      <AvatarImage src={user?.avatar || "/placeholder.svg?height=40&width=40"} alt={user?.name || "用户头像"} />
      <AvatarFallback className="bg-primary/10">{user?.name ? user.name.charAt(0).toUpperCase() : "U"}</AvatarFallback>
    </Avatar>
  )
}
