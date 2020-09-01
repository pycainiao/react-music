import React from 'react';

function AlbumComponent(props) {
	const id = props.match.params.id;
	console.log(id,'id')
	return (
			<div>这是AlbumComponent,Recommend的详情{id}</div>
	);
}

export default AlbumComponent;
