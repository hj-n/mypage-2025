import { useState, useEffect } from 'react';
import { readYaml } from '../helpers/read_yaml';

import "./News.scss"

import parser from 'html-react-parser';

const News = (props) => {

	const [news, setNews] = useState([]);

	const fetchNews = async () => {
		const news = await readYaml(require("../assets/news.yaml"));
		setNews(news);
	}

	useEffect(() => { fetchNews(); }, []);

	return (
		<div>
			{news.slice(0, 5).map((item, index) => {
				return (
					<div key={index} className="News">
						<div className="NewsDate">
							<h4>{item.year}. {item.month}</h4>
						</div>
						<p>{parser(item.content)}</p>
					</div>
				)
			})}
		</div>
	)

};

export default News;