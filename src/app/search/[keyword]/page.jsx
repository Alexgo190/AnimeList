import { getAnimeResponse } from "@/api/api"
import Animelist from "@/components/Animelist"
import Header from "@/components/Animelist/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  )
}

export default Page
