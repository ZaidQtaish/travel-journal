/* eslint-disable react/prop-types */
export default function Entry({ entry }) {
  return (
    <div className="entry">
      <img className="entry-img" src={entry.img.src} alt={entry.img.alt} />
      <div className="entry-info">
        <div className="entry-top">
          <img
            className="entry-marker"
            src="../../public/images/marker.png"
            alt="marker"
          />
          <span className="span-location">{entry.country}</span>
          <a target="_blank" href={entry.googleMapsLink}>
            View on Google Maps
          </a>
        </div>
        <h1>{entry.title}</h1>
        <span className="span-date">{entry.dates}</span>
        <p>{entry.text}</p>
      </div>
    </div>
  );
}
