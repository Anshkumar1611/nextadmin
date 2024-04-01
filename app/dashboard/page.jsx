import { Chart, Rightbar, Transactions } from "../ui";
import Cards from "../ui/common/cards/Cards";
import { dashboardCards } from "../utils/data";

const Dashboard = () => {
  return (
    <div className="flex justify-start gap-8">
      <div className="flex flex-col gap-4 flex-1">
        <section className="flex flex-row justify-between gap-4">
          {dashboardCards.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </section>
        <section>
          <Transactions />
        </section>
        <section>
          <Chart />
        </section>
      </div>
      <section className="basis-1/4 relative">
        <Rightbar />
      </section>
    </div>
  );
};

export default Dashboard;
