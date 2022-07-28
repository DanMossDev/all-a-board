import './ErrorPage.css'
import { Link } from "react-router-dom";
import modcheck from '../../images/modcheck.gif'

export default function ErrorPage() {
    return <>
        <h2 className="return-home">404: Uh oh, looks like that page doesn't exist! <Link to="/all-a-board/reviews">Click here to return home</Link></h2>
        <img className="uh-oh" src={modcheck}/>
    </>
}