"use client"

import YouTube from "react-youtube"
import React, { useState } from "react"

const VideoPlayer = ({ youtubeID }) => {
  const option = {
    width: "380",
    height: "250",
  }

  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeID}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is not available now")}
        />
      </div>
    )
  }

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="rounded fixed bottom-10 text-lg right-5 w-32 bg-color-accent text-color-dark hover:text-color-primary transition-all"
        onClick={handleVideoPlayer}
      >
        Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
