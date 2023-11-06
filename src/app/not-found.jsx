"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center gap-4 flex-col">
      <FileSearch size={64} className="text-color-accent" />
      <h1 className="text-color-accent text-4xl font-bold">Not Found</h1>
      <Link
        href={"/"}
        className="text-color-dark bg-color-accent px-4 py-1 hover:text-color-primary transition-all"
      >
        Home
      </Link>
    </div>
  )
}

export default NotFound
