import Animelist from "@/components/Animelist"
import Header from "@/components/Animelist/Header"
import { getAnimeResponse, getNestedAnimeResponse, render } from "../api/api"

// function shuffleAnime(anime) {
//   for (let i = anime.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[anime[i], anime[j]] = [anime[j], anime[i]]
//   }
// }

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  )

  recommendationAnime = render(recommendationAnime, 8)
  // shuffleAnime(recommendationAnime)
  // recommendationAnime = { data: recommendationAnime.slice(0, 8) }
  // console.log(recommendationAnime)

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkHref={"/popular"}
          linkTitle={"Lihat Semua"}
        />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} linkHref={"/popular"} />
        <Animelist api={recommendationAnime} />
      </section>
    </>
  )
}

export default Page
