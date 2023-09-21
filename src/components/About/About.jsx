import "./About.css";

const About = ({ hero }) => {
  return (
      <div className="about">
      {hero.aboutMe.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default About;