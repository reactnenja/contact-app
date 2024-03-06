// import { useState } from "react";

// function Table() {
// 	const [person, setPerson, setAdding] = useState(
// 		[
// 			{
// 				id: 0,
// 				fristName: "Sanjar",
// 				lastName: "Alimardonov",
// 				age: 22,
// 				regions: "Farg'ona",
// 				number: "+998887464735",
// 			},
// 			{
// 				id: 1,
// 				fristName: "Og'abek",
// 				lastName: "Berdiyev",
// 				age: 24,
// 				regions: "Samarqand",
// 				number: "+998913545563",
// 			},
// 			{
// 				id: 2,
// 				fristName: "Furqat",
// 				lastName: "Maqsudov",
// 				age: 22,
// 				regions: "Toshkent",
// 				number: "+99997688755",
// 			},
// 			{
// 				id: 3,
// 				fristName: "Komronbek",
// 				lastName: "Rahimov",
// 				age: 25,
// 				regions: "Toshkent",
// 				number: "+99974445577",
// 			},
// 		],
// 		[
// 			{
// 				id: "",
// 				name: "",
// 				lastName: "",
// 				age: null,
// 				regions: "",
// 				number: "",
// 			},
// 		]
// 	);
// 	const handleDeleting = id => {
// 		const pupilDeleting = person.filter(pupils => {
// 			return pupils.id !== id;
// 		});
// 		setPerson(pupilDeleting);
// 	};
// 	// const handleAdding = id => {};
// 	return (
// 		<table className='table text-center rounded rounded-1'>
// 			<thead>
// 				<tr>
// 					<th className='border border-right border-1 '>#</th>
// 					<th className='border border-right border-1 '>Frist Name</th>
// 					<th className='border border-right border-1 '>Last Name</th>
// 					<th className='border border-right border-1 '>Age</th>
// 					<th className='border border-right border-1 '>Regions</th>
// 					<th className='border border-right border-1 '>Number</th>
// 					<th className='border border-right border-1 '>Edit / Delete / Open</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{person.map((person, i) => (
// 					<tr key={person.id}>
// 						<td className='border border-right border-1'>{i + 1}</td>
// 						<td className='border border-right border-1'>{person.fristName}</td>
// 						<td className='border border-right border-1'>{person.lastName}</td>
// 						<td className='border border-right border-1'>{person.age}</td>
// 						<td className='border border-right border-1'>{person.regions}</td>
// 						<td className='border border-right border-1'>{person.number}</td>
// 						<td className='border border-right border-1'>
// 							<button className='btn btn-warning w-25 mx-1'>
// 								<i className='fa-solid fa-pen'></i>
// 							</button>
// 							<button
// 								className='btn btn-danger w-25 mx-1'
// 								onClick={() => handleDeleting(person.id)}>
// 								<i className='fa-solid fa-trash'></i>
// 							</button>
// 							<button className='btn btn-danger w-25 mx-1'>
// 								<i className='fa-solid fa-arrow-up-right-from-square'></i>
// 							</button>
// 						</td>
// 					</tr>
// 				))}
// 			</tbody>
// 		</table>
// 	);
// }

// export default Table;

import React, { useState } from "react";

function Table() {
	const [person, setPerson] = useState([
		{
			id: 0,
			fristName: "Sanjar",
			lastName: "Alimardonov",
			age: 22,
			regions: "Farg'ona",
			number: "+998887464735",
		},
		{
			id: 1,
			fristName: "Og'abek",
			lastName: "Berdiyev",
			age: 24,
			regions: "Samarqand",
			number: "+998913545563",
		},
		{
			id: 2,
			fristName: "Furqat",
			lastName: "Maqsudov",
			age: 22,
			regions: "Toshkent",
			number: "+99997688755",
		},
		{
			id: 3,
			fristName: "Komronbek",
			lastName: "Rahimov",
			age: 25,
			regions: "Toshkent",
			number: "+99974445577",
		},
	]);

	const handleDelete = id => {
		const updatedPerson = person.filter(p => p.id !== id);
		setPerson(updatedPerson);
	};

	const handleAdd = () => {
		const newId = Math.max(...person.map(p => p.id)) + 1;
		const newPerson = {
			id: newId,
			fristName: "New",
			lastName: "Person",
			age: 0,
			regions: "",
			number: "",
		};
		setPerson([...person, newPerson]);
	};

	const handleUpdate = (id, updatedPerson) => {
		const updatedData = person.map(p => (p.id === id ? { ...p, ...updatedPerson } : p));
		setPerson(updatedData);
	};

	return (
		<table className='table text-center rounded rounded-1'>
			<thead>
				<tr>
					<th className='border border-right border-1 '>#</th>
					<th className='border border-right border-1 '>First Name</th>
					<th className='border border-right border-1 '>Last Name</th>
					<th className='border border-right border-1 '>Age</th>
					<th className='border border-right border-1 '>Regions</th>
					<th className='border border-right border-1 '>Number</th>
					<th className='border border-right border-1 '>Edit / Delete / Open</th>
				</tr>
			</thead>
			<tbody>
				{person.map((p, i) => (
					<tr key={p.id}>
						<td className='border border-right border-1'>{i + 1}</td>
						<td className='border border-right border-1'>{p.fristName}</td>
						<td className='border border-right border-1'>{p.lastName}</td>
						<td className='border border-right border-1'>{p.age}</td>
						<td className='border border-right border-1'>{p.regions}</td>
						<td className='border border-right border-1'>{p.number}</td>
						<td className='border border-right border-1'>
							<button
								className='btn btn-warning w-25 mx-1'
								onClick={() => handleUpdate(p.id, { firstName: "Updated" })}>
								Update
							</button>
							<button className='btn btn-danger w-25 mx-1' onClick={() => handleDelete(p.id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan='7' className='text-end'>
						<button className='btn btn-primary' onClick={handleAdd}>
							Add New
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
}

export default Table;
