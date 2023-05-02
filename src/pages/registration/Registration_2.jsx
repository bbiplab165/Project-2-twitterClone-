import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Registration_2.module.css";

function RegistrationPage() {
    const navigate = useNavigate();
    const [registrationError, setRegistrationError] = useState("");
    const [isUsingEmail, setIsUsingEmail] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthYear, setBirthYear] = useState("");


    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function handleBirthDayChange(e) {
        setBirthDay(e.target.value)
    }
    function handleBirthMonthChange(e) {
        setBirthMonth(e.target.value)
    }
    function handleBirthYearChange(e) {
        setBirthYear(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email && phoneNumber.length < 10) {
            setRegistrationError("Please enter a valid Email or phone number");
            return;
        }
        if (password.length < 6) {
            setRegistrationError(
                "Password must be min one Capital letter,min one digit & min 6 letter"
            );
            return;
        }

        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!regEmail.test(email) && email !== "") {
            setRegistrationError("Email is Not Valid");
            return;
        }
        const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];

        if (phoneNumber) {
            const existingPhoneNumber = storedUsers.find(
                (user) => user.phoneNumber === phoneNumber
            );
            if (existingPhoneNumber) {
                setRegistrationError("Phone number already exists");
                return;
            }
        }

        if (email) {
            const existingEmail = storedUsers.find(
                (user) => user.email === email
            );
            if (existingEmail) {
                setRegistrationError("Email already exists");
                return;
            }
        }

        console.log(storedUsers);

        const userData = {
            name,
            password,
            active: {
                isActive: false,
            },
            birthMonth,
            birthYear,
            birthDay,
            ...(email ? { email: email } : { phoneNumber: phoneNumber }),
        };
        console.log(userData)
        const updatedUsers = [...storedUsers, userData];

        const confirmation = window.confirm(
            "User registered successfully! Click OK to go to home page."
        );
        if (confirmation) {
            localStorage.setItem("userData", JSON.stringify(updatedUsers));
            navigate("/login");
        }
    };
    const handleUseEmailInstead = () => {
        setIsUsingEmail((prevIsUsingEmail) => !prevIsUsingEmail);
    };

    const monthOptions = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className={Style.Registration_2Background}>
            <div className={Style.Registration_2}>
                <h1>Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={handleNameChange}
                    />
                    <br />
                    {!isUsingEmail && (
                        <input
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    )}

                    {isUsingEmail && (
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    )}
                    <span onClick={handleUseEmailInstead}>
                        {isUsingEmail ? `Use phone instead ` : "Use email instead"}
                    </span>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={handlePasswordChange}
                    />

                    <br />
                    <label>
                        Date of birth:
                        <p>
                            This will not be shown publicly. Confirm your own age, even if this
                            account is for a business, a pet, or something else.
                        </p>
                        <select
                            name="birthMonth"
                            value={birthMonth}
                            onChange={handleBirthMonthChange}
                        >
                            <option value="">Month</option>
                            {monthOptions.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            name="birthDay"
                            value={birthDay}
                            onChange={handleBirthDayChange}
                            className={Style.middleSelect}
                        >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (element, i) => i + 1).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                        <select
                            name="birthYear"
                            value={birthYear}
                            onChange={handleBirthYearChange}
                        >
                            <option value="">Year</option>
                            {Array.from(
                                { length: 100 },
                                (element, i) => new Date().getFullYear() - i
                            ).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />
                    {registrationError && (
                        <p className={Style.error}>{registrationError}</p>
                    )}
                    <br />
                    <button type="submit" className={Style.subButton}>
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
