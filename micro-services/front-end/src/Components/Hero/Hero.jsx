import './Hero.css'
import icon2 from '../../assets/images/icon2.png'
import play_icon from '../../assets/images/play.jpg'
import pause_icon from '../../assets/images/pause.jpg'

const Hero = ({setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return (
        <div className='hero'>
            
            <div className='hero-explore'>
                <p>Welcome to our course</p>
                <img src={icon2}/>
            </div>

            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot.orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot.orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot.orange":"hero-dot"}></li>
                </ul>
            
                <div className='hero-play'>
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt=""/>
                    <p>Click here !</p>
                </div>
            </div>
        </div>
    )
}
export default Hero;