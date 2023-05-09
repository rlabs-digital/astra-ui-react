// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from '$base/Button.component';

const meta: Meta<typeof Button> = {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */

	tags: ['autodocs'],
	title: 'Base/Button',
	component: () => <Button>Unstyled Button</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const UnstyledButton: Story = {};
