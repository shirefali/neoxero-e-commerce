const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full border-1 border-gray-200 flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h1 className="text-lg md:text-2xl my-3 font-semibold capitalize">
        {title}
      </h1>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default ServiceCard;
