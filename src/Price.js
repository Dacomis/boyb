import NumberFormat from "react-number-format";

const Price = (price) => {
  console.log(`currentPrice`, price.price.market_data.current_price.usd);
  return (
    <div>
      <NumberFormat
        value={price.price.market_data?.current_price.usd}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Price;
