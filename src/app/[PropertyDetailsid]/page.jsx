import BookingForm from "@/components/PropertyDetail/BookingForm";
import CoverSection from "@/components/PropertyDetail/CoverSection";
import Details from "@/components/PropertyDetail/Details";


export default function PropertyDetails() {
    return (
      <main className="w-full h-auto">
       <CoverSection />
       <Details />
       <BookingForm />
      </main>
    )
  }