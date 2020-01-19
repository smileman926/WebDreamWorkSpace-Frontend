import React, {useState} from "react"
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import "./board-card.css";

const Card = styled.div`
    position: relative;
    border-radius: 4px;
    height: 90px;
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
const POST_MUTATION = gql`
  mutation PostMutation($id: String!, $star: Boolean!) {
    addStar(id: $id, star: $star) {
      _id
      isStarred
    }
  }
`
export default function BoardCard({_id, title, backgroundImageUrl, isStarred}) {
    
    const id = _id;
    const star = isStarred;
    return (

        <Card style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <CardTitle>{title}</CardTitle>
            <Mutation mutation={POST_MUTATION} variables={{id, star}}>
              {postMutation => <span className="user-board-star" onClick={postMutation}>{isStarred ? <StarIcon style={{ borderColor: 'yellow' }}/> : <StarBorderIcon />}</span>}
            </Mutation>
            
        </Card>
    )

}