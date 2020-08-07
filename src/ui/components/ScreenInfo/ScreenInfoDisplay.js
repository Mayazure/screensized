import React, {useState} from "react";
import {Select, Descriptions, Space} from "antd";

export default function ScreenInfoDisplay(props){

    const {physicalSize, pixelSize, diagonal, resolution} = props;
    const [unit, setUnit] = useState('cm')
    const factor = unit==='cm'?2.54:1

    return(
        <>
            <Space>
                <span>Display unit:</span>
                <Select defaultValue={unit} onChange={value=>setUnit(value)}>
                    <Select.Option value="cm">cm</Select.Option>
                    <Select.Option value="inch">inch</Select.Option>
                </Select>
            </Space>

            <Descriptions
                // title="Screen information"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="Pixel width">{pixelSize[0]} px</Descriptions.Item>
                <Descriptions.Item label="Pixel height">{pixelSize[1]} px</Descriptions.Item>
                <Descriptions.Item label="Physical width">
                    {(physicalSize[0]*factor).toFixed(2)} {unit}
                </Descriptions.Item>
                <Descriptions.Item label="Physical height">
                    {(physicalSize[1]*factor).toFixed(2)} {unit}
                </Descriptions.Item>
                <Descriptions.Item label="Diagonal">{diagonal}"</Descriptions.Item>
                <Descriptions.Item label="Resolution">{resolution.toFixed(0)} ppi</Descriptions.Item>
            </Descriptions>
        </>
    )
}