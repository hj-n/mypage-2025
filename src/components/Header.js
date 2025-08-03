import { readYaml } from '../helpers/read_yaml';
import { useState, useEffect } from 'react';

import "./Header.scss"


const Header = (props) => {
	/**
	 * The Header component.
	 * Renders the title (name) and the tabs for navigation
	 */

	const [info, setInfo] = useState({
		name: '',	email: '', scholar: '',
		twitter: '', github: '', cv: '',
	});

  const fetchInfo = async () => {
    const info = await readYaml(require("../assets/info.yaml"));
		setInfo(info);
  }

  useEffect(() => { fetchInfo(); }, []);


	return (
		<div>
			<h1><a href={"./"}>{info.name}</a></h1>
			<div className="tabs">
				<div className='subtab'>
					<h2><a href={"./publications"}>Publications</a></h2>
					<h2><a href={info.cv} target="_blank">CV</a></h2>
					<h2><a href={`mailto:${info.email}`}>email</a></h2>
					<h2><a href={info.scholar} target="_blank">Scholar</a></h2>
					<h2><a href={info.twitter} target="_blank">X</a></h2>
					<h2><a href={info.github} target="_blank">Github</a></h2>
				</div>
			</div>
		</div>
	)
};

export default Header;