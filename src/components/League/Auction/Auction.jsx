import AuctionItem from "./AuctionItem";
import AuctionPanel from "./AuctionPanel";

const Auction = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-12 md:col-span-3">
          <AuctionItem  />
        </div>
        <div className="col-span-12 md:col-span-9">
          <AuctionPanel />
        </div>
      </div>
    </div>
  );
};

export default Auction;
