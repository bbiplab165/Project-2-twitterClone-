// import React from "react";
// import "./style.css";
import "./What.css"

function WhatsHappeningPage() {
    const tweets = [
        {
            id: 1,
            content: "Just had the best pizza ever! 🍕👌",
            user: "Ajay Devgan",
            date: "April 30, 2023",
        },
        {
            id: 2,
            content: "Excited to start my new job tomorrow! 🎉",
            user: "Marry Jane",
            date: "April 29, 2023",
        },
        {
            id: 3,
            content: "What's your favorite movie of all time? 🍿🎥",
            user: "John Snow",
            date: "April 28, 2023",
        },
    ];

    function Tweet({ tweet }) {
        return (
            <div className="tweet">
                <div className="tweet-content">{tweet.content}</div>
                <div className="tweet-info">
                    {tweet.user} - {tweet.date}
                </div>
            </div>
        );
    }

    return (
        <div className="whats-happening-page">
            <h1>What's Happening</h1>
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
}

export default WhatsHappeningPage;
