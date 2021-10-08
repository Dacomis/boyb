import logo from "./logos/logo.svg";
import cardano_logo from "./logos/cardano_logo.svg";
import singularity_logo from "./logos/singularity_logo.svg";
import ergo_logo from "./logos/ergo_logo.svg";
import coti_logo from "./logos/coti_logo.svg";
import "./App.scss";
import PriceInputs from "./PriceInputs";
import CoinWihLogo from "./logos/CoinWihLogo";

function App() {
  return (
    <div className="App">
      <header>
        <img src={cardano_logo} className="App-logo" alt="logo" />
        <div>Bet on Your Price Beliefs</div>
      </header>
      <main>
        {/* <PriceInputs /> */}
        <div className="coin">
          <img src={cardano_logo} className="coin_logo" alt="cardano_logo" />
          <div className="name">Cardano</div>
        </div>
        <div className="coin">
          <img src={coti_logo} className="coin_logo" alt="coti_logo" />
          <div className="name">Coti</div>
        </div>
        <div className="coin">
          <img src={ergo_logo} className="coin_logo" alt="ergo_logo" />
          <div className="name">Ergo</div>
        </div>
        <div className="coin">
          <img
            src={singularity_logo}
            className="coin_logo"
            alt="singularity_logo"
          />
          <div className="name">Singularity Net</div>
        </div>

        <CoinWihLogo data={"Cardano"} />
      </main>
    </div>
  );
}

export default App;
