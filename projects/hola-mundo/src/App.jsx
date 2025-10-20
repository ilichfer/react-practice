import'./App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const format = (userName => `@${userName}`)
    return (
        <>
            <TwitterFollowCard 
                formatUserName={format}
                userName="ilichfer"
                name="ilich"
                isFollowing={true}  
            />
            <TwitterFollowCard 
                formatUserName={format}
                userName="KalelV"
                name="Kalel"
                isFollowing={false}  
            />
            

        </>
        
    )
}