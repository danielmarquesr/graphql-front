import React from 'react';
import { Link } from 'react-router-dom';
import { HomeCurrentUserQuery } from 'src/graphql';

export interface HeaderProps {
  user: HomeCurrentUserQuery['CurrentUser'] | null;
  logout: () => void;
}

export const Header = ({ user, logout }: HeaderProps) => {
  const onClickLogout = () => {
    logout();
  };

  return (
    <header>
      {user ? (
        <>
          <div>
            Name: {user.firstName} {user.lastName}
          </div>
          <br />
          <div>
            <button type="button" onClick={onClickLogout}>
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
    </header>
  );
};
