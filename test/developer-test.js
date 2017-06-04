/* global it, describe, before, after */

import { expect } from 'chai';
import Developer from '../dist/developer';

describe('developer tests', () => {
  let developer;

  before(() => developer = new Developer('Mike', '42'));

  after(() => developer = undefined);

  it('getName', () => {
    expect(developer.getName()).to.equal('Mike');
  });

  it('getAge', () => {
    expect(developer.getAge()).to.equal('42');
  });

  it('getWhoAmI', () => {
    expect(developer.getWhoAmI()).to.equal('Mike JavaScript Developer');
  });
});
