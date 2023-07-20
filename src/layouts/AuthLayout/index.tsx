import Navbar from '../../components/NavBar';
import { Container, Grid } from './styles';

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar></Navbar>
      <Container>{children}</Container>
    </div>
  );
}
