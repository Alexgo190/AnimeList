import { getAnimeResponse } from "@/api/api"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`)
  console.log(anime)

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 py-4 flex flex-wrap md:flex-nowrap gap-8 text-color-primary justify-center items-center">
        <div className="w-36  px-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>RANK</h3>
          <p className="p-2">{anime.data.rank}</p>
        </div>
        <div className="w-36  px-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>SCORE</h3>
          <p className="p-2">{anime.data.score}</p>
        </div>
        <div className="w-36  px-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>POPULARITY</h3>
          <p className="p-2">{anime.data.popularity}</p>
        </div>
        <div className="w-36  px-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>EPISODE</h3>
          <p className="p-2">{anime.data.episodes}</p>
        </div>
      </div>
      <div className=" pt-4 px-4 flex md:flex-nowrap flex-wrap gap-2 justify-center  text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
    </>
  )
}

export default Page
