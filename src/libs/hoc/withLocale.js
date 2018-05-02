// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import localize from 'constants/localize';

const withLocale = (View) => {
  const WithLocale = (props) => {
    const { locale } = props;
    localize.setLanguage(locale);
    return (
      <View localize={localize} {...props} />
    );
  };

  return connect(
    ({ settings }) => ({
      locale: settings.locale,
    }),
    () => ({}),
  )(WithLocale);
};

export default withLocale;
