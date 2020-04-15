import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoList/TodoInput";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class App extends Component {
	state = {
		items: [
			{ id: 1, title: "whats up" },
			{ id: 2, title: "buddy system" },
		],
		id: uuid(),
		item: "",
		editItem: false,
	};
	handleChange = (e) => {
		console.log("handle change");
	};
	handleSubmit = (e) => {
		console.log("handle submit");
	};
	clearList = () => {
		console.log("list cleared");
	};
	handleDelete = (id) => {
		console.log(`handle deleted ${id}`);
	};
	handleEdit = (id) => {
		console.log(`handle deleted ${id}`);
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto md-8 mt-5">
						<h3 className="text-capitalize text-center"> Todo Input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						s
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}
