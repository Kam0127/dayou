import Image from "next/image"
import Link from "next/link"

export default function CategoryList() {
  const categories = [
    {
      id: 1,
      name: "家具",
      image: "/RW1-new.jpg",
      count: 120,
    },
    {
      id: 2,
      name: "灯具",
      image: "/Yellow1-new.jpg",
      count: 85,
    },
    {
      id: 3,
      name: "文具",
      image: "/Red1-new.jpg",
      count: 150,
    },
    {
      id: 4,
      name: "包袋",
      image: "/Red2-new.jpg",
      count: 95,
    },
    {
      id: 5,
      name: "餐具",
      image: "/Red3-new.jpg",
      count: 110,
    },
    {
      id: 6,
      name: "饰品",
      image: "/RW3-new.jpg",
      count: 130,
    },
    {
      id: 7,
      name: "传统椅具",
      image: "/Red4-new.jpg",
      count: 45,
    },
    {
      id: 8,
      name: "现代座椅",
      image: "/Yellow4-new.jpg",
      count: 68,
    },
    {
      id: 9,
      name: "艺术家具",
      image: "/RW2-new.jpg",
      count: 32,
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="group flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-full">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <h3 className="font-medium text-center">{category.name}</h3>
          <p className="text-sm text-muted-foreground text-center">{category.count}个创意</p>
        </Link>
      ))}
    </div>
  )
}
