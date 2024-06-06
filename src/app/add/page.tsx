import { VILLAGER_NAMES as V } from "@/data/villagerNames"
import Gift from "@/component/gift";

export default function Add() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex flex-col gap-8 p-8">
        <Gift itemName={"Duck Feather"} villagerNames={[V.Elliott, V.Leo]} />
        <Gift itemName={"Goat Cheese"} villagerNames={[V.Leah, V.Robin]} />
        <Gift itemName={"Hot Pepper"} villagerNames={[V.Lewis, V.Shane]} />
      </div>
    </main>
  );
}
