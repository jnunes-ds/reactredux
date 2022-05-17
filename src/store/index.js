import { createStore } from 'redux';

const initialState = {
    activeLesson: {},
    activeModule: {},
    modules: [
      { 
        id: 1, 
        title: 'Iniciando com React', 
        lessons: [
          { id: 1, title: 'Primeira aula' },
          { id: 2, title: 'Segunda aula' },
        ] 
      },
      {
        id: 2,
        title: 'Aprendendo Redux',
        lessons: [
          { id: 3, title: 'Terceira aula' },
          { id: 4, title: 'Quarta aula' }
        ]
      }
    ]
  };

function reducer(prevState = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_LESSON':
      return { 
        ...prevState, 
        activeLesson: action.lesson, 
        activeModule: action.module 
      };
    default:
      return prevState;
  }
}

const store = createStore(reducer);

export default store;