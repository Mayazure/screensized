import React, {useState} from "react";
import {Divider, InputNumber, Space} from "antd";
import ScreenInfoDisplay from "./ScreenInfoDisplay";
import ScreenInfoCanvas from "./ScreenInfoCanvas";

export default function ScreenInfo(props){

    const [pixelSize, setPixelSize] = useState([1920, 1080])
    const [diagonal, setDiagonal] = useState(15.6)

    const physicalSize=[
        Math.sqrt(diagonal*diagonal/(pixelSize[0]*pixelSize[0]+pixelSize[1]*pixelSize[1])*pixelSize[0]*pixelSize[0]),
        Math.sqrt(diagonal*diagonal/(pixelSize[0]*pixelSize[0]+pixelSize[1]*pixelSize[1])*pixelSize[1]*pixelSize[1]),
    ]

    const resolution = Math.sqrt((pixelSize[0]*pixelSize[0]+pixelSize[1]*pixelSize[1]))/diagonal

    return(
        <>
            <Space>
                Pixel width: <InputNumber defaultValue={pixelSize[0]} min={1} step={1} onChange={value=>setPixelSize([value, pixelSize[1]])} />
                Pixel height: <InputNumber defaultValue={pixelSize[1]} min={1} step={1} onChange={value=>setPixelSize([pixelSize[0], value])} />
                Diagonal(inch): <InputNumber defaultValue={diagonal} min={0.1} step={0.01} onChange={value=>setDiagonal(value)} />
            </Space>
            <Divider/>
            <ScreenInfoDisplay
                physicalSize={physicalSize}
                pixelSize={pixelSize}
                diagonal={diagonal}
                resolution={resolution}
            />
            <ScreenInfoCanvas pixelSize={pixelSize} physicalSize={physicalSize}/>
        </>

    )
}