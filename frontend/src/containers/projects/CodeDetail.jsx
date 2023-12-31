function CodeDetail(props) {
  return (
    <>
      <div className="container">
        <h1 className="project-desc-heading heading">
          <i
            className="fa-solid fa-arrow-left back-btn"
            onClick={props.back}
          ></i>
          <span className="project-desc-title">{props.project.title}</span>
        </h1>
        <div className="project-desc-image">
          <div className="container">
            <figure>
              <img src={props.project.image} alt={props.project.title} />
              <figcaption>
                {" "}
                <a
                  href={props.project.original}
                  className="highlight"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here to Check Out Demo!
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
        <br />
        <p
          className="project-desc-text text"
          dangerouslySetInnerHTML={{ __html: props.project.description }}
        ></p>
      </div>
    </>
  );
}

export default CodeDetail;
