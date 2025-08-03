import { readYaml } from '../helpers/read_yaml';
import { useState, useEffect } from 'react';
import Pub from './subcomponents/Pub';

const Publications = (props) => {
	const [pubs, setPubs] = useState([]);
	const fetchPubs = async () => {
		const pubs = await readYaml(require("../assets/pubList.yaml"));
		const pubsFiltered = pubs.filter(pub => pub.property.includes(props.property));
		const pubsFilteredSort = pubsFiltered.sort((a, b) => b.time - a.time);
		setPubs(pubsFilteredSort);
	}

	useEffect(() => { fetchPubs(); }, []);


	return (
		<div>
			{pubs.map((pub, index) => {
				return (
					<Pub pubKey={pub.key} key={index}/>
					
				)
			})}
		</div>
	)
};

export default Publications;