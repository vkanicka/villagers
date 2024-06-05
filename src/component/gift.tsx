import Item from "./item"
import Villager from "./villager"

type Props = {
    itemName: string;
    villagerNames: string[]
}

const Gift = ({ itemName, villagerNames } : Props) => {
    return (
        <div className="flex gap-4">
          <Item itemName={itemName} />
          <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    {villagerNames.map((villagerName, villagerIndex) => {
                        return (
                            <Villager key={villagerIndex} villagerName={villagerName}/>
                        )
                    })}
                </div>
                {/* <div className="flex flex-row gap-2 w-full">
                    {villagerNames.map((villagerName, villagerIndex) => {
                        return (
                            <Villager key={villagerIndex} villagerName={villagerName}/>
                        )
                })}
                </div> */}
            </div>
        </div>
    )
}
export default Gift;