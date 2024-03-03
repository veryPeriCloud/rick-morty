import { AuthProvider } from '~/context/AuthProvider';
import { Pages } from '~/pages';
import '~/App.css';

function App() {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  );
}

export default App;
