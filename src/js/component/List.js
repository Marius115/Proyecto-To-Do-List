import React, { useState } from "react";
import { Task } from "./Task";
import { TaskCounter } from "./TaskCounter";

export const List = () => {
	const [tasklist, settasklist] = useState(["walk the dog"]);
	const [inputValue, setImputValue] = useState("");

	const onChangeHandler = (e) => {
		setImputValue(e.target.value);
	};

	const addNewTask = (e) => {
		if (e.key === "Enter") {
			const newtaskList = [...tasklist];
			newtaskList.push(inputValue);
			settasklist(newtaskList);
			setImputValue("");
		}
	};

	const deleteTask = (text) => {
		const newtaskList = [...tasklist];
		const taskIndex = newtaskList.findIndex((task) => task === text);
		newtaskList.splice(taskIndex, 1);
		settasklist(newtaskList);
	};

	return (
		<div className="container d-flex justify-content-center p-3">
			<ul className="list-group w-50">
				<li className="list-group-item">
					<input
						type="text"
						className="w-100 border-0"
						placeholder="What needs to be done?"
						value={inputValue}
						onChange={onChangeHandler}
						onKeyDown={addNewTask}
					/>
				</li>
				{tasklist.map((task, index) => (
					<Task task={task} key={index} deleteTask={deleteTask} />
				))}
				<TaskCounter count={tasklist.length} />
			</ul>
		</div>
	);
};
