import React from "react";
import { authService } from "fbInstance";
import { useHistory } from "react-router-dom";

export default () => {
    const onLogOutClick = () => {
        authService.signOut();
        useHistory.push("/");
    };
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};