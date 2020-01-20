import React, {Component} from "react";
import {render} from "react-dom";
import { connect } from "react-redux";
import arrayMove from "array-move";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import AddContent from "./addcontent";
import ListContent from "./listContent";


const mapStateToProps = state => ({
	boardId: state.userboard.boardId,
	boardTitle: state.userboard.boardTitle,
	boardImgurl: state.userboard.boardImgurl,
	boardColor: state.userboard.boardColor,
	boardContents: state.userboard.boardContents
});

// const mapDispatchProps = dispatch => ({
// 	changeListTitle: (title) => dispatch(changeListTitle(title, id))
// })


class List extends Component {
	constructor(props){
		super(props);
		this.parentrerender = this.parentrerender.bind(this);
		this.changeListTitle = this.changeListTitle.bind(this);
		this.onSortEnd = this.onSortEnd.bind(this);
	}

	onSortEnd({oldIndex, newIndex}){
		console.log(oldIndex+"/"+newIndex)
	}

	changeListTitle(e) {
		if (e.target.value !="") {

		} 
	}

	parentrerender() {
		this.forceUpdate();
	}

	render() {
		const SortableItem = SortableElement(({content}) => <ListContent title={content} />);

		const Content = SortableContainer(({tt}) => {
				return (
					<div 
						className="list_div"
						val =  {tt}
					 >
						<textarea className="list_title_div" onChange={this.changeListTitle} defaultValue={tt}/>
							{
								this.props.boardContents[tt].map((content,index) => {
									if (content != "") {
										return (
											<SortableItem 
												content={content}
												index = {index}/>
										);
									}
									
								})
							}
						<AddContent key={this.props.boardId} title={tt} parentrerender = {this.parentrerender}/>
					</div>
				);
		});

		console.log(this.props.boardContents);
		return (
			<div className="list_container_div">
				{
					Object.keys(this.props.boardContents).map((key,index) => {
						
						if (key != "default") {
							return (
								<Content tt={key} index={index} onSortEnd={this.onSortEnd}/>
							);
						}
					 
					})
				}
			</div>
			);
	}
}


export default connect(mapStateToProps,null)(List);