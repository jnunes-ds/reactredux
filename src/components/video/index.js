import React from 'react';
import { connect } from 'react-redux';

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
};

export default connect(state => ({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule
}))(Video);