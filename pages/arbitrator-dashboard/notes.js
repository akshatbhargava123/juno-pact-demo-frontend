import dynamic from 'next/dynamic';
import Page from '@components/common/page';
import withDashboardLayout from '@components/common/layouts/arbitrator-dashboard';

const NotesComponent = dynamic(
  () => import('@components/arbitrator-dashboard/DisputeContent/Notes').then(mod => mod.Notes),
  { ssr: false }
);

const MailsPage = () => (
  <Page title="Home" layoutProvider={withDashboardLayout}>
    {() => <NotesComponent />}
  </Page>
);

export default MailsPage;
