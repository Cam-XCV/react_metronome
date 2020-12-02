import React from "react";

const MetronomeDisplay = ({tempo}) => {

    return(
        <div class="metronome-display">
            <h1>Metronome</h1>
            <p>{tempo} BPM</p>
        </div>
    )


}

export default MetronomeDisplay;