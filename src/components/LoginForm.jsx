import { useState } from 'react';
import '../styles/loginPage.css';
import { FaKey, FaUser, FaUnlock } from "react-icons/fa";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Log in</h1>
                <h2>Enter your credentials to sign in to the app manager panel</h2>
                <div>
                    <label htmlFor="username"><FaUser className="icon"/>Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"><FaKey className="icon"/>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In<FaUnlock className="icon"/></button>
            </form>
        </div>
    );
}