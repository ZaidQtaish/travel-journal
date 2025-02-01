/* eslint-disable react/prop-types */
export default function Entry(props) {
  return (
    <div className="entry">
      <img className="entry-img" src={props.img.src} alt={props.img.alt} />
      <div className="entry-info">
        <div className="entry-top">
          <img
            className="entry-marker"
            src="../../public/images/marker.png"
            alt="marker"
          />
          <span className="span-location">{props.country}</span>
          <a target="_blank" href={props.googleMapsLink}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className="span-date">{props.dates}</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
