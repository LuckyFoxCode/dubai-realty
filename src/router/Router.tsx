import { HomePage } from 'pages';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'router/index';

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<HomePage />}
      />
    </Routes>
  );
};
