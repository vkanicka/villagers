'use client'

import { useState } from "react"
import Image from "next/image"
import ITEM_IMAGES from "@/data/itemImages"

type Props = {
    itemName: string
}

const Item = ({ itemName } : Props) => {
    const [isSelected, setSelected] = useState(false)

    const toggleItem = () => {
        setSelected(!isSelected)
    }
    const itemImage = ITEM_IMAGES.filter((item) => item.name === itemName)[0].url
    return (
        <Image className={`w-20 h-20 ${isSelected ? ' hue-rotate-90' : ''} `} onClick={() => { toggleItem() }} src={itemImage} alt={""} width={50} height={50} />
    )
}
export default Item;