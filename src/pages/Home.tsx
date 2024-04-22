// Home.tsx
import { Toaster } from 'react-hot-toast';
import PageTitle from '../components/PageTitle';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import styles from '../styles/modules/app.module.scss';

export default function Home() {
  return (
    <div>

      <div className="container">
          <p style={{textAlign:"center"}}><img style={{
              width: "60px",
              borderRadius: "5px",
              marginTop: "30px"
          }} src="/images/logo.png" alt="TO DO"/></p>
          <PageTitle>TODO List <span style={{color: "#BABABA", textTransform:"lowercase"}}>Beta lab</span></PageTitle>
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
    </div>
  );
}
