import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItemsId = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bagItemsId.includes(item.id));
  return (
    <main>
      <div className="bag-page">
        {bagItems.map((bag) => (
          <BagItem key={bag.id} item={bag} />
        ))}
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
