
const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img className ="imageIndex" src={place.pic} alt={place.name}/>
          <div className="text-center">
            Photo by <a href={place.cred}>{place.credName}</a> on <a href={place.photoLink}>Unsplash</a>
          </div>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
}

module.exports = index
  