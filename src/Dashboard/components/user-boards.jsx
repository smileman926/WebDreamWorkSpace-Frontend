import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
//import {StarBorder} from '@material-ui/icons/StarBorder';

import BoardCard from './board-card';

const CardOverview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default function UserBoard() {
    return (
        <div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Recently Viewed</span>
                </div>
                <CardOverview>
                    <BoardCard cardContent="New Test Automation Development Projecasdfasdfdsft" />
                    <BoardCard cardContent="Research Project" />
                    <BoardCard cardContent="Teamwork" />
                    <BoardCard cardContent="Create new board" />
                </CardOverview>
            </div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Personal Boards</span>
                </div>
                <CardOverview>
                    <BoardCard cardContent="Teamwork" />
                    <BoardCard cardContent="Create New Board" />
                </CardOverview>
            </div>
        </div>
    )
}