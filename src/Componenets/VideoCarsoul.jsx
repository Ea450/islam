import { useRef } from "react";
import { highlightVideos } from "../constants"
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import playimg from '/play.svg';
import pauseimg from '/pause.svg';
import replayimg from '/replay.svg';



const VideoCarsoul = () => {

    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });

    const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

    useGSAP(() => {
        gsap.to('#video', {

            onComplete: () => {
                setVideo((prev) => ({
                    ...prev,
                    startPlay: true,
                    isPlaying: true,
                }))
            }
        })

        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [isEnd, videoId])

    const [loadedData, setLoadedData] = useState([])


    useEffect(() => {
        if (loadedData.length > 4) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    const handleLoadedData = (i, e) => {
        setLoadedData((pre) => [...pre, e])
    }

    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            //animate the progress 
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100)
                    if (progress !== currentProgress) {
                        currentProgress = progress;
                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 720 ? '10vw' :
                                window.innerWidth < 1200 ? '10vw' : '4vw'
                        })
                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: 'white'
                        })
                    }
                },
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px'
                        })
                        gsap.to(span[videoId], {
                            backgroundColor: '#afafaf'
                        })
                    }
                }
            })
            if (videoId === 0) {
                anim.restart();
            }

            const animUpdate = () => {
                anim.progress(videoRef.current[videoId].currentTime / highlightVideos[videoId].videoDuration)
            }
            if (isPlaying) {
                gsap.ticker.add(animUpdate)
            } else {
                gsap.ticker.remove(animUpdate)
            }
        }

    }, [videoId, startPlay, isPlaying])

    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
                break;

            case "video-last":
                setVideo((pre) => ({ ...pre, isLastVideo: true }));
                break;

            case "video-reset":
                setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
                break;

            case "pause":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;

            case "play":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;

            default:
                return video;
        }
    }

    return (
        <>
            <div className="flex items-center">
                {highlightVideos.map((list, i) => (
                    <div key={i} id="slider" className="sm:pr-20 pr-10">
                        <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video id="video" playsInline={true} preload="auto" muted
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onPlay={() => {
                                        setVideo((prev) => ({
                                            ...prev, isPlaying: true
                                        }))
                                    }}
                                    onLoadedMetadata={(e) => handleLoadedData(i, e)}
                                    onEnded={() => {
                                        i !== 4 ? handleProcess('video-end', i) :
                                            handleProcess('video-last')
                                    }}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative flex justify-center items-center mt-10">
                <div className="flex justify-center items-center py-5 px-7 bg-[#42424570] backdrop-blur rounded-full">
                    {videoRef.current.map((_, i) => (
                        <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className="mx-2 w-3 h-3 bg-[#afafaf] rounded-full relative cursor-pointer">
                            <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)} />
                        </span>
                    ))}
                </div>
                <button className="ml-4 p-4 rounded-full bg-[#42424570] backdrop-blur flex-center cursor-pointer">
                    <img src={isLastVideo ? replayimg : !isPlaying ? playimg : pauseimg} alt="playing" onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')} />
                </button>
            </div>
        </>
    )
}

export default VideoCarsoul