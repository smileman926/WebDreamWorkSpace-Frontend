import React, {Component} from 'react';
import {render} from 'react-dom';
import { MDBIcon } from "mdbreact";
import { connect } from "react-redux";

import addlist from "../action/addlist";
import changecollection from "../action/changecollection";

const mapStateToProps = state => ({
	boardId: state.userboard.boardId,
	boardTitle: state.userboard.boardTitle,
	boardImgurl: state.userboard.boardImgurl,
	boardColor: state.userboard.boardColor,
	boardContents: state.userboard.boardContents
});

const mapDispatchProps = (dispatch) => ({
	addlist: (title) => dispatch(addlist(title)),
	changecollection: (collection,id) => dispatch(changecollection(collection,id))
}); 

class AddList extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			title: ""
		}

		this.showInput = this.showInput.bind(this);
		this.closeInput = this.closeInput.bind(this);
		this.inputtitle = this.inputtitle.bind(this);
		this.addtitlefunc = this.addtitlefunc.bind(this);
		this.keypress = this.keypress.bind(this);
	}

	async addtitlefunc() {

		if (this.state.title != "") {

			await this.props.addlist(this.state.title, this.props.boardId);

			var collection = {
				contents: this.props.boardContents 
			};

			this.props.changecollection(collection,this.props.boardId);
			// axios and save title to store
		}
		this.closeInput();

	}

	inputtitle(e) {

		this.setState({
			title: e.target.value
		});

	}

	keypress(e) {

		const key = e.which || e.keycode;
		if (key == 13) {
			this.addtitlefunc();
		}

	}

	showInput() {

		if ( !this.state.show ) {
			this.setState({
				show: true
			})
		}
	}

	closeInput() {

		console.log(this.state.title);
		this.setState({
				show: false,
				title: ""
			})

	}
	
	render() {

		const addlist = <h6 className="board_addListDiv--title">+ Add another list </h6>;

		const addtitle = 
			<div>
				<input className="board_addListDiv--input" type="text" placeholder="Enter list tilte..." onChange={this.inputtitle} onKeyPress={this.keypress} autoFocus/>
				<button className="board_addListDiv--button" onClick={this.addtitlefunc}>Add List</button>
				<button className="board_addListDiv--button" style={{backgroundColor: "rgba(0,0,0,0)", color: "black"}} onClick={this.closeInput}>
					<MDBIcon icon="times" />
				</button>
			</div>;

		return (
				<div onClick = { this.showInput } className="board_addListDiv">
					{
						this.state.show === false ? addlist:addtitle
					}
				</div>
			);
	}
}


export default connect(mapStateToProps,mapDispatchProps)(AddList);