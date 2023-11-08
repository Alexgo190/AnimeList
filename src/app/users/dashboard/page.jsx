import Link from "next/link"
import { authUserSession } from "../../../libs/auth.libs"
import Image from "next/image"

const Page = async () => {
  const user = await authUserSession()

  return (
    <div>
      {user ? (
        <div>
          <h3 className="text-color-primary">Dashboard</h3>
          <h5 className="text-color-primary">Welcome,{user.name}</h5>
          <Image src={user.image} alt="..." width={250} height={250} />
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
