const Card=({app})=>{
   return (
    <div className="card max-w-72 bg-base-100 shadow-md hover:shadow-2xl transition">
      {/* Image */}
      <figure>
        <img
          src={app.image}
          alt={app.title}
          className="h-40 w-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base font-semibold">
          {app.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name={`rating-${app.id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={Math.round(app.ratingAvg) === star}
                readOnly
              />
            ))}
          </div>
          <span className="text-sm">{app.ratingAvg}</span>
        </div>

        {/* Downloads */}
        <p className="text-sm text-gray-500">
          📥 {app.downloads.toLocaleString()} downloads
        </p>
      </div>
    </div>
  );
}
export default Card;