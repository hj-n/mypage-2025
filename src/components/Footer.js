import { readYaml } from '../helpers/read_yaml';
import { useEffect, useRef } from 'react';

import "./Footer.scss";

const Footer = (props) => {

	const firstRowRef = useRef(null);
	const secondRowRef = useRef(null);
	const thirdRowRef = useRef(null);



	const fetchInfo = async () => {
    const info = await readYaml(require("../assets/info.yaml"));
		firstRowRef.current.innerHTML = `${info.name}, ${info.role}`;
		secondRowRef.current.innerHTML = info.affiliation;
		thirdRowRef.current.innerHTML = `<a href="mailto:${info.email}">${info.email}</a>`;
  }

	useEffect(() => { fetchInfo(); }, []);

	return (
		<div className="footer">
			<h4 ref={firstRowRef}></h4>
			<h4 ref={secondRowRef}></h4>
			<h4 ref={thirdRowRef}></h4>
		</div>
	)
}

export default Footer;