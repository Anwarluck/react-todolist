import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoList/TodoInput";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false,
	};
	handleChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		const updatedItems = [...this.state.items, newItem];
		this.setState(
			{
				items: updatedItems,
				id: uuid(),
				item: "",
				editItem: false,
			},
			() => console.log(this.state.items)
		);
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
