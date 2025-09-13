import type { NextConfig } from "next";

const nextConfig: NextConfig = {

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.redditmedia.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: '*.redd.it',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'external-preview.redd.it',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'preview.redd.it',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.redd.it',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'a.thumbs.redditmedia.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'b.thumbs.redditmedia.com',
				port: '',
				pathname: '/**',
			},
		],
		domains: [
			'reddit.com',
			'www.reddit.com',
			'i.redd.it',
			'preview.redd.it',
			'external-preview.redd.it',
			'a.thumbs.redditmedia.com',
			'b.thumbs.redditmedia.com',
		],
	},
	// Other Next.js config options can go here
};

export default nextConfig;
