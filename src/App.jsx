import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Tabs, Tab, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './App.css';

const HomePage = lazy(() => import("./pages/HomePage"));
const BenefitList = lazy(() => import("./components/benefit/BenefitList"));
const CompanyList = lazy(() => import('./components/company/CompanyList'));
const MaterialList = lazy(() => import('./components/material/MaterialList'));
const UserInformation = lazy(() => import('./components/user/UserInformation'));

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ backgroundColor: 'var(--color-fondo)' }}>
          <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
              <AccountCircleIcon sx={{ color: 'var(--color-acento)' }} />
            </Link>
          </IconButton>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Menú" component={Link} to="/" sx={{ color: 'var(--color-acento)', '&.Mui-selected': { color: 'var(--color-principal)', fontWeight: 'bold' } }} />
              <Tab label="Beneficios" component={Link} to="/benefit" sx={{ color: 'var(--color-acento)', '&.Mui-selected': { color: 'var(--color-principal)', fontWeight: 'bold' } }} />
              <Tab label="Empresas" component={Link} to="/company" sx={{ color: 'var(--color-acento)', '&.Mui-selected': { color: 'var(--color-principal)', fontWeight: 'bold' } }} />
              <Tab label="Materiales" component={Link} to="/material" sx={{ color: 'var(--color-acento)', '&.Mui-selected': { color: 'var(--color-principal)', fontWeight: 'bold' } }} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/benefit" element={<BenefitList />} />
              <Route path="/company" element={<CompanyList />} />
              <Route path="/material" element={<MaterialList />} />
              <Route path="/user" element={<UserInformation />} />
            </Routes>
          </Suspense>
        </Box>
      </div>
    </Router>
  );
};

export default App;
