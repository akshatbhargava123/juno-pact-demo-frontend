import dynamic from 'next/dynamic';
import Page from '@components/common/page';

const HomeComponent = dynamic(
  () => import('../components/home').then(mod => mod.default),
  { ssr: false }
);

const HomePage = () => (
  <Page title="Home">
    {() => <HomeComponent />}
  </Page>
);

export default HomePage;
