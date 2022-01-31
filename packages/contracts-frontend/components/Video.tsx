import React, {useRef} from 'react'

export const Video = ({ videoSrc, hoverPlay }) => {
  const videoRef = useRef(null);
  const fade = 50;
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const eyeBalls = [
    '/images/eyeball-1.png',
    '/images/eyeball-2.png',
    '/images/eyeball-3.png',
    '/images/eyeball-4.png',
  ];
  let eyeballIndex = getRandomInt();

  function getRandomInt() {
    let min = 0;
    let max = 3;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function play(){
    eyeballIndex = getRandomInt();
    console.log(eyeballIndex, eyeBalls[eyeballIndex]);
    if(!hoverPlay) return;
    videoRef.current.play();
    for (let i = 0; i < 11; i++) {
      videoRef.current.volume = 0.1 * i;
      await timer(fade);
    }
  }

  async function pause(){
    eyeballIndex = getRandomInt();
    console.log(eyeballIndex, eyeBalls[eyeballIndex]);
    if(!hoverPlay) return;
    for (let i = 0; i < 11; i++) {
      videoRef.current.volume = 1 - (0.1 * i);
      await timer(fade);
    }
    videoRef.current.pause();
  }

  return (
    <video loop src={videoSrc} ref={videoRef} onMouseEnter={play} onMouseLeave={pause} style={{width: '100%', 'cursor': `url(${eyeBalls[eyeballIndex]}), auto`}}/>
  )
}
