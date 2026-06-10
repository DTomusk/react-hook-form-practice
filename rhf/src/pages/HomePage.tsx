import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
                Home Page
            </div>
            <Link to="/text-submit">1. Text input with submit</Link>
            <Link to="/text-validation">2. Text input with validation</Link>
            <Link to="/input-components">3. Input components</Link>
            <Link to="/generic-input-components">4. Generic Input components</Link>
            <Link to="/radix-component-form">5. Radix UI components</Link>
        </div>
    )
}