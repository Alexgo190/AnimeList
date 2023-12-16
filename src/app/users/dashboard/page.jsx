import Link from "next/link"
import { authUserSession } from "../../../libs/auth.libs"
import Image from "next/image"

const Page = async () => {
  const user = await authUserSession()

  return (
    <div>
      {user ? (
        <div className="mt-8 flex flex-col justify-center items-center">
          <h5 className="text-color-primary  text-2xl font-bold">
            Welcome,{user.name}
          </h5>
          <Image src={user.image} alt="..." width={250} height={250} />
          <div className="flex gap-4 flex-wrap py-8 ">
            <Link
              href={"/users/dashboard/collection"}
              className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
            >
              My Collection
            </Link>
            <Link
              href={"/users/dashboard/comment"}
              className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
            >
              Comment
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Link
            href={"/"}
            className=" text-color-dark bg-color-accent px-4 py-1 hover:text-color-primary transition-all"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  )
}

export default Page
