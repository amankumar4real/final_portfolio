import React from 'react';
import styles from './App.module.css';
import Info from "./Component/Info.jsx";
import Prof from "./Component/prof.jsx";
import Project from "./Component/projects";
import Footer from "./Component/footer";

function App() {
  return (
    <div className={styles.bck}>
      <Info/>
      <Prof/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
