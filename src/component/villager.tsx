'use client'

import { useState } from "react"
import Image from "next/image"
import VILLAGER_IMAGES from "@/data/villagerImages"

type Props = {
    villagerName: string
}

const Villager = ({ villagerName } : Props) => {
    const [isSelected, setSelected] = useState<boolean>(false)

    const toggleVisibility = () => {
        setSelected(!isSelected)
    }
    const villagerImage = VILLAGER_IMAGES.filter((villager) => villager.name === villagerName)[0].url

    return (
        <div onClick={toggleVisibility} className={isSelected ? 'hidden' : ''}>
            <Image src={villagerImage} alt={""} width={30} height={30} />
        </div>
    )
}
export default Villager;