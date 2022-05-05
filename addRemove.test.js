import UserTask from './__mocks__/addRemove.js';

describe('test localStorage add', () => {
  test('Add first sample', () => {
    const addAndRemove = new UserTask('qwerty', false, 1);
    expect(addAndRemove.add()).toBe(1);
  });
  test('Add second sample', () => {
    const addAndRemove = new UserTask('Azerty', false, 2);
    expect(addAndRemove.add()).toBe(2);
  });
  test('Add third sample', () => {
    const addAndRemove = new UserTask('new test', false, 3);
    expect(addAndRemove.add()).toBe(3);
  });
});

describe('test localStorage remove', () => {
  test('remove first sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(0)).toBe(3);
  });
  test('remove second sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(1)).toBe(2);
  });
  test('remove third sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(2)).toBe(1);
  });
});