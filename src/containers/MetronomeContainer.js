import React, {useState, useEffect} from "react";
import ClickUp from "../assets/ClickUp.wav";
import ClickDown from "../assets/ClickDown.wav";
import MetronomeDisplay from "../components/MetronomeDisplay";
import MetronomeControls from "../components/MetronomeControls";

const MetronomeContainer = () => {

    const [tempo, setTempo] = useState(120);
    const [playing, setPlaying] = useState(false);
    const [timer, setTimer] = useState(0);
   
    const clickDown = new Audio(ClickDown);
    const clickUp = new Audio(ClickUp);

    const sounds = [clickUp,clickDown];

    const [click, setClick] = useState(sounds[0]);


    const changeClick = (event) => {
        let choice = Number(event.target.value)
        setClick(sounds[choice])
    }

    const increaseTempo = () => {
        setTempo(tempo + 1)
    }

    const decreaseTempo = () => {
        setTempo(tempo - 1)
    }


    const handlePlayPause = () => {
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    }

    const handleBPMChange = (event) => {
        let bpm = Number(event.target.value);
        setTempo(bpm);
    }

    useEffect( () => {
        if (playing) {
            if(timer){
                clearInterval(timer);
            }
            setTimer(setInterval( () => {
                click.play()},((60 / tempo) * 1000)))
          } else {
            clearInterval(timer);
          }
    }, [playing, tempo])

    return(
        <div className="container">
            <MetronomeDisplay tempo={tempo} />
            <MetronomeControls 
                tempo ={tempo}
                handlePlayPause={handlePlayPause} 
                decreaseTempo={decreaseTempo}
                increaseTempo={increaseTempo} 
                handleBPMChange={handleBPMChange}  
                changeClick={changeClick}
                />
        </ div>
    )



}

export default MetronomeContainer;