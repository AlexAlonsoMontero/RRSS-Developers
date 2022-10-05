import { useEffect, useState } from "react"
import developerApi from "../../api/developerApi"


function DeveloperProfilePage() {
    const [developers, setDevelopers] = useState({})
    const getDevelopers = async () => {
        const data = await developerApi.get();
        setDevelopers(data)
    }
    useEffect(() => {
        getDevelopers()

    }, [])
    
    if (developers === {}) return <div><h1>Cargando</h1></div>
    
    return (

        <div><p>sssss</p></div>


    )
}

export default DeveloperProfilePage