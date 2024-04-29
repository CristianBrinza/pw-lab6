import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import styles from '../styles/modules/app.module.scss';
import i18n from '../i18n';
// random comment to use the github page action
export default function Home() {
  const {
    t,
    i18n: {},
  } = useTranslation();

  return (
    <>
      <div>
        <p style={{ textAlign: 'center' }}>
          <img
            style={{
              width: '60px',
              borderRadius: '5px',
              marginTop: '30px',
            }}
            src="/images/logo.png"
            alt="TO DO"
          />
        </p>
        <PageTitle>
          {t('home.list')}
          <span style={{ color: '#BABABA', textTransform: 'lowercase' }}>
            {' '}
            Beta lab
          </span>
        </PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}
