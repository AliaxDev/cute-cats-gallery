import ProfilePicture from "./ProfilePicture";
import Name from "./Name";
import Description from "./Description";
import ScrollArrow from "./ScrollArrow";
import "../style/hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <ProfilePicture />
        <Name />
        <Description />
        <ScrollArrow />
      </div>
    </>
  );
}
export default Hero;
