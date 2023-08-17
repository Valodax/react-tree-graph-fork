import { easeQuadOut } from 'd3-ease';
import PropTypes from 'prop-types';
import React from 'react';
import getTreeData from '../d3';
import Animated from './animated';

export default function AnimatedTree({
  data,
  children,
  direction = 'ltr',
  duration = 500,
  easing = easeQuadOut,
  steps = 20,
  height,
  width,
  keyProp = 'name',
  labelProp = 'name',
  getChildren = n => n.children,
  margins,
  pathFunc,
  nodeShape = 'circle',
  nodeProps = {},
  gProps = {},
  pathProps = {},
  svgProps = {},
  textProps = {}
}) {
  return (
    <Animated
      duration={duration}
      easing={easing}
      getChildren={getChildren}
      direction={direction}
      height={height}
      keyProp={keyProp}
      labelProp={labelProp}
      nodeShape={nodeShape}
      nodeProps={nodeProps}
      pathFunc={pathFunc}
      steps={steps}
      width={width}
      gProps={{ className: 'node', ...gProps }}
      pathProps={{ className: 'link', ...pathProps }}
      svgProps={svgProps}
      textProps={textProps}
      {...getTreeData({ data, keyProp, getChildren })}>
      { children }
    </Animated>
  );
}

AnimatedTree.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.node,
	direction: PropTypes.oneOf(['ltr', 'rtl']).isRequired,
	duration: PropTypes.number.isRequired,
	easing: PropTypes.func.isRequired,
	steps: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	getChildren: PropTypes.func.isRequired,
	margins: PropTypes.shape({
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired
	}),
	pathFunc: PropTypes.func,
	nodeShape: PropTypes.oneOf(['circle', 'image', 'polygon', 'rect']).isRequired,
	nodeProps: PropTypes.object.isRequired,
	gProps: PropTypes.object.isRequired,
	pathProps: PropTypes.object.isRequired,
	svgProps: PropTypes.object.isRequired,
	textProps: PropTypes.object.isRequired
};

// AnimatedTree.defaultProps = {
// 	direction: 'ltr',
// 	duration: 500,
// 	easing: easeQuadOut,
// 	getChildren: n => n.children,
// 	steps: 20,
// 	keyProp: 'name',
// 	labelProp: 'name',
// 	nodeShape: 'circle',
// 	nodeProps: {},
// 	gProps: {},
// 	pathProps: {},
// 	svgProps: {},
// 	textProps: {}
// };