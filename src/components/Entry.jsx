export default function Entry () {
    return(
        <div className='entry'>
            <img className='entry-img' src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
            <div className='entry-info'>
                <div className='entry-top'>
                    <img className='entry-marker' src='../../public/images/marker.png' alt='marker'/>
                    <span className='span-location'>JAPAN</span>
                    <a target='_blank' href='https://tinyurl.com/5e3xrf2c'>View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <span className='span-date'>12 Jan, 2021 - 24 Jan, 2021</span>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}