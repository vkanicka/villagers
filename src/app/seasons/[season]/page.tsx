'use client'

import Image from "next/image"

import VILLAGER_BIRTHDAYS from "@/data/villagerBirthdays"; 
import ITEM_IMAGES from "@/data/itemImages";
import VILLAGER_IMAGES from "@/data/villagerImages";
import { useParams } from "next/navigation";
import Link from "next/link";

const Season = () => {

    const params = useParams()
    const season: string = params.season as string;

    const seasonProper = season[0].toUpperCase() + season.slice(1)

    const SEASON_BIRTHDAYS = Object.values(VILLAGER_BIRTHDAYS).filter((value) => value.season === seasonProper)
    
    return (
        <div className="mx-8 my-2 flex flex-col gap-2">
            <div className="flex gap-2 mb-4">
                <Link className={`text-lg ${season === 'spring' ? 'underline' : ''}`} href={"/seasons/spring"}>Spring</Link>
                <Link className={`text-lg ${season === 'summer' ? 'underline' : ''}`} href={"/seasons/summer"}>Summer</Link>
                <Link className={`text-lg ${season === 'fall' ? 'underline' : ''}`} href={"/seasons/fall"}>Fall</Link>
                <Link className={`text-lg ${season === 'winter' ? 'underline' : ''}`} href={"/seasons/winter"}>Winter</Link>

            </div>
            <h1 className="text-2xl text-fuchsia-300 drop-shadow-fog mb-2">{seasonProper} Birthdays</h1>
            {Array.from(SEASON_BIRTHDAYS).map((birthday: any, key) => {
                const itemImage = ITEM_IMAGES.filter((item) => item.name === birthday?.gift)[0]?.url || undefined
                const villagerImage = VILLAGER_IMAGES.filter((villager) => villager.name === birthday.name)[0].url
                return (
                    <div className="flex gap-1 align-middle items-center" key={key}>
                        <p className="text-3xl font-bold text-lime-300 drop-shadow-fog w-[40px] text-center">{birthday.date}</p>
                        <p className="text-xl text-lime-500 drop-shadow-fog w-[35px] text-center">{birthday.day}</p>
                        <Image className="w-10 h-10 drop-shadow-fog" src={villagerImage} alt={""} width={30} height={30} />
                        {itemImage && (
                            <Image className={`w-10 h-10 drop-shadow-fog`} src={itemImage} alt={""} width={50} height={50} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
export default Season;