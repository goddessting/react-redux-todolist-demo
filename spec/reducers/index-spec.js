'use strict';
import reducer from "../../src/reducers/index";
import * as actions from "../../src/actions/index";

describe('reducer', () => {

  it('adds a todo', () => {
    reducer({todos: []}, actions.newTodo('run')).should.deep.equal({
      todos: [
        {content: 'run', active: true}
      ]
    })
  });

  it('edits a todo', () => {
    reducer({
      todos: [
        {content: 'run1', active: true},
        {content: 'run2', active: true}
      ]
    }, actions.editTodo(1, 'stop')).should.deep.equal({
      todos: [
        {content: 'run1', active: true},
        {content: 'stop', active: true}
      ]
    })
  });

  it('toggles a todo', () => {
    reducer({
      todos: [
        {content: 'run1', active: true},
        {content: 'run2', active: true}
      ]
    }, actions.toggleTodo(1)).should.deep.equal({
      todos: [
        {content: 'run1', active: true},
        {content: 'run2', active: false}
      ]
    })
  });

  it('deletes a todo', () => {
    reducer({
      todos: [
        {content: 'run1', active: true},
        {content: 'run2', active: true}
      ]
    }, actions.deleteTodo(1)).should.deep.equal({
      todos: [
        {content: 'run1', active: true}
      ]
    })
  })
});
