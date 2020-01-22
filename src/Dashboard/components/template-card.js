import React, {useState} from "react"
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {connect} from "react-redux";
import {addInfo} from "../../store/action/actions";
import "./board-card.css";
import {Link} from "react-router-dom";

const Card = styled.div`
    position: relative;
    border-radius: 4px;
    height: 90px;
    text-align: center;
    overflow: hidden;
    &:hover {
        opacity: .8;
    }
    &.symbol_img {
        position: absolute;
        left: 0;
        bottom: 0;
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
const CardAuthor = styled.p`
    font-size: 10px;
    font-color: grey;

`
const SymbolImg = styled.img`
    position: relative;
    left: 15px;
    top: -30px;
    z-index: 10;
`

export default function BoardCard(props) {
    
    const {_id, backgroundImageUrl, isTemplate, templateType,author, brief, symbolIconUrl, title, linkUrl} = props
    
    return (
        <div>
            <Link to={`/${templateType}/${_id}`}>
                <Card style={{height: '150px', backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: '100% 100%'}}>
                    
                </Card>
                <SymbolImg className="symbol_img" src={`${symbolIconUrl}`} alt="symbol" />
            </Link>
            <CardTitle>{title}</CardTitle>
            <CardAuthor>{author}</CardAuthor>
            <p>{brief}</p>
        </div>
       
    )

}

// const mapStateToProps = (state, ownProps) => {
//     const info = {
//         _id: ownProps._id,
//         title: ownProps.title,
//         backgroundImageUrl: ownProps.backgroundImageUrl,
//         isStarred: ownProps.isStarred
//     }
//     return {
//         auth: state.auth,
//         info: info
//     }   
// }
//  const mapDispatchToProps = dispatch=> {
//     return {
//         addInfo: (a)=>dispatch(addInfo(a))
       
//     }
//  }
//  export default connect(mapStateToProps, mapDispatchToProps)(BoardCard);