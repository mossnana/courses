import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Metadata = (props) => {
  const { children } = props;

  return (
    <>
      <Helmet>
        {/* Web App Header */}
        <title>Delight delivery service</title>
        <meta name="description" content="Delight web app" />
        {/* Safari Header */}
        <meta name="theme-color" content="#FEF1E6" media="{prefers-color-schema: light}" />
        <meta name="theme-color" content="#CEE5D0" media="{prefers-color-schema: dark}" />
      </Helmet>
      { children }
    </>
  );
};

export default Metadata;

Metadata.propTypes = {
  children: PropTypes.node,
};

Metadata.defaultProps = {
  children: <></>,
};
