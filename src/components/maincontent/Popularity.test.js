import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Popularity from './Popularity';

describe('Popularity component', () => {
  let component;
  beforeEach(() => {
    component = render(<Popularity />);
  });

  // add the rest of the tests here
  it('should have a className of popularity"', () => {
    expect(component.find('.popularity')).toBe(true);
  });
});
