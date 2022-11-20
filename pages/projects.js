import Head from 'next/head';
import Layout from '../components/layout';
import ProjectItem from '../components/projects/project-item';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }) {
	return (
		<Layout>
			<div className={'flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6'}>
				<Head>
					<title>포트폴리오</title>
					<meta name="description" content="오늘도 빡코딩" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1 className={'text-4xl font-bold sm:text-6xl'}>
					총 프로젝트 :<span className={'pl-4 text-blue-500'}>{projects.results.length}</span>
				</h1>
				<div className={'grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8 w-full'}>
					{projects.results.map((item) => (
						<ProjectItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</Layout>
	);
}

// 빌드 타임에 호출
export async function getStaticProps() {
	const options = {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'Notion-Version': '2022-06-28',
			'content-type': 'application/json',
			authorization: `Bearer ${TOKEN}`
		},
		body: JSON.stringify({
			sorts: [
				{
					property: '이름',
					direction: 'ascending'
				}
			],
			page_size: 100
		})
	};

	const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

	const projects = await response.json();

	return {
		props: { projects }
	};
}
