// src/components/BuyerFormModal.jsx

import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import '../estilos/buyerFormModal.scss'

// Configura el elemento raíz para el modal (accesibilidad)
// src/components/BuyerFormModal.jsx


Modal.setAppElement('#root');

const BuyerFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
	const [buyer, setBuyer] = useState({
		name: "",
		lastName: "",
		email: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBuyer((prevBuyer) => ({
			...prevBuyer,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!buyer.name || !buyer.lastName || !buyer.email) {
			alert("Por favor, completa todos los campos.");
			return;
		}
		onSubmit(buyer);
		setBuyer({
			name: "",
			lastName: "",
			email: ""
		});
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Formulario de Compra"
			className="buyer-modal"
			overlayClassName="buyer-modal-overlay"
		>
			<h2>Datos del Comprador</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={buyer.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Apellido:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={buyer.lastName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Correo Electrónico:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={buyer.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-actions">
					<button type="button" onClick={onRequestClose} className="btn btn-secondary">
						Cancelar
					</button>
					<button type="submit" className="btn btn-primary">
						Finalizar Compra
					</button>
				</div>
			</form>
		</Modal>
	);
};

BuyerFormModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default BuyerFormModal;
