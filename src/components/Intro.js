import { readYaml } from '../helpers/read_yaml';
import { useEffect, useRef } from 'react';

import "./Intro.scss"

const Intro = (props) => {

	const introRef = useRef(null);
	const imageRef = useRef(null);

	const fetchIntro = async () => {
		const intro = await readYaml(require("../assets/intro.yaml"));
		introRef.current.innerHTML = intro.intro;
		imageRef.current.src = process.env.PUBLIC_URL + "/assets/" + intro.file;
	}

	useEffect(() => { fetchIntro(); }, []);

	return (
		<div>
			<div className="introWrapper">
				<img ref={imageRef} className="introImage"></img>
				<div ref={introRef} className="intro"></div>
			</div>

		</div>
	)
};

export default Intro;