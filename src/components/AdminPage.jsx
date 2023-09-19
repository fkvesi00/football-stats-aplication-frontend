import React from 'react'

function AdminPage() {
  return (
    <div className="flex flex-wrap justify-center mx-1">
      <form /*onSubmit={handleSubmit}*/ className="flex flex-wrap w-full max-w-lg">
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" className="w-full" />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" className="w-full" />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="home">Home:</label>
          <input type="text" id="home" name="home" className="w-full" />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="score">Score:</label>
          <input type="text" id="score" name="score" pattern="\d+:\d+" className="w-full" />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="away">Away:</label>
          <input type="text" id="away" name="away" className="w-full" />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AdminPage
