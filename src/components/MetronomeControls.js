import React from 'react';

const MetronomeControls = ({handlePlayPause,decreaseTempo,increaseTempo,handleBPMChange,changeClick, tempo}) => {

    return(
        <>

            <input onChange={handleBPMChange} type="range" min="0" max="300" value={tempo} id="tempo-slider"/>

            <div className="controls">
                <button onClick={handlePlayPause}>Start/Stop</button>
                <button onClick={decreaseTempo}>-</button>
                <button onClick={increaseTempo}>+</button>

                <select onChange={changeClick}>
                    <option value="0">sound 1</option>
                    <option value="1">sound 2</option>
                </select>
            </div>
        </>
    )
}

export default MetronomeControls;