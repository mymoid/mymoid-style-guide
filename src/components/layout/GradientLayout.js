import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from './index';
import gradientLayoutStyles from './GradientLayout.css';

const GradientLayout = props => {
  const { children } = props;
  return (
    <Layout theme={gradientLayoutStyles} {...props}>
      {children}
    </Layout>
  );
};

GradientLayout.propTypes = {
  children: PropTypes.node
};

export default GradientLayout;
