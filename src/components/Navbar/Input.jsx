"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const Input = () => {
  let searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    let keyword = searchRef.current.value
    if (!keyword || keyword.trim() === "") {
      return
    }
    // if (!keyword) return
    router.push(`/search/${keyword}`)
    searchRef.current.value = ""
  }
  return (
    <div>
      <form action="" className="relative" onSubmit={handleSearch}>
        <input
          placeholder="Cari anime ..."
          className="w-full p-2 rounded"
          ref={searchRef}
        />
        <button
          className="absolute top-2 end-2"
          onClick={handleSearch}
          type="submit"
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  )
}

export default Input
