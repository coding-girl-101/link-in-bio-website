import './Link.css'
import arrwsvg from './icons/arrow.svg'

export default function Link({url,icon,title}){
    return(
    <>
    <a href={url} target="_blank">
        <div className="link-item">
        <img src={icon} alt="icon" className="icon"/> 
        <div className="text" >{title}</div>
        <div className="arrow"><img src={arrwsvg} alt="arrow" className="arrow-image" /></div>
        </div>
    </a> 
    
    </>
    );
}