import { readYaml } from '../helpers/read_yaml';
import { useEffect, useRef } from 'react';

import "./Intro.scss"

const Intro = (props) => {

	const introRef = useRef(null);
	const imageRef = useRef(null);
	const imageOutRef = useRef(null);

	const fetchIntro = async () => {
		const intro = await readYaml(require("../assets/intro.yaml"));
		introRef.current.innerHTML = intro.intro;
		imageRef.current.src = process.env.PUBLIC_URL + "/assets/" + intro.file;
		imageOutRef.current.src = process.env.PUBLIC_URL + "/assets/" + intro.file_outside;
	}

	useEffect(() => { fetchIntro(); }, []);

	return (
		<div>
			<div className="introWrapper">
				<div className="introImageWrapper">
					<div>
						<div className="introImageLabel">Inside the lab:</div>
						<img ref={imageRef} className="introImage"></img>
					</div>
					<div>
						<div className="introImageLabel">Outside the lab:</div>
						<img ref={imageOutRef} className="introImage"></img>
					</div>
				</div>
				<div ref={introRef} className="intro"></div>
			</div>

		</div>
	)
};

export default Intro;