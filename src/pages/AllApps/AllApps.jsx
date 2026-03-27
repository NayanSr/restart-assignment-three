import { useLoaderData } from "react-router";
import Card from "../../components/Card/Card";
import { useState } from "react";
import AppNotFound from "../../components/AppNotFound/AppNotFound";

const AllApps = () => {
  const allApps = useLoaderData();
  const [apps, setApps]= useState(allApps)
  const handleSearch=e=>{
    const value= e.target.value.toLowerCase();
    console.log(value);
    const filterSearch=allApps.filter(app=>app.title.toLowerCase().includes(value));
    console.log(filterSearch);
    setApps(filterSearch)
  }

  



  return (
    <div className="my-8">
      <section className="text-center my-6">
        <h3 className="text-3xl font-semibold mb-4">Our All Applications</h3>
        <p className="text-sm text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
      </section>
      <section className="flex justify-between px-44 my-4">
        <h4 className="text-xl font-semibold">({apps?.length}) Apps Found</h4>
        <input onChange={handleSearch} name="searchField" type="text" className="shadow-lg border-2 border-gray-400 rounded-lg p-2" placeholder=" 🔍 Search apps" />


      </section>
      

      {apps.length===0? <AppNotFound/> : <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {apps?.map((app) => (
            <Card key={app.id} app={app} />
          ))}
        </div>
      </div>}


    </div>
  );
};

export default AllApps;
