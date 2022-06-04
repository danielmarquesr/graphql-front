import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HomeCurrentUserQuery$data } from 'src/pages/Home/__generated__/HomeCurrentUserQuery.graphql';

export interface HeaderProps {
  data: HomeCurrentUserQuery$data;
}

export const Header = ({ data }: HeaderProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {data.CurrentUser ? (
        <>
          <div>
            ID: {data.CurrentUser.id}
            <br />
            Email: {data.CurrentUser.email}
            <br />
            First name: {data.CurrentUser.firstName}
            <br />
            Last name: {data.CurrentUser.lastName}
          </div>
          <br />
          <div>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
};
