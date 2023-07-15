import { Heading, SubHeading } from "../components/Headings";
import { ExperienceGallery } from "../components/Gallery";
import { useEffect, useState } from "react";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    const data = await fetch(
      "https://personal-site-51a24-default-rtdb.firebaseio.com/experience.json"
    );
    const experienceJson = await data.json();
    setExperience(experienceJson);
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-title">
          <SubHeading text="Experience"></SubHeading>
          <Heading first="What I Learned" second="What I Gained"></Heading>
        </div>
        <ExperienceGallery experience={experience} />
      </div>
    </section>
  );
}

export default Experience;
