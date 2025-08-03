import Publications from "./Publications";
import Title from "./subcomponents/Title";
import { readYaml } from '../helpers/read_yaml';
import { useRef, useEffect } from 'react';

import "./Publications.scss";

const PublicationPage = (props) => {

	const pubIntroRef = useRef(null);

	const fetchIntro = async () => {
		const intro = await readYaml(require("../assets/intro.yaml"));
		pubIntroRef.current.innerHTML = intro.pub;
	}

	useEffect(() => { fetchIntro(); }, []);

	return (
		<div>
			<div ref={pubIntroRef} className={"pubIntro"}></div>
			<Title title="Preprints" />
			<Publications property={"preprint"} />
			<Title title="International Journals & Peer-reviewed Conference Full Papers"/>
			<Publications property={"full"}/>
			<Title title="Peer-reviewed Conference Short Papers"/>
			<Publications property={"short"}/>
			<Title title="Workshop Papers" />
			<Publications property={"others"} />
		</div>
	)
};

export default PublicationPage;

