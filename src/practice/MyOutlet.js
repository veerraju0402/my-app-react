import { Outlet } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import MyContactFun from '../pages/Contact'
import MyHomeFun from '../pages/Home'

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
  
        {/* This element will render either <DashboardMessages> when the URL is
            "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
        */}
        <Outlet />
      </div>
    );
  }
  
  export default function Appp() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="messages"
            element={<MyContactFun />}
          />
          <Route path="tasks" element={<MyHomeFun />} />
        </Route>
      </Routes>
    );
  }