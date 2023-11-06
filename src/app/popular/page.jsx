"use client"
import Animelist from "@/components/Animelist"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import React, { useEffect, useState } from "react"
import { getAnimeResponse } from "../../api/api"

const page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler Halaman #${page}`} />
      <Animelist api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  )
}

export default page
