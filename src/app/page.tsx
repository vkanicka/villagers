import { VILLAGER_NAMES as V } from "@/data/villagerNames"
import Gift from "@/component/gift";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex flex-col gap-8">
        <Gift itemName={"Diamond"} villagerNames={[V.Evelyn, V.Gus, V.Jodi, V.Krobus, V.Marnie, V.Maru, V.Penny, V.Willy]} />
        <Gift itemName={"Amethyst"} villagerNames={[V.Abigail, V.Clint, V.Dwarf, V.Emily]} />
        <Gift itemName={"Pink Cake"} villagerNames={[V.Haley, V.Jas, V.Marnie, V.Vincent]} />
        <Gift itemName={"Cactus Fruit"} villagerNames={[V.Linus, V.Pam, V.Sam]} />
         
      </div>
    </main>
  );
}
