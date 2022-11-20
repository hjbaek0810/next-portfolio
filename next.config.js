/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// 외부에서 이미지 가져올 때 가져온 출처 도메인 등록
	images: {
		domains: ['www.notion.so', 'images.unsplash.com']
	}
};

module.exports = nextConfig;
