import Card from "../Card/Card"

const TrendingApp = ({allApps}) => {
  const topRatedApps = [...(allApps || [])]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  return (
    <div className="text-center">
      <h3 className="text-3xl font-semibold">Trending Apps</h3>
      <p className="text-sm text-gray-500 pb-8">Explore All Trending Apps on the Market developed by us</p>
     <div className="flex justify-center">
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topRatedApps?.map(app=><Card key={app.id} app={app}/>)}
      </div>
     </div>
     <button className="btn mt-10 mb-20 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">Show All App</button>
    </div>
  )
}

export default TrendingApp