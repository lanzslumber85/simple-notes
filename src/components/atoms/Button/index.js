import React from "react";

const Button = ({ onClick, title, loading }) => {
    if (!loading) {
        return (
            <div>
                <button className="btn" onClick={onClick}>
                    {title}
                </button>
            </div>
        );
    }

    return (
        <div>
            <button className="btn disable">Loading...</button>
        </div>
    );
};

export default Button;
