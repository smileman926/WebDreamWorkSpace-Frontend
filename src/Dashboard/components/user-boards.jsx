import React from "react"
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
//import {StarBorder} from "@material-ui/icons/StarBorder";
 import {addRecent, addStar} from "../../store/action/dashboardActions"
import BoardCard from "./board-card";
import {connect} from "react-redux";

const CardOverview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

function UserBoard(props) {
    
        const {starred, recent, personal } = props.dashs
         
        const handleClick = (e)=>{
            // e.preventDefault();
            console.log(this)
            console.log(e.target)
            if (e.target == this) {
                const txt = e.target.textContent
                props.addRecent(txt);
            }

         }

    return (
        <div>
            <div>

                <div>
                    <AccessTimeIcon />
                    <span>Starred Viewed</span>
                </div>
                <CardOverview>
                    {  (starred.length==0) 
                        ? <h3>NO Star</h3>
                        :starred.map((item,idx)=>{
                        return <BoardCard key={idx} cardContent={item} func={props.addStar}/>
                    })

                        }
                </CardOverview>
            </div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Recently Viewed</span>
                </div>
                <CardOverview>
                    {
                        (recent.length==0)
                        ? <h3>NO Recent</h3>
                        :recent.map((item,idx)=>{
                        return <BoardCard key={idx} cardContent={item} func={props.addStar}/>
                    })}
                </CardOverview>
            </div>
            <div>
                <div>
                    <AccessTimeIcon />
                    <span>Personal Boards</span>
                </div>
                <CardOverview>
                    {personal.map((item,idx)=>{
                        return <span className="span-board" onClick={handleClick}><BoardCard key={idx} cardContent={item} func={props.addStar}/></span>
                    })}
                </CardOverview>
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