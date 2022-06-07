import React from "react";
import { List } from "./List";
import { Title } from "./Title";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Title text={"To Do List"} />
			<List />
		</React.Fragment>
	);
};

export default Home;
