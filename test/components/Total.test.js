import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Total from '../../src/components/Total';

describe('<Total />', function () {
  beforeEach(function () {
    this.wrapper = shallow(<Total costs={{}} options={{}}/>);
  });

  it('renders', function () {
    expect(this.wrapper.find('.Total')).to.be.lengthOf(1);
  });

  describe('calculateTotal', () => {
    describe('handles when base cost is not supplied', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Total costs={{}} options={{}}/>);
      });
      it('by passing $0', () => {
        expect(wrapper.find('h1').text()).to.equal('$0');
      });
    });
    describe('handles when base cost is present', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Total costs={{}} options={{}} baseCost={100}/>);
      });
      it('by passing through and formatting total', () => {
        expect(wrapper.find('h1').text()).to.equal('$100');
      });
    });
    describe('handles when items are passed', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Total costs={{ fish: 2 }}
          options={{ fish: { label: 'fish', type: 'subtotal' } }}
          baseCost={100}
        />);
        wrapper.instance().setState({fieldValues: {fish: 1}});
      });
      it('by adding them to the base value using a different style of test than the prior two', () => {
        const result = wrapper.instance().calculateTotal();
        expect(result).to.equal('$102');
      });
    });
  });
});
