import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export interface HeaderProps {
  data: any;
}

export const Header = ({ data }: HeaderProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {data ? (
        <>
          <div>
            ID: {data.id}
            <br />
            Email: {data.email}
            <br />
            First name: {data.firstName}
            <br />
            Last name: {data.lastName}
          </div>
          <br />
          <div>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
};
