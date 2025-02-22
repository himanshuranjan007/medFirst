import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  description: string
  rating: number
}

export function TestimonialCard({ name, role, image, quote, description, rating }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24">
            <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover"  className="rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">"{quote}"</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-muted" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

