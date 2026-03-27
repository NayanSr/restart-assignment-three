import { useLoaderData } from 'react-router'
import AppStatsSection from '../../components/AppStatsSection/AppStatsSection'
import Banner from '../../components/Banner/Banner'
import TrendingApp from '../../components/TrendingApp/TrendingApp'

const Home = () => {
  const data= useLoaderData();
  
  return (
    <div>
      <Banner/>
      <AppStatsSection/>
      <TrendingApp allApps={data}/>
    </div>
  )
}

export default Home