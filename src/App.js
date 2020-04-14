import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
//site not working
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoList/TodoInput";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<TodoInput />
					<TodoList />
				</div>
			</div>
		);
	}
}
