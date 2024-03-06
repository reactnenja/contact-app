import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalsAdding = () => {
	const [data, setData] = useState([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Jane Doe" },
	]);
	const [showModal, setShowModal] = useState(false);
	const [newName, setNewName] = useState("");

	const handleDelete = id => {
		const updatedData = data.filter(item => item.id !== id);
		setData(updatedData);
	};

	const handleAdd = () => {
		const newId = Math.max(...data.map(item => item.id)) + 1;
		const newData = [...data, { id: newId, name: newName }];
		setData(newData);
		setShowModal(false);
		setNewName("");
	};

	return (
		<div>
			<ul>
				{data.map(item => (
					<li key={item.id}>
						{item.name}
						<Button onClick={() => handleDelete(item.id)}>Delete</Button>
					</li>
				))}
			</ul>
			<Button onClick={() => setShowModal(true)}>Add New</Button>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type='text' value={newName} onChange={e => setNewName(e.target.value)} />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleAdd}>Save</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalsAdding;
