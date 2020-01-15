import React from "react"
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import "./board-card.css";

const Card = styled.div`
    position: relative;
    border-radius: 4px;
    height: 90px;
    background-color: green;
    text-align: center;
    overflow: hidden;
    &:hover {
        opacity: .8;
    }
    &:hover .user-board-star {
        right: 0;
    }
`

const CardTitle = styled.div`
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    color: white;
`
const IconStar = styled.div`
    display: contents;
    position: absolute;
    right: -35px;
    bottom: 5px;
    font-size: 16px;
    transition: right .3s;
    &:hover {
        right: 0;
    }
`

export default function BoardCard(props) {
    
    // const isLike = false
    const [Like,setLike]=React.useState()
    const str = props.cardContent;
    const handleClick = (e)=> {
        e.preventDefault()
        setLike(!Like)  
        props.func(str, Like);
        //console.log(Like)
    }

    return (

        <Card>
            <CardTitle>{props.cardContent}</CardTitle>
            <span className="user-board-star" onClick={handleClick}>{Like ? <StarIcon/> : <StarBorderIcon />}</span>
        </Card>
    )

}