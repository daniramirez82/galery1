import "./Card.css";

interface Props {
    imageDir: string;
}

function Card(props: Props) {
  return <div className="card">
    <figure className="card-in">
     <img className="image" src= {props.imageDir}></img>
    </figure>
  </div>;
}

export default Card;