import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<header className='my-2 border border-1 p-4'>
			<div className='input-group m-2'>
				<input
					type='search'
					name='search'
					id='search'
					className='form-control'
					placeholder='Search Contact Numbers'
				/>
				<select name='filter' id='filter' className='form-select'>
					<option value='A'>A CONTACT NAME</option>
					<option value='B'>B CONTACT NAME</option>
					<option value='C'>C CONTACT NAME</option>
					<option value='D'>D CONTACT NAME</option>
					<option value='E'>E CONTACT NAME</option>
					<option value='F'>F CONTACT NAME</option>
				</select>
				<button className='btn btn-success' onClick={handleShow}>
					Add Contacts
				</button>
			</div>
			{/* modals */}
			<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add Contact Number</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='mb-2'>
						<label htmlFor='name'>Your Name</label>
						<input
							className='form-control'
							type='text'
							id='name'
							name='name'
							placeholder='Your Name'
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='lastname'>Last Name</label>
						<input
							className='form-control'
							type='text'
							id='lastname'
							name='lastname'
							placeholder='Your LastName?'
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='age'>Your Age</label>
						<input
							className='form-control'
							type='number'
							id='age'
							name='age'
							placeholder='Your age?'
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='region'>Region</label>
						<select id='region' className='form-select my-1 mr-sm-2'>
							<option selected>Choose...</option>
							<option value={1}>Andijon</option>
							<option value={2}>Farg'ona</option>
							<option value={3}>Namangan</option>
							<option value={4}>Tashkent</option>
							<option value={5}>Sirdaryo</option>
							<option value={6}>Jizzax</option>
							<option value={7}>Samarqand</option>
							<option value={8}>Surxondaryo</option>
							<option value={9}>Qashqadaryo</option>
							<option value={10}>Buxoro</option>
							<option value={11}>Xorazim</option>
							<option value={12}>Qoraqalpog'iston</option>
							<option value={13}>Navoiy</option>
						</select>
					</div>
					<div className='mb-2'>
						<label htmlFor='telnumber'>Your Number</label>
						<input
							className='form-control'
							type='text'
							id='telnumber'
							name='telnumber'
							placeholder='+999'
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary'>Understood</Button>
				</Modal.Footer>
			</Modal>
			{/* modals */}
		</header>
	);
}
export default Header;
