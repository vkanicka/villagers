import Item from "./item"
import Villager from "./villager"

type Props = {
    itemName: string;
    villagerNames: string[]
}

const Gift = ({ itemName, villagerNames } : Props) => {
    return (
        <div className="flex gap-4 items-center flex-row  my-auto">
          <Item itemName={itemName} />
          <div className="flex flex-col place-content-center">
                <div className="flex flex-row w-full place-self-center my-auto place-content-center">
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