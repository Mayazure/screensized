import React, {useEffect, useState} from "react";
import {useWindowSize} from "../../../hooks/hooks";

export default function ScreenInfoCanvas(props){

    const screenSize = useWindowSize()
    const {pixelSize, physicalSize} = props

    const canvasPadding=20

    const [plotSize, setPlotSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        if(screenSize.width>screenSize.height){
            let plotHeight = screenSize.height*0.5
            let plotWidth = plotHeight/pixelSize[1]*pixelSize[0]
            setPlotSize({width: plotWidth, height: plotHeight})
        }else{
            let plotWidth = (screenSize.width-canvasPadding*2)*0.95
            let plotHeight = plotWidth/pixelSize[0]*pixelSize[1]
            setPlotSize({width: plotWidth, height: plotHeight})
        }
    },[screenSize, pixelSize]);

    return(
        <>
            <div style={{padding:`${canvasPadding}px`, width:screenSize.width, textAlign:"center"}}>

                <canvas id="myCanvas" width={plotSize.width} height={plotSize.height}
                        style={{border:"1px solid #000000", background:"#99ccff"}}>
                </canvas>
            </div>
            {physicalSize[0]}
            {physicalSize[1]}
            <div style={{padding:`${canvasPadding}px`, width:screenSize.width, textAlign:"center"}}>

                <canvas id="myCanvas" width="13.6cm" height="7.6cm"
                        style={{border:"1px solid #000000", background:"#99ccff"}}>
                </canvas>
            </div>
        </>
    )
}