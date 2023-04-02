import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
        <h3>This is the about page</h3>
        <p>this is an app to leave some feedback</p>
        <Link to='/'>
            <p>Back to home</p>
        </Link>
        </div>
    </Card>
  )
}

export default AboutPage