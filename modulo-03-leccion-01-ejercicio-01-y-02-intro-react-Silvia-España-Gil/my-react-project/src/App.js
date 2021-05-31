import profileImage from "./Gandalf_sonriendo.jpg";

import "./App.css";

function App() {
  const cardRoot = (
    <div className="page">
      <section className="card">
        <div className="card-header">
          <img src={profileImage} className="card-image" alt="Profile" />
          <div className="card-dateName">
            <h2 className="card-name">Mithrandir aka Gandalf</h2>
            <small className="card-date">Year 3018 - Third Age</small>
          </div>
        </div>
        <p className="card-paragraph">
          "All that is gold does not glitter, not all those who wander are lost;
          the old that is strong does not wither, deep roots are not reached by
          the frost. From the ashes a fire shall be woken, a light from the
          shadows shall spring; renewed shall be blade that was broken, the
          crownless again shall be king."
        </p>
        <div className="card-likes">
          <small className="card-likesNumber">
            Elessar and other people likes this
          </small>
          <i className="fas fa-heart fa-lg class-likes-icon"></i>
        </div>
      </section>
    </div>
  );
  return cardRoot;
}

export default App;
