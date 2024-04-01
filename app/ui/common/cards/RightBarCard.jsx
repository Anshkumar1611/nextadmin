const RightBarCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gradient-to-t from-gradientDark to-gradientLight mb-4 mr-4 rounded-md ">
      <p className="font-medium text-sm">{item.title}</p>
      <p className="font-medium">{item.purpose}</p>
      <p className="text-xs text-soft">{item.time}</p>
      <p className="text-xs text-soft">{item.description}</p>
      <button className="flex justify-start items-center gap-2 bg-[#5d57c9] p-2 rounded cursor-pointer w-max">
        {item.icon}
        {item.button}
      </button>
    </div>
  );
};

export default RightBarCard;
