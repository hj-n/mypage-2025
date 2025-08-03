import { readYaml } from "../helpers/read_yaml";
import { useEffect, useRef } from "react";

import "./Materials.scss";

const Materials = (props) => {

	const introRef = useRef(null);
	const materialsRef = useRef(null);

	const identifier = props.id;

	const fetchIntro = async () => {
		const materials = await readYaml(require(`../assets/${identifier}.yaml`));
		introRef.current.innerHTML = materials.intro;

		const contents = materials.contents;
		contents.forEach((content) => {
			const title = content.title;
			const link = content.link;
			const id = content.id;
			const year = content.year;
			const description = content.description;

			const div = document.createElement("div");
			div.className = "materialContent";
			div.innerHTML = `
				<div class="materialTitle" id="${id}">
					<a href="${link}" target="_blank" rel="noopener noreferrer" class="materialLink">${title}</a>
					<span class="materialYear">(${year})</span>
				</div>
				<div class="materialDescription">${description}</div>
			`;
			// check whether the id is already in the div
			const existingDiv = materialsRef.current.querySelector(`#${id}`);
			if (!existingDiv) {
				materialsRef.current.appendChild(div);
			}
		})
	}

	useEffect(() => { fetchIntro(); }, []);

	return (
		<div ref={materialsRef} className="materialsWrapper">
			<div ref={introRef} className="materials"></div>
		</div>
	)
}

export default Materials;