import Card from "~/components/Card";
import { CardProps } from "~/interfaces/item";
import BalanceIcon from "~/icons/balance";
import IncomeIcon from "~/icons/income";
import ExpensesIcon from "~/icons/expenses";
import SavingIcon from "~/icons/saving";

import "../styles/content.css";

function Content() {
  const cardList: CardProps[] = [
    { icon: <BalanceIcon />, label: "Balance", value: 41210 },
    { icon: <IncomeIcon />, label: "Income", value: 41210 },
    { icon: <ExpensesIcon />, label: "Expenses", value: 41210 },
    { icon: <SavingIcon />, label: "Savings", value: 41210 },
  ];
  return (
    <div className="content">
      <div className="card-list">
        {cardList &&
          cardList.map((item: CardProps, index: number) => (
            <Card key={`card-${index}`} data={item} />
          ))}
      </div>
    </div>
  );
}

export default Content;
