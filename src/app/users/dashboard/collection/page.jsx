import React from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../../../../components/Dashboard/Header"
import prisma from "../../../../libs/prisma"
import { authUserSession } from "../../../../libs/auth.libs"

const Page = async () => {
  const user = await authUserSession()

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  })

  return (
    <section className="mt-4 px-4 w-full h-screen flex flex-col">
      <Header title="Koleksi Saya" />
      <div className="overflow-hidden">
        {collection.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collection.map((collect, key) => (
              <Link
                key={key}
                href={`/anime/${collect.anime_mal_id}`}
                className="relative"
              >
                <Image
                  src={collect.anime_image}
                  alt=""
                  width={150}
                  height={150}
                  className="w-full"
                />
                <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                  <h5 className="text-xl text-center ">
                    {collect.anime_title}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <Image
              src={"/6028969.jpg"}
              alt="Empty Collection"
              width={300}
              height={300}
              className=""
            />
            <p className="text-color-primary mt-4">
              Saat ini belum ada koleksi
            </p>
            <Link
              href="/"
              className="text-color-dark hover:text-color-primary py-2 px-5 bg-color-accent"
            >
              Kembali ke Halaman Utama
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Page
