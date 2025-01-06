
function ShowTaskCompletePage() {
  return (
    <div className="relative min-h-screen">  
      <div className="grid grid-cols-1 gap-y-4 m-2 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
        <div className="bg-green-500 text-center rounded-lg">
          <h1>box 1</h1>
        </div>
        <div className="bg-blue-500 text-center rounded-lg">
          <h1>box 2</h1>
        </div>
        <div className="bg-red-500 text-center rounded-lg">
          <h1>box 3</h1>
        </div>
        <div className="bg-yellow-500 text-center rounded-lg">
          <h1>box 4</h1>
        </div>
      </div>
    </div>
  )
}

export default ShowTaskCompletePage;