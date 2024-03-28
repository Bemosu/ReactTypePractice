import React from 'react';
import { BrowserRouter as Router ,Navigate, Route, Routes } from 'react-router-dom';
import Project from './screens/Project'
import ProjectDetail from './screens/ProjectDetail'
import Layout from './componenet/layout/Layout'
import Error from './componenet/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Navigate replace to="/project"/>}/>
        <Route path="/project" element={<Layout />}>
          <Route path="" element={<Project/>}/>
          <Route path=":projectId" element={<ProjectDetail text="test 문구입니다! <3"/>}/>
       </Route >
      <Route path="/error" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
