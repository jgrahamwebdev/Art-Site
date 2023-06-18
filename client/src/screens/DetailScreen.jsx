import { useEffect } from "react"
import ArtOne from "../components/details/ArtOne"
import ArtistBio from "../components/details/ArtistBio"
import Header from "../components/details/Header"



const DetailScreen = () => {
    
    // Makes window start at top when navigating
    useEffect (() => {  
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header />
            <ArtistBio />
            <ArtOne />
        </div>
    )
}

export default DetailScreen
