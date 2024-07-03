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
        <div className="mx-2 my-2 flex gap-1">
            
            {/* <h1 className="text-2xl text-fuchsia-300 drop-shadow-fog mb-2">{seasonProper} Birthdays</h1> */}
            {Array.from(SEASON_BIRTHDAYS).map((birthday: any, key) => {
                const itemImage = ITEM_IMAGES.filter((item) => item.name === birthday?.gift)[0]?.url || undefined
                const villagerImage = VILLAGER_IMAGES.filter((villager) => villager.name === birthday.name)[0].url
                return (
                    <div className="flex flex-col gap-0 align-middle items-center" key={key}>
                        <p className="text-4xl font-bold text-white drop-shadow-fog ">{birthday.date}</p>
                        {/* <p className="text-xl text-white drop-shadow-fog w-[35px]">{birthday.day}</p> */}
                        <Image className="w-10 h-10 drop-shadow-fog" src={villagerImage} alt={""} width={30} height={30} />
                        {itemImage && (
                            <Image className={`w-10 h-10 drop-shadow-fog`} src={itemImage} alt={""} width={50} height={50} />
                            )}
                    </div>
                )
            })}

            {/* <div className="flex gap-2 m-8 opacity-50">
                <Link className={`text-lg ${season === 'spring' ? 'underline' : ''}`} href={"/seasons/spring"}>Spring</Link>
                <Link className={`text-lg ${season === 'summer' ? 'underline' : ''}`} href={"/seasons/summer"}>Summer</Link>
                <Link className={`text-lg ${season === 'fall' ? 'underline' : ''}`} href={"/seasons/fall"}>Fall</Link>
                <Link className={`text-lg ${season === 'winter' ? 'underline' : ''}`} href={"/seasons/winter"}>Winter</Link>

            </div> */}
        </div>
    )
}
export default Season;