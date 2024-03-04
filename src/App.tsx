import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="gallery">
      <Card imageDir="/images/lakeview-elegance.png" />
      <Card imageDir="/images/skyline-oasis.png" />
      <Card imageDir="/images/villa-verde.png" />
      <Card imageDir="/images/vista-paradiso.png" />
    </div>
  );
}

export default App;
