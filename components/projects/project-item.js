import Image from 'next/image';

export default function ProjectItem({ data }) {
	const getData = data.properties;
	const title = getData.이름.title[0].plain_text;
	const githubLink = getData.Link.rich_text[0].text.link.url;
	const description = getData.설명.rich_text[0].plain_text;
	const imgSrc = data.cover.file?.url || data.cover.external.url;
	const tags = data.properties.태그.multi_select;
	const start = data.properties.작업기간.date?.start;
	const end = data.properties.작업기간.date?.end;

	const calculatedPeriod = (start, end) => {
		if (start && end) {
			const startDateArr = start.split('-');
			const endDateArr = end.split('-');

			let startDate = new Date(startDateArr[0], startDateArr[1], startDateArr[2]);
			let endDate = new Date(endDateArr[0], endDateArr[1], endDateArr[2]);

			const diffInMs = Math.abs(endDate - startDate);
			const result = diffInMs / (1000 * 60 * 60 * 24);
			return result;
		} else return '';
	};

	return (
		<div className="project-card">
			<Image
				className="rounded-t-xl"
				src={imgSrc}
				width="100%"
				height="60%"
				layout="responsive"
				objectFit="cover"
				quality={100}
				alt={'portfolio cover image'}
			/>
			<div className={'p-4 flex flex-col'}>
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="mt-4 text-xl">{description}</p>
				<a href={githubLink}>프로젝트 바로가기</a>
				{calculatedPeriod(start, end) !== '' ? (
					<p>{`작업기간 : ${start} ~ ${end} (${calculatedPeriod(start, end)}일)`}</p>
				) : null}

				<div className={'flex items-start mt-2'}>
					{tags.map((item) => (
						<h1
							className={'px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30'}
							key={item.id}
						>
							{item.name}
						</h1>
					))}
				</div>
			</div>
		</div>
	);
}
