import { Routes, Route } from  'react-router-dom';
import  DeveloperPage  from '../developer/pages/DeveloperPage'
import GitHubPage from '../github/pages/GitHubPage';
import TwitterPage from '../twitter/pages/TwitterPage';
import YoutubePage from '../youtube/pages/YoutubePage';

const AppRouter = () => {
  return (
    <Routes>
        <Route path = "developer" element={ <DeveloperPage/> }/>
        <Route path = "youtube" element={<YoutubePage />} />
        <Route path = "github" element={<GitHubPage />} />
        <Route path = "twitter" element={<TwitterPage />} />
        <Route path = "*" element= { <DeveloperPage />} />

    </Routes>
  )
}

export default AppRouter