import { useState, useEffect } from "react";
import Price from "./Price";
import Results from "./Results";

const COIN_GECKO_API = "https://api.coingecko.com/api/v3/coins";
const ADA_ID = "binance-peg-cardano";

const PriceInputs = () => {
  const [priceInputA, setPriceInputA] = useState("");
  const [priceInputB, setPriceInputB] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  const submitForm = (event) => {
    setShowResult(true);
  };

  const allowOnlyNumbers = (event) => {
    if (!/[0-9]*\.?[0-9]*/.test(event.key)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    fetch(`${COIN_GECKO_API}/${ADA_ID}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPrice(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label htmlFor="priceInputA">
          Player A Price:
          <input
            name="firstPlayer"
            id="priceInputA"
            type="number"
            onKeyPress={(event) => allowOnlyNumbers(event)}
            value={priceInputA}
            placeholder="Input Price"
            onChange={(e) => {
              setPriceInputA(e.target.value);
              return setShowResult(false);
            }}
          />
        </label>
        <label htmlFor="princeInputB">
          Player B Price:
          <input
            name="secondPlayer"
            id="priceInputB"
            onKeyPress={(event) => allowOnlyNumbers(event)}
            value={priceInputB}
            placeholder="Input Price"
            onChange={(e) => {
              setPriceInputB(e.target.value);
              return setShowResult(false);
            }}
          />
        </label>
        <button>Submit</button>
        {showResult && <Results bets={[priceInputA, priceInputB]} />}
      </form>
      {showResult &&
        (error ? (
          <div>Current price could not pe retrieved</div>
        ) : (
          <div>
            The current price is: <Price price={price} />
          </div>
        ))}
    </div>
  );
};

export default PriceInputs;
