import {useState} from 'react'

export function TwitterFollowCard ({formatUserName,userName, name, isFollowing}){

    const [isFollowing,setIsFollowing] = useState(isFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                src="https://media.licdn.com/dms/image/v2/C5603AQEJeiXKWnf9Vg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517624776698?e=2147483647&v=beta&t=Qn_l5NAtRjlrfzBRkukzql9SAvlmE3DXGZXvG8U8SCM" alt="imagen de kalel"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button  className={buttonClassName} onClick={handleClick}>{text}</button>              
            </aside>
        </article>
    )
}