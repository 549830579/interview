import React, { useState, ChangeEvent } from 'react';
import ToDoItem, {listItem} from "@/components/ToDoList/ListItem";
import { message } from 'antd';
interface Props {
	onChange: (value: listItem) => void;
}

const AddToDo: React.FC<Props> = ({ onChange }) => {
	const [text, setText] = useState<string>("");
	const [completed, setCompleted]=useState<boolean>(false);

	function onValueChange(e: ChangeEvent<HTMLInputElement>) {
		setText(e.target.value);
	}

	function handlePressEnter() {
		if(!text||text===""){
			message.info("Please enter a to-do item")
			return ;
		}
		const newItem:listItem={
			value:text,
			id:Date.now(),
			completed: completed
		}
		onChange(newItem);
		setText("");
		setCompleted(false);
	}

	function onCompleteChange(){
		setCompleted(!completed);
	}

	return (
		<ToDoItem
			value={
				{
					value:text,
					completed
				}
			}
			onChange={onValueChange}
			onPressEnter={handlePressEnter}
			onCompleteChange={onCompleteChange}
		/>
	);
}

export default AddToDo;
