"use client"
import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center gap-4 flex-col">
      <FileSearch size={64} className="text-color-accent" />
      <h1 className="text-color-accent text-4xl font-bold">Not Found</h1>
      <button
        onClick={() => router.back()}
        className="text-color-dark bg-color-accent px-4 py-1 hover:text-color-primary transition-all"
      >
        Back
      </button>
    </div>
  )
}

export default NotFound
