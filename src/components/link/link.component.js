import React from "react";
import './link.style.css';

export const Link = (props) => {
    const {
        link,
        title,
        image
    } = props;

    return (
        <div className="link-wrapper">
            <img src={image} alt={title}/>
            <a href={link} target="_blank" rel="noreferrer">{title}</a>
            <span/>
        </div>
    )
};