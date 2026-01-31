import { Avatar, Divider } from "@chakra-ui/react";
import { useAuth } from "../../context/authContext";
import api from "../../api";
import { IProfile } from "../../lib/types";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Account from "../../features/profile/account";
import History from "../../features/profile/history";
import PaymentMethods from "../../features/profile/payment";
import coverImg from "../../assets/cover.png";

export default function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<IProfile>();
  const [activeTab, setActiveTab] = useState("account");

  const getUser = async () => {
    try {
      if (user?.id) {
        const response = await api.get(`/api/user/${user.id}`);
        setProfile(response.data);
        console.log("data", response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [user?.id]);

  return (
    <div>
      <div className="relative mt-7 w-full">
        <img
          src={coverImg}
          alt="cover_image"
          className="w-full h-20 object-cover rounded-t-lg px-16"
        />
        <div className="absolute -bottom-27 left-1/2 transform -translate-x-1/2 w-max text-center">
          <Avatar
            border="3px solid orange"
            name={`${user?.firstName} ${user?.lastName}`}
            size="2xl"
            className="ring-2 ring-white mx-auto"
          />
          <p className="font-bold text-lg pt-3 whitespace-nowrap">
            {`${user?.firstName} ${user?.lastName}.`}
          </p>
          <p className="whitespace-nowrap text-gray-500">{profile?.email}</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-200 px-10 py-4 mx-16 mt-40 shadow-sm">
        <button
          style={{
            borderBottom:
              activeTab === "account" ? "2px solid #10B981" : "none",
            color: activeTab === "account" ? "#059669" : "#6B7280",
          }}
          className="pb-3 px-1 transition-colors hover:text-gray-700 relative"
          onClick={() => setActiveTab("account")}
        >
          <p className="font-semibold">Account</p>
        </button>
        <Divider orientation="vertical" height={10} />
        <button
          style={{
            borderBottom:
              activeTab === "history" ? "2px solid #10B981" : "none",
            color: activeTab === "history" ? "#059669" : "#6B7280",
          }}
          className="pb-3 px-1 transition-colors hover:text-gray-700 relative"
          onClick={() => setActiveTab("history")}
        >
          <p className="font-semibold">History</p>
        </button>
        <Divider orientation="vertical" height={10} />
        <button
          style={{
            borderBottom:
              activeTab === "payment" ? "2px solid #10B981" : "none",
            color: activeTab === "payment" ? "#059669" : "#6B7280",
          }}
          className="pb-3 px-1 transition-colors hover:text-gray-700"
          onClick={() => setActiveTab("payment")}
        >
          <p className="font-semibold">Payment Methods</p>
        </button>
      </div>
      <div className="mx-16 mt-6">
        <div>
          {activeTab === "account" && <Account data={profile} />}
          {activeTab === "history" && <History />}
          {activeTab === "payment" && <PaymentMethods />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
