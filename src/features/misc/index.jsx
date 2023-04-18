import { Button } from "@/components/ui/Button";

export const Misc = () => {
  return (
    <div className="bg-light-green w-full h-screen flex flex-col gap-4 justify-center items-center">
      <Button>Donate</Button>
      <Button className="bg-white text-black font-normal">Sign In</Button>
      <Button variant="outline" size="md">
        Donate now
      </Button>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          ﹢
        </Button>
        <Button variant="outline" size="md">
          View Certificate
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">All</Button>
        <Button variant="outline" size="sm">
          Disaster
        </Button>
        <Button size="icon">
          ＋
        </Button>
      </div>
      <div className="bg-black p-4 flex w-full justify-center gap-4">
        <Button size="hero">Buy GUC Coin</Button>
        <Button variant="ghost" size="sm">Watch Video ＋</Button>
      </div>
    </div>
  );
}

