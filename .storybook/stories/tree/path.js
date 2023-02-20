import React from 'react';
import { Tree } from '../../../src';

export function CustomPaths(args) {
	return <Tree {...args}/>;
}

CustomPaths.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	},
	pathFunc: (x1, y1, x2, y2) => `M${x1},${y1} ${x2},${y2}`
};

CustomPaths.parameters = {
	controls: { include: ['data', 'pathFunc'] },
	docs: {
		description: {
			story: 'You can pass in a custom function for calculating the shape of a path between two nodes.'
		}
	}
};