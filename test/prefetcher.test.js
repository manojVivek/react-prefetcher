import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import spies from 'chai-spies';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Prefetcher from '../index';

chai.use(chaiEnzyme());
chai.use(spies);
Enzyme.configure({ adapter: new Adapter() });

const children = <div>test</div>;
const prefetchLink1 = `https://prefetch-link1.com`;
const prefetchLink2 = `https://prefetch-link2.com`;
const customPrefetcher1 = () => {};
const customPrefetcher2 = () => {};

describe('Children tests', () => {
  it('renders nothing when no children and no onRenderAssets', () => {
    const wrapper = shallow(<Prefetcher />);
    expect(wrapper.children()).to.have.lengthOf(0);
  });

  it('renders the children when no prefetching assets', () => {
    const wrapper = shallow(<Prefetcher>{children}</Prefetcher>);
    expect(wrapper).to.contain(children);
  });
});

describe('onRenderAssets tests', () => {
  it('renders prefetch statements for single url for onRenderAssets props', () => {
    const wrapper = shallow(
      <Prefetcher onRenderAssets={prefetchLink1}>{children}</Prefetcher>
    );
    expect(wrapper).to.contain(children);
    // TODO: find a way with simulated events to avoid this manual setState()
    wrapper.setState({ rendered: true });
    expect(wrapper.find(`link[href='${prefetchLink1}']`)).to.have.lengthOf(1);
  });

  it('renders prefetch statements for an array of urls for onRenderAssets props', () => {
    const prefetchAssets = [prefetchLink1, prefetchLink2];
    const wrapper = shallow(
      <Prefetcher onRenderAssets={prefetchAssets}>{children}</Prefetcher>
    );
    expect(wrapper).to.contain(children);
    wrapper.setState({ rendered: true });
    for (const asset of prefetchAssets) {
      expect(wrapper.find(`link[href='${asset}']`)).to.have.lengthOf(1);
    }
  });

  it('invokes custom prefetcher for an single of prefetcher function for onRenderAssets props', () => {
    const prefetchAsset = chai.spy(customPrefetcher1);
    const wrapper = shallow(
      <Prefetcher onRenderAssets={{ href: 'test', fetcher: prefetchAsset }}>
        {children}
      </Prefetcher>
    );
    expect(wrapper).to.contain(children);
    wrapper.setState({ rendered: true });
    expect(prefetchAsset).to.have.been.called();
  });

  it('invokes custom prefetchers for an array of custom prefetchers for onRenderAssets props', () => {
    const prefetchAssets = [
      chai.spy(customPrefetcher1),
      chai.spy(customPrefetcher2),
    ];
    const wrapper = shallow(
      <Prefetcher
        onRenderAssets={prefetchAssets.map((fetcher, idx) => ({
          href: idx,
          fetcher,
        }))}
      >
        {children}
      </Prefetcher>
    );
    expect(wrapper).to.contain(children);
    wrapper.setState({ rendered: true });
    for (const asset of prefetchAssets) {
      expect(asset).to.have.been.called();
    }
  });

  it('works fine with a mix of urls and custom fetcher for onRenderAssets props', () => {
    const customFetcher = chai.spy(customPrefetcher1);
    const wrapper = shallow(
      <Prefetcher
        onRenderAssets={[
          prefetchLink1,
          { href: Math.random(), fetcher: customFetcher },
        ]}
      >
        {children}
      </Prefetcher>
    );
    expect(wrapper).to.contain(children);
    wrapper.setState({ rendered: true });
    expect(wrapper.find(`link[href='${prefetchLink1}']`)).to.have.lengthOf(1);
    expect(customFetcher).to.have.been.called();
  });
});
