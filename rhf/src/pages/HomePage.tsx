import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div>
                Home Page
            </div>
            <Link to="/text-submit">1. Text input with submit</Link>
        </>
    )
}