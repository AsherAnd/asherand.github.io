import { ProjectCard } from "./Cards";
import { ExperienceCard } from "./Cards";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";

function ProjectGallery(props) {
  return (
    <>
      <motion.div layout className="projects-gallery">
        {props.projects?.map((project, i) => {
          return (
            <ProjectCard
              img={project.thumbnail}
              alt="image"
              title={project.title}
              largeImg={project.image}
              link={"/projects/" + project.title}
              key={i}
            />
          );
        })}
      </motion.div>
    </>
  );
}

function ExperienceGallery(props) {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className}"> </span>`;
    },
  };

  return (
    <div className="experience-gallery">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={pagination}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {props.experience?.map((experience, i) => {
          return (
            <SwiperSlide key={i}>
              <ExperienceCard
                title={experience.position}
                img={experience.image}
                alt={experience.company}
                desc={experience.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export { ProjectGallery, ExperienceGallery };
