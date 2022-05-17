export function toggleLesson(module, lesson) {
  console.log(module)
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson
  };
}