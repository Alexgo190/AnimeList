"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const InputComment = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const handleInput = (e) => {
    setComment(e.target.value)
  }

  const handleComment = async (e) => {
    e.preventDefault()

    const charCount = comment.split(/\s+/).join("").length
    console.log(charCount)

    if (charCount < 5) {
      setError("Komentar harus lebih dari 5 huruf")
      return
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title }
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const postComment = await response.json()
    if (postComment.isCreated) {
      setIsCreated(true)
      setComment("")
      setError("")
      router.refresh()
    }
    return
  }
  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Komentar berhasil</p>}
      {error && <p className="text-color-red font-bold text-xl">{error}</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-xl p-2"
      />
      <button
        onClick={handleComment}
        className="py-2 px-3 bg-color-accent w-52"
      >
        Comment
      </button>
    </div>
  )
}

export default InputComment
