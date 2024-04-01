import { tableHeadings, transactions } from "@/app/utils/data";
import Image from "next/image";
const Transactions = () => {
  return (
    <section className="bg-secondary p-4 rounded-md">
      <h2 className="text-lg my-2">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-start">
            {tableHeadings.map((heading, i) => (
              <th key={i} className="text-start py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            const transactionStatus = transaction.status;
            let backgroundStatus;
            if (transactionStatus == "pending") {
              backgroundStatus = "pending";
            } else if (transactionStatus == "done") {
              backgroundStatus = "done";
            } else {
              backgroundStatus = "cancelled";
            }
            return (
              <tr
                className="text-sm text-start hover:bg-links cursor-pointer rounded-lg"
                key={transaction.id}
              >
                <td className="flex gap-2 items-center justify-start py-2">
                  <Image
                    src="/astronaut.png"
                    alt="pic"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  {transaction.name}
                </td>
                <td>
                  <span
                    className={`text-xs p-1 px-2 bg-${backgroundStatus} rounded-md`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-2 ">{transaction.date}</td>
                <td className="py-2">$ {transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
