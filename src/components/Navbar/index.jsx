import Link from "next/link"
import Input from "./Input"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4 ">
        <Link href={"/"} className="font-bold text-2xl">
          ANIMELIST
        </Link>
        <Input />
        <UserActionButton />
      </div>
    </header>
  )
}

export default Navbar
