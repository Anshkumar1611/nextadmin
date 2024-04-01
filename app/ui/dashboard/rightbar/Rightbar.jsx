import { rightBar } from "@/app/utils/data";
import RightBarCard from "../../common/cards/RightBarCard";

const Rightbar = () => {
  return (
    <div className="fixed">
      {rightBar.map((item) => (
        <RightBarCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Rightbar;
