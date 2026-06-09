import { useNavigate } from "react-router-dom";

export default function BackLink() {
    const navigate = useNavigate();
    return (
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Back to home</a>
    )
}