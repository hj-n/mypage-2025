import { readYaml } from '../../helpers/read_yaml';
import { useState, useEffect, useRef } from 'react';

import "./Pub.scss"

const Pub = (props) => {

	const [pubInfo, setPubInfo] = useState({});

	const titleRef = useRef(null);
	const authorsRef = useRef(null);
	const venueRef = useRef(null);
	// const tldrRef = useRef(null);

	const imageRef = useRef(null);

	const fetchPub = async () => {
		const pub = await readYaml(require(`../../assets/pubs/${props.pubKey}.yaml`));
		if (pub.authors.includes("Hyeon Jeon")) {
			pub.authors = pub.authors.replace("Hyeon Jeon", "<u>Hyeon Jeon</u>");
		}
		titleRef.current.innerHTML = pub.title;
		authorsRef.current.innerHTML = pub.authors;
		venueRef.current.innerHTML = pub.comment == undefined ? pub.venue : pub.venue + ", " + pub.comment;
		// tldrRef.current.innerHTML = pub.tldr;

		imageRef.current.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/pubfig/${pub.image})`;

		setPubInfo(pub);
	}

	useEffect(() => { fetchPub(); }, []);


	return (
		<div>
			<div className="singlePub">
				<div className="singlePubImage" ref={imageRef}></div>
				<div className="singlePubInfo">
					{("award" in pubInfo) && 
						<h4 className="award">{`🏆 `}<i>{pubInfo.award}</i></h4>
					}
					<h3 ref={titleRef}></h3>
					<h4 ref={authorsRef} className="authors"></h4>
					<h4 ref={venueRef} className="venue"></h4>
					<div className="metadata"> 
						{("pdf" in pubInfo) ? <h5><a href={`${process.env.PUBLIC_URL}/assets/pdf/${pubInfo.pdf}`}  target="_blank">pdf</a></h5>: <h5>pdf (TBA)</h5>}
						{("appendix" in pubInfo) && 
							<div className="infoCell">
								<div className="sep"><h5>/</h5></div>
								<h5><a href={`${process.env.PUBLIC_URL}/assets/pdf/${pubInfo.appendix}`}  target="_blank">appendix</a></h5>
							</div>
						}
						{("video" in pubInfo) &&
							<div className="infoCell">
								<div className="sep"><h5>/</h5></div>
								<h5><a href={pubInfo.video}  target="_blank">video</a></h5>
							</div>
						}
						{("demo" in pubInfo) &&
							<div className="infoCell">
								<div className="sep"><h5>/</h5></div>
								<h5><a href={pubInfo.demo}  target="_blank">demo</a></h5>
							</div>
						}
						{("bibtex" in pubInfo) && 
							<div className='infoCell'>
								<div className="sep"><h5>/</h5></div>
								<h5><a href={`${process.env.PUBLIC_URL}/assets/bib/${pubInfo.bibtex}`}  target="_blank">bibtex</a></h5>
							</div>
						}
						{("github" in pubInfo) && 
							<div className='infoCell'>
								<div className="sep"><h5>/</h5></div>
								<h5><a href={pubInfo.github} target="_blank">github</a></h5>
							</div>
						}
						{("arxiv" in pubInfo) && 
							<div className='infoCell'>
								<div className="sep"><h5>/</h5></div>
								<h5><a href={pubInfo.arxiv} target="_blank">arxiv</a></h5>
							</div>
						}
					</div>
					{/* <h4 className="tldr" ref={tldrRef}></h4> */}
				</div>
			</div>
			
		</div>
	)
};

export default Pub;