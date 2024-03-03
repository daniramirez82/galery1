import "./Card.css";

interface Props {
    imageDir: string;
}

function Card(props: Props) {
  return <div>
    <figure className="card">
     <img src= {props.imageDir}></img>
    </figure>
  </div>;
}

export default Card;