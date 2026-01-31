import { Button } from "@chakra-ui/react";

export default function Discover() {
  return (
    <div className="mt-[190px]">
      <div className="flex justify-between px-20 mb-10 items-center">
        <div>
          <p className="font-bold text-3xl">Lets go places together</p>
          <p className="pt-4 text-sm">
            Discover the latest offers and news and start planning your next
            trip with us
          </p>
        </div>
        <Button border="1px solid green" bg="transparent">
          See All
        </Button>
      </div>
      <img src="/src/assets/worldwide.png" alt="discover" />
    </div>
  );
}
