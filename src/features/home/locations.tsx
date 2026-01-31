import { Send } from "lucide-react";
import { locations, banners } from "./data";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import cityImage from "../../assets/city.png";
export default function Locations() {
  const navigate = useNavigate();
  return (
    <div className="mt-[250px] mx-14">
      <div className="flex justify-between mb-10 items-center">
        <div>
          <p className="font-bold text-4xl">Plan your perfect trip</p>
          <p className="pt-4 text-gray-500">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <Button border="1px solid green" bg="transparent">
          See More Places
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {locations.map((location) => (
          <div className="flex rounded-lg p-2 items-center gap-4 shadow-lg cursor-pointer mb-6 hover:scale-105 transition-transform">
            <img src={cityImage} alt="location" />
            <div>
              <div className="flex gap-4 mb-2">
                <p>{location.city}</p>
                <p>{location.country}</p>
              </div>
              <p>Flights • Hotels • Resorts</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-[100px] gap-10">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`${banner.bg} bg-cover h-[60vh] rounded-xl w-[50%] flex flex-col gap-6 justify-end items-center text-center text-white pb-10`}
          >
            <p className="font-bold text-4xl">{banner.name}</p>
            <p>{banner.desc}</p>
            <Button
              display="flex"
              gap={2}
              bg="#8DD3BB"
              _hover={{ transform: "scale(1.05)" }}
              onClick={() => navigate(banner.route)}
            >
              <Send />
              {banner.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
