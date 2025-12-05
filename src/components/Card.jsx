export default function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link} target="_blank" className="card-button">
        Ver projeto
      </a>
    </div>
  );
}
