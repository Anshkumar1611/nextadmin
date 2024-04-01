const Cards = ({ item }) => {
  return (
    <div className="flex justify-start gap-4 flex-1 bg-secondary p-4 rounded-md hover:bg-links cursor-pointer min-w-64">
      <div>{item.icon}</div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">{item.title}</p>
        <h2>{item.users}</h2>
        <div>
          <span
            className={`text-xs ${
              item.percentage < 10 ? "text-red-600" : "text-green-500"
            } `}
          >
            {item.percentage}%
          </span>
          <span className="text-xs"> {item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
