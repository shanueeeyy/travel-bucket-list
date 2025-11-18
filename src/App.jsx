import './App.css'

function App() {

  // Data for your destinations (You can edit these!)
  const destinations = [
    {
      id: 1,
      name: "Kyoto",
      location: "Japan (Asia)",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=60",
      attraction: "Fushimi Inari Shrine",
      reason: "I have always been fascinated by Japanese history and architecture. Walking through the thousands of torii gates seems like a spiritual and visually stunning experience."
    },
    {
      id: 2,
      name: "Reykjavik",
      location: "Iceland (Europe)",
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=500&q=60",
      attraction: "The Northern Lights",
      reason: "Seeing the Aurora Borealis is the top item on my bucket list. I also want to experience the unique geothermal spas and volcanic landscapes."
    },
    {
      id: 3,
      name: "Machu Picchu",
      location: "Peru (South America)",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=500&q=60",
      attraction: "Inca Ruins",
      reason: "The mystery of the Inca civilization intrigues me. Hiking the trail to reach the summit at sunrise would be a physically challenging but rewarding adventure."
    },
    {
      id: 4,
      name: "Santorini",
      location: "Greece (Europe)",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=60",
      attraction: "Oia Sunsets",
      reason: "I want to relax by the Mediterranean sea and enjoy the famous white and blue architecture. The local cuisine and history are also major draws for me."
    }
  ];

  return (
    <div className="app-container">
      
      {/* 1. Header Section */}
      <header className="hero">
        <h1>My Dream Destinations</h1>
        <p>Exploring the World, One Dream at a Time</p>
      </header>

      <main>
        {/* 2. About Section */}
        <section className="about-section">
          <h2>About My Travel Dreams</h2>
          <p>
            Ever since I was a child, I've been obsessed with seeing what lies beyond the horizon. 
            Travel for me isn't just about sightseeing; it's about immersing myself in new cultures 
            and stepping out of my comfort zone. I am motivated by the stories of people I meet 
            and the stunning natural beauty our planet has to offer.
          </p>
        </section>

        {/* 3. Destinations Section */}
        <section className="destinations-section">
          <h2>Top 4 Dream Destinations</h2>
          <div className="cards-grid">
            {destinations.map((place) => (
              <div key={place.id} className="card">
                <img src={place.image} alt={place.name} className="card-img" />
                <div className="card-content">
                  <h3>{place.name}</h3>
                  <span className="location">{place.location}</span>
                  <p><strong>Main Attraction:</strong> {place.attraction}</p>
                  <p className="reason">"{place.reason}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Travel Goals Section */}
        <section className="goals-section">
          <h2>My Travel Goals</h2>
          <ul className="goals-list">
            <li>Visit all 7 continents before I turn 40.</li>
            <li>Learn to cook a traditional dish in 5 different countries.</li>
            <li>Backpack solo through Southeast Asia for a month.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 My Travel Bucket List. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App