import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
                Home Page
            </div>
            <Link to="/text-submit">1. Text input with submit</Link>
            <Link to="/text-validation">2. Text input with validation</Link>
        </div>
    )
}