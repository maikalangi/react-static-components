import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import Average from "./components/Average-Rating"
import Sentiment from "./components/Sentiment-Analysis";
import Visitors from "./components/Website-Visitors";
import "./styles.css"

function App() {
  return (
    <div className="container1">
      <div className="box1">
      <Dashboard />
      </div>
      <div className="container2">
      <div className="box2">
      <Reviews reviews="1,281"/>
      <Average rating="4.6"/>
      <Sentiment data="960 122 321"/>
      </div>
      <Visitors visitors="821"/>
      </div>
    </div>
  );
}

export default App;