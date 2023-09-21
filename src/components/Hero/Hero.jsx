import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt= "portrait" />
      <div className="card">
        <h2>
          {hero.name} {hero.adress}
        </h2>
        <p>🗺{hero.city} </p>
        <p>🗓{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>goabad18@outlook.com</a>
        </p>
       
        <p>
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;