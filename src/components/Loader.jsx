import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import '../estilos/loader.scss'

const Loader = ({ loading }) => {
	return (
		<div className="loader-container">
			<RingLoader color="#33daff" loading={loading} size={90} />
			<p>Cargando...</p>
		</div>
	);
};

export default Loader;
