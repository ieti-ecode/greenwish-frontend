import { useState, React} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}

export default App;
