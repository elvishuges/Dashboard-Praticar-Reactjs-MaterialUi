import './App.css';
import { AuthProvider } from './hooks/auth';
import AppRoutes from './routes/app.routes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
