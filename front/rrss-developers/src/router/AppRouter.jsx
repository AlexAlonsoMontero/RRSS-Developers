import { Routes, Route, Navigate } from  'react-router-dom';
import  DeveloperPage  from '../developer/pages/DeveloperPage'
import DeveloperProfilePage from '../developerProfile/pages/DeveloperProfilePage';
import GitHubPage from '../github/pages/GitHubPage';
import TwitterPage from '../twitter/pages/TwitterPage';
import YoutubePage from '../youtube/pages/YoutubePage';
 

const AppRouter = () => {
  return (
    <Routes>
        <Route path = "/" element={ <DeveloperPage/> }/>
        <Route path = "youtube/" element={<YoutubePage />} />
        <Route path = "youtube/:developer_id" element={<YoutubePage />} />
        <Route path = "github/*" element={<GitHubPage />} />
        <Route path = "twitter/*" element={<TwitterPage />} />
        <Route path = "developer-profile" element={ <DeveloperProfilePage  />}/>
        <Route path = "*" element={<Navigate to="/" />  }/>
    </Routes>
  )
}

export default AppRouter