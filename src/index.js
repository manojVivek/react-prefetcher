import React from 'react';
import Prefetcher from './prefetcher';

export default Prefetcher;

export const OnRenderPrefetcher = ({ link, ...other }) => (
  <Prefetcher onRenderAssets={link} {...other} />
);

export const OnHoverPrefetcher = ({ link, ...other }) => (
  <Prefetcher onHoverAssets={link} {...other} />
);

export const OnClickPrefetcher = ({ link, ...other }) => (
  <Prefetcher onClickAssets={link} {...other} />
);
