import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';

const StyledLayout = styled.main`
  margin: 0 auto;
  border:1px solid red;
`;

export default function Layout() {
  return (
    <>
      <Navbar />
      <StyledLayout>
        <Outlet />
      </StyledLayout>
    </>
  );
}
