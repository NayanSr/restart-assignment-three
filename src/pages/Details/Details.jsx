import { useEffect, useState } from "react";
import { FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setApp(found);
      });
  }, [id]);

  if (!app) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
   
      <div className="flex gap-6 bg-white p-6 rounded-lg shadow">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{app.title}</h2>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <span className="text-blue-500">{app.companyName}</span>
          </p>

        
          <div className="flex gap-10 mt-4 text-center">
            <div>
              <p className="text-green-600 text-xl"> <IoMdDownload /></p>
              <p className="font-semibold">
                {(app.downloads / 1000000).toFixed(0)}M
              </p>
              <p className="text-xs text-gray-500">Downloads</p>
            </div>

            <div>
              <p className="text-yellow-500 text-xl"><FaRegStar /></p>
              <p className="font-semibold">{app.ratingAvg}</p>
              <p className="text-xs text-gray-500">Average Rating</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl"><FaRegThumbsUp /></p>
              <p className="font-semibold">
                {(app.reviews / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-gray-500">Total Reviews</p>
            </div>
          </div>

        
          <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded shadow">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>


      <div className="bg-white mt-6 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Ratings</h3>

        {app.ratings
          .slice()
          .reverse()
          .map((rate, index) => (
            <div key={index} className="flex items-center gap-4 mb-3">
              <span className="w-16 text-sm">{rate.name}</span>

              <div className="flex-1 bg-gray-200 h-4 rounded">
                <div
                  className="bg-orange-500 h-4 rounded"
                  style={{
                    width: `${(rate.count / app.reviews) * 100}%`,
                  }}
                ></div>
              </div>

              <span className="text-sm">{rate.count}</span>
            </div>
          ))}
      </div>

    
      <div className="bg-white mt-6 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default Details;

/* 
{
    "image": "https://i.ibb.co.com/Y4X2B955/budget-Buddy.jpg",
    "title": "BudgetBuddy",
    "companyName": "FinTrack",
    "id": 13,
    "description": "Manage expenses and track budgets.",
    "size": 35,
    "reviews": 3900,
    "ratingAvg": 4.0,
    "downloads": 110000,
    "ratings": [
      { "name": "1 star", "count": 400 },
      { "name": "2 star", "count": 500 },
      { "name": "3 star", "count": 900 },
      { "name": "4 star", "count": 1100 },
      { "name": "5 star", "count": 1000 }
    ]
  }
*/