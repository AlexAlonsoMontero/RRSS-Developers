import { useLocation, useParams, useSearchParams } from "react-router-dom"

const SearchesPage = () => {
  const [searchParams] = useSearchParams();
  const youtube = (searchParams.get('youtube'))
  const github = (searchParams.get('github'))
  
  return(
    <div>SearchesPag</div>
  )
}

export default SearchesPage