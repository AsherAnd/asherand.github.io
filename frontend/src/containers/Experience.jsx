import { Heading, SubHeading } from "../components/Headings";
import { ExperienceGallery } from "../components/Gallery";
import { useEffect, useState } from "react";

function Experience() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    fetch(`${process.env.REACT_APP_API_URL}/experience`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExperience(data);
      });
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-title">
          <SubHeading text="Experience"></SubHeading>
          <Heading first="What I Learned" second="What I Gained"></Heading>
        </div>
        {experience && <ExperienceGallery experience={experience} />}
      </div>
    </section>
  );
}

export default Experience;
