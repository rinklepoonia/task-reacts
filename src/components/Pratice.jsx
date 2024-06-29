import React, { useState } from "react";

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("right");
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain letters and numbers"
            );
        } else {
            setPasswordError("right");
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                validateEmail();
                validatePassword();
            }}
        >
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={validateEmail}
                />
                {emailError && <span>{emailError}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={validatePassword}
                />
                {passwordError && <span>{passwordError}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default App;