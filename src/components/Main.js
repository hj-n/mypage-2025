import Intro from "./Intro";
import News from "./News";
import Title from "./subcomponents/Title";
import Publications from "./Publications";
import Materials from "./Materials";


const Main = (props) => {

	return (
		<div>
			<Intro/>
			<Title title="News"/>
			<News/>
			<Title title="Artifacts" />
			<Materials id="artifacts"/>
			{/* <Title title="Software & Datasets"/> */}
			{/* <Materials id="software"/> */}
			<Title title="Featured Publications"/>
			<Publications property={"selected"}/>
		</div>
	)
}

export default Main;