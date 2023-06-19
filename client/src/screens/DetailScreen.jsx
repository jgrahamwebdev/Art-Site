import { useEffect } from "react"
import ArtOne from "../components/details/ArtOne"
import ArtistBio from "../components/details/ArtistBio"
import Header from "../components/details/Header"
import ArtTwo from "../components/details/ArtTwo"
import ArtThree from "../components/details/ArtThree"
import Collections from "../components/details/Collections"



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
            <ArtTwo />
            <ArtThree />
            <Collections />
        </div>
    )
}

export default DetailScreen
