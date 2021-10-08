import NumberFormat from "react-number-format";

const Results = ({ bets }) => {
  return (
    <div className="results">
      <div>
        <div className="result">
          1st Player bet:
          <NumberFormat
            value={bets[0]}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div className="result">
          2nd Player bet:
          <NumberFormat
            value={bets[1]}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
