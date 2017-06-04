/* global it, describe, before, after */
import { expect } from 'chai';
import Person from '../dist/person';

describe('person tests', () => {
  let person;

  before(() => person = new Person('Mike', '42'));

  after(() => person = undefined);

  it('getName', () => {
    expect(person.getName()).to.equal('Mike');
  });

  it('getAge', () => {
    expect(person.getAge()).to.equal('42');
  });
});
