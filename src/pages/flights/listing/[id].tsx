import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../api";
import { Iflight } from "../../../lib/types";
import Footer from "../../../components/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "lucide-react";
import FlightDetailsComponent from "../../../features/flights/details";

export default function FlightListingDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [flightDetails, setFlightDetails] = useState<Iflight>();

    useEffect(() => {
        const flightDetails = async () => {
            try {
                const response = await api.get(`/api/flight/${id}`);
                setFlightDetails(response.data);
            } catch (err) {
                console.error(err)
            }
        };
        flightDetails();
    }, [id]);

    if (!flightDetails) {
        return <p>Flight not found</p>;
    }

    return (
        <div className="bg-gray-100 h-[100%]">
            <Breadcrumb pt={6} px={16} spacing='8px' separator={<ChevronRightIcon color='black' size={15} />}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate(-1)}>Listing</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink color='#FF8682'>{flightDetails.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <FlightDetailsComponent flightDetails={flightDetails} />
            <Footer />
        </div>
    );
}
