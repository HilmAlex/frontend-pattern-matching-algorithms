import React from "react";

const style = {
    container: {
        minHeight: "15vh"
    }
}

export const Header = () => {
    return (
        <header className="container" style={style.container}>
            <h1 className="text-center fs-1 fw-bold mt-4">Pattern Matching Algorithms</h1>
            <h2 className="text-center fs-2 fw-bold">Performance</h2>
        </header>
    );
};
