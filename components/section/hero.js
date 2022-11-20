import Link from 'next/link';

export default function Hero() {
	return (
		<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				안녕하세요. 백현지입니다!
				<br className="hidden lg:inline-block" />
				오늘도 빡코딩!
			</h1>
			<p className="mb-8 leading-relaxed">
				노루, 별 다하지 내 쉬이 당신은 거외다. 없이 위에 하나에 무덤 써 별 한 있습니다. 흙으로 나는
				이네들은 이름과, 이름을 어머님, 노루, 아직 하나에 있습니다. 딴은 멀리 보고, 버리었습니다.
				나의 노루, 별을 계절이 있습니다. 이름과, 않은 우는 강아지, 둘 다 소녀들의 같이 있습니다.
				이름과, 무성할 풀이 아침이 파란 까닭입니다. 이제 가난한 노루, 자랑처럼 오는 사람들의
				있습니다. 이 하나에 비둘기, 딴은 시와 있습니다. 강아지, 마리아 가득 이름과 하나에 없이 패,
				풀이 거외다.
			</p>
			<div className="flex justify-center">
				<Link href={'/projects'}>
					<a className="btn-project">프로젝트 보러가기</a>
				</Link>
			</div>
		</div>
	);
}
