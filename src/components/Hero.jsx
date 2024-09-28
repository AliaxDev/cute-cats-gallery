import { ProfilePicture } from "./ProfilePicture"
import { Name } from "./Name"
import { ScrollArrow } from "./ScrollArrow"
import "../style/hero.css"
import { Description } from "./Description"

export default function Hero() {

    return <>
        <div className="hero">
            <ProfilePicture />
            <Name />
            <Description />
            <ScrollArrow />
        </div>
    </>
}