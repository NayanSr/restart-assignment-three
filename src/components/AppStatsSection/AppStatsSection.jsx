
const AppStatsSection=()=>{
    return(
        <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">
            <h3 className="text-4xl font-semibold text-center mb-10 pt-16">Trusted by Millions, Built for You</h3>
            <div className="flex justify-center gap-2 pb-16">
                <div className="text-center px-8">
                    <p className="text-sm">Total Downloads</p>
                    <h3 className="text-3xl my-4 font-bold">29.6M</h3>
                    <p className="text-xs">21% More Than Last Month</p>
                </div>
                <div className="text-center px-8">
                    <p className="text-sm">Total Reviews</p>
                    <h3 className="text-3xl my-4 font-bold">850.6K</h3>
                    <p className="text-xs">21% More Than Last Month</p>
                </div>
                <div className="text-center px-8">
                    <p className="text-sm">Total Downloads</p>
                    <h3 className="text-3xl my-4 font-bold">250+</h3>
                    <p className="text-xs">21% More Than Last Month</p>
                </div>
            </div>
        </div>
    )
}

export default AppStatsSection;