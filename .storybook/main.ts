import 'vite';
import path from 'path';

const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	core: {
		builder: '@storybook/builder-vite', // 👈 The builder enabled here.
	},
	async viteFinal(config, { configType }) {
		// Add your alias configuration here
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib'),
			$helpers: path.resolve(__dirname, '../src/lib/helpers'),
			$components: path.resolve(__dirname, '../src/lib/components'),
			$base: path.resolve(__dirname, '../src/lib/components/base'),
			$styled: path.resolve(__dirname, '../src/lib/components/styled'),
			$hooks: path.resolve(__dirname, '../src/lib/hooks'),
			$scss: path.resolve(__dirname, '../src/lib/scss'),
			$types: path.resolve(__dirname, '../src/lib/types'),
			$utils: path.resolve(__dirname, '../src/lib/utils'),
		};
		return config;
	},

	docs: {
		autodocs: 'tag',
		defaultName: 'Documentation',
	},
};
export default config;
