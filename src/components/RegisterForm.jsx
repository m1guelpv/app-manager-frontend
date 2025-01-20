import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { FaKey, FaUserPlus } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { register } from '../services/AuthService.js';
import {FiEye, FiEyeOff} from "react-icons/fi";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register({ firstName, lastName, email, password });
            navigate('/login');
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
                    <h1>Sign up</h1>
                    <h2>Create your account to access the app manager panel</h2>
                </div>
                {error && (
                    <div className="error">
                        <label><IoIosWarning />Error</label>{error}
                    </div>
                )}
                <div>
                    <label htmlFor="firstName"><FaUserPlus className="icon"/>First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName"><FaUserPlus className="icon"/>Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email"><MdEmail className="icon"/>Email</label>
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
                    <label htmlFor="password"><FaKey className="icon"/>Password</label>
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
                            {showPassword ? <FiEyeOff/> : <FiEye/>}
                        </button>
                    </div>
                </div>
                <button type="submit">Register</button>
                <div className="footer">
                    <a href="/login">Already have an account? Sign in</a>
                </div>
            </form>
        </div>
    );
}