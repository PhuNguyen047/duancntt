import './Background.css';
import video1 from '../../assets/videos/video1.mp4';
import image1 from '../../assets/images/pic1.jpg';
import image2 from '../../assets/images/pic2.jpg';
import image3 from '../../assets/images/pic3.jpg';

const Background = ({playStatus,heroCount}) => {
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>  
        )
    }
    else if(heroCount===0){
        return <img className='background fade-in' src={image1} alt=""/>
    }
    else if(heroCount===1){
        return <img className='background fade-in' src={image2} alt=""/>
    }
    else if(heroCount===2){
        return <img className='background fade-in' src={image3} alt=""/>
    }
}
export default Background;