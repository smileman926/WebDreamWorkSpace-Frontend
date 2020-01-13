import React from 'react'
import styled from 'styled-components';
import {StarBorder} from '@material-ui/icons/StarBorder';

const Card = styled.div`
    position: relative;
    border-radius: 4px;
    height: 90px;
    background-color: green;
    text-align: center;
    &:hover {
        opacity: .8;
    }
    &:hover .icon-star {
        right: 0;
    }
`

const CardTitle = styled.div`
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    color: white;
`
const IconStar = styled.p`
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

export default function BoardCard({isTemplate, cardContent}) {
    return (
        <Card>
            <CardTitle>{cardContent}</CardTitle>
            <IconStar>T</IconStar>
        </Card>
    )
}