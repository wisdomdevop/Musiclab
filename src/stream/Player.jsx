import React, { useState, useRef, useEffect } from 'react';

const Player = ({ track, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
   const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    audioRef.current.currentTime = (audioRef.current.duration / 100) * newProgress;
    setProgress(newProgress);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };
    const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
       setCurrentTime(audioRef.current.currentTime);
    };
 const setAudioData = () => {
      setDuration(audioRef.current.duration);
    };
{/* {isPlaying ? <img src="/pause.svg" alt="" width={30} /> : <img src="/play.svg" alt="" width={30} /> } */}
    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.removeEventListener('loadedmetadata', setAudioData);
    audioRef.current.addEventListener('ended', onNext);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
      audioRef.current.removeEventListener('loadedmetadata', setAudioData);
      audioRef.current.addEventListener('ended', onNext);
    };
  }, [onNext]);

  return (
    <div className="flex flex-col items-center shadow-3xl lg:w-[550px] w-[100%]  p-8">
      <img src={track.cover} alt="cover" className="w-32 h-32 rounded-full" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">{track.title}</h3>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
      <div className="w-[60%] mt-4 mx-auto text-center">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-[100%] text-center mx-auto"
        />
                <div className="flex justify-between text-white text-sm mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="w-[70%] mt-4 mx-auto flex items-center justify-center gap-3">
        <img src="/vol.jpg" alt="" width={20} className='bg-white rounded-lg'/>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-[100%] text-center"
        />
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onPrev}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          <img src="/prev.svg" alt="" width={30} />
        </button>
        <button
          onClick={playPauseHandler}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          {isPlaying ? <img src="/pause.svg" alt="" width={30} /> : <img src="/play.svg" alt="" width={30} /> }
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          <img src="/next.svg" alt="" width={30} />
        </button>
      </div>
      <audio ref={audioRef} src={track.audioSrc}></audio>
    </div>     
  );
};

export default Player;
