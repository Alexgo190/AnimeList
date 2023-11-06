import Link from "next/link"
import Input from "./Input"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4 ">
        <Link href={"/"} className="font-bold text-2xl">
          ANIMELIST
        </Link>
        <Input />
      </div>
    </header>
  )
}

export default Navbar
