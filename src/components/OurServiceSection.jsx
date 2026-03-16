import { Banknote, Lock, PhoneCall, Truck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const OurServiceSection = () => {
  return (
    <section className=" px-4">
      <div className="container max-w-[1152px] mx-auto py-15 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Truck />}
            title="free shipping"
            desc="Order above $200"
          />
          <ServiceCard
            icon={<Banknote />}
            title="money-back"
            desc="30 days guarantee"
          />
          <ServiceCard
            icon={<Lock />}
            title="secure payments"
            desc="Secured by Stripe"
          />
          <ServiceCard
            icon={<PhoneCall />}
            title="24/7 support"
            desc="Phone and Email support"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
