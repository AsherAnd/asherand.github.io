import CoverImages from "../assets/images";

function ComicCover(props) {
  return (
    <>
      <div className="comic-cover shine"></div>
      <img
        src={
          props.theme === "dark" ? CoverImages.FullDark : CoverImages.FullLight
        }
        alt="Comic book portrait of Asher Andargachew"
        className="comic-cover full"
      />
    </>
  );
}

export default ComicCover;
