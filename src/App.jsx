import { AuthProvider } from 'src/context/AuthProvider';
import { Pages } from 'src/pages';
import './App.css';

export const App = () => {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  );
}