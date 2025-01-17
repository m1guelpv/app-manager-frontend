import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { FaKey } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { login } from '../services/AuthService.js';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login({ email, password });
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Sign in</h1>
                    <h2>Enter your credentials to sign in to the app manager panel</h2>
                </div>
                {error && (
                    <div className="error">
                        <label><IoIosWarning />Error</label>{error}
                    </div>
                )}
                <div>
                    <label htmlFor="email"><MdEmail className="icon" />Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"><FaKey className="icon" />Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>
                <button type="submit">Log In</button>
                <div className="footer">
                    <a href="/forgot-password">Forgot your password?</a>
                    <Link to="/register">Dont have an account? Sign up</Link>
                </div>
            </form>
        </div>
    );
}