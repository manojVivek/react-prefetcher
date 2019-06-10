import Prefetcher from './prefetcher';

export default Prefetcher;

export const OnLoadPrefetcher = ({ link, ...other }) => (
  <Prefetcher renderLink={link} {...other} />
);

export const OnHoverPrefetcher = ({ link, ...other }) => (
  <Prefetcher hoverLink={link} {...other} />
);

export const OnClickPrefetcher = ({ link, ...other }) => (
  <Prefetcher clickLink={link} {...other} />
);
