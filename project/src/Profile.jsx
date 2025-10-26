import minnie from './assets/minnie_image.jpg'
import './Profile.css'
import Link from './Link.jsx'
import reactSvg from './assets/react.svg'
import links from './stored-links.json'
import instsvg from './icons/instagram.svg'
import pintsvg from './icons/pinterest.svg'
import tiksvg from './icons/tiktok.svg'
import twitsvg from './icons/twitter.svg'
import yousvg from './icons/youtube.svg'

export default function Profile(){
        const icons= {
                instagram: instsvg,
                youtube: yousvg,
                twitter: twitsvg,
                pinterest: pintsvg,
                tiktok: tiksvg
            };
            
    return(
        <>
        <div className="profile-box">
            <div className="image"><img src={minnie} alt="profile picture" /></div>
            <div className="name">Minnie Mouse</div>
            <div className="bio">Style icon · Disney classic · Spreading joy</div>
            
        
            
            {links.map((link, index) => (
        <Link 
          key={index} 
          url={link.url} 
          icon={icons[link.icon]} 
          title={link.title} 
        />
      ))}

        </div>
        
        </>
    );
}