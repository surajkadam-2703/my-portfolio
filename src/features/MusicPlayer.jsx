import { useRef, useState } from "react";
import { Music, Volume2 } from "lucide-react";
import bgm from "../assets/audio/chill_lofi_mix(bgm).mp3";

function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <div
                onClick={toggleMusic}
                className="px-3 py-3 rounded-full hover:bg-[#F5F4F4] cursor-pointer dark:hover:bg-[#1b1a1a]"
            >
                {isPlaying ? (
                    <Volume2 size={17} className="text-red-600"/>
                ) : (
                    <Music size={17} />
                )}
            </div>

            <audio ref={audioRef} loop>
                <source src={bgm} type="audio/mpeg" />
            </audio>
        </>
    );
}

export default MusicPlayer;