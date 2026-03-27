import { useLoaderData } from "react-router";
import { getStoredDataFromLs } from "../../utilities/addToLs";

const Installation = () => {
  const allApps = useLoaderData();
  const installed = getStoredDataFromLs("installed") || [];

  // Fix type mismatch by converting installed IDs to numbers
  const installedApps = allApps.filter((app) =>
    installed.includes(app?.id)
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Installed Apps</h2>
      <p className="text-gray-500 text-center">Explore All Trending Apps on the Market developed by us</p>

      {installedApps.length === 0 ? (
        <p>No apps installed yet.</p>
      ) : (
        <div className="overflow-x-auto ">
          {installedApps.map(app=><div key={app?.id} className="flex justify-between"> 
            <section className="flex gap-4 items-center mb-6">
                <img className="w-24 rounded-2xl" src={app?.image} alt="Image" />
                <section>
                    <h3 className="text-3xl">{app?.title}</h3>
                    <p>{app?.downloads}</p>
                </section>
            </section>
            <button className="btn bg-linear-to-br from-[#27e948] to-[#62f269]"> Uninstall</button>
          </div>)}
        </div>
      )}
    </div>
  );
};

export default Installation;