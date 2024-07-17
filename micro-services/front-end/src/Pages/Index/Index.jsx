import React from 'react';
import { useEffect, useState } from 'react';
import Background from '../../Components/Background/Background';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Clock from '../../Components/Clock/Clock';

const Index = () => {
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },5000)
},[])

return (
    <div>
      <Background playStatus ={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Clock/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
    );
}
export default Index;