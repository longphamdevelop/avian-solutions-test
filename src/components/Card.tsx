import { CardProps } from "~/interfaces/item";
import { display } from "~/utils/format";

function Card({ data }: { data: CardProps }) {
  return (
    <div className="card">
      <div className="card-icon">{data.icon}</div>
      <div className="card-info">
        <p className="card-label">{data.label}</p>
        <p className="card-price">${display(data.value)}</p>
      </div>
    </div>
  );
}

export default Card;
