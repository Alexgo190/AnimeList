"use client"

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
        disabled={page === lastPage}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
