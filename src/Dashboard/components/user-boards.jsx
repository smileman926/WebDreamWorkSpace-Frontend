import React from "react"
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
//import {StarBorder} from "@material-ui/icons/StarBorder";
 import {addRecent, addStar} from "../../store/action/dashboardActions"
import BoardCard from "./board-card";
import {connect} from "react-redux";
import gql from "graphql-tag";
import {Query} from "react-apollo";

const CardOverview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
const GET_PUREBOARDS = gql`
query {
    pureBoards {
        title
        backgroundImageUrl
        isStarred
    }
}
`;
const GET_RECENTBOARDS = gql`
query {
    recentBoards {
        title
        backgroundImageUrl
        isStarred
    }
}
`;
// const GET_STARREDBOARDS = gql`
// query {
//     pureBoards {
//         title
//         backgroundImageUrl
//         isStarred
//     }
// }
// `;
function UserBoard(props) {
    
        // const {starred, recent, personal } = props.dashs
         
        const handleClick = (e)=>{
            // e.preventDefault();
            // console.log(this)
            // console.log(e.target)
            // if (e.target == this) {
            //     const txt = e.target.textContent
            //     props.addRecent(txt);
            // }

         }

    return (
        <div>
            <div>

                <div>
                    <AccessTimeIcon />
                    <span>Starred Viewed</span>
                </div>
                
                    <Query 
                        pollInterval={500} 
                        query={GET_PUREBOARDS} 
                        >
                        {({ loading, error, data }) => {
                           
                            if (loading) return 'Loading...';
                            else if (error) return `Error! ${error.message}`;
                            else if(data.pureBoards.length==0) {
                                return(<h3>No Data</h3>)
                            }
                            
                                return (
                                    <CardOverview>
                                    {data.pureBoards.filter(board=>board.isStarred==true).map((board, index) => (
                                        <BoardCard key={index} {...board} />
                                    ))}
                                    </CardOverview>
                                )
                            
                            
                        }}
                    </Query>
                    
                
            </div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Recently Viewed</span>
                </div>
                
                    <Query 
                        pollInterval={500} 
                        query={GET_RECENTBOARDS} 
                        >
                        {({ loading, error, data }) => {
                           
                            if (loading) return 'Loading...';
                            else if (error) return `Error! ${error.message}`;
                            else if(data.recentBoards.length==0) {
                                return(<h3>No Data</h3>)
                            }
                            
                                return (
                                    <CardOverview>
                                    {data.recentBoards.map((board, index) => (
                                        <BoardCard key={index} {...board} />
                                    ))}
                                    </CardOverview>
                                )
                            
                            
                        }}
                    </Query>
                
            </div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Personal Boards</span>
                </div>
                
                    <Query 
                        pollInterval={500} 
                        query={GET_PUREBOARDS} 
                        >
                        {({ loading, error, data }) => {
                           
                            if (loading) return 'Loading...';
                            else if (error) return `Error! ${error.message}`;
                            else if(data.pureBoards.length==0) {
                                return(<h3>No Data</h3>)
                            }
                            
                                return (
                                    <CardOverview>
                                    {data.pureBoards.map((board, index) => (
                                        <BoardCard key={index} {...board} />
                                    ))}
                                    </CardOverview>
                                )
                            
                            
                        }}
                    </Query>
                    
                
            </div>
        </div>
    )
    
}
// export default UserBoard;
const mapStateToProps = state => {
    return {
        dashs: state.dashs
    }   
}
 const mapDispatchToProps = dispatch=> {
    return {
        addRecent: (a)=>dispatch(addRecent(a)),
        addStar: (a,b)=>dispatch(addStar(a,b))
    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);