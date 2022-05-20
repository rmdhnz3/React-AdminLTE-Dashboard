import './App.css';
import React,{Component} from 'react';
import Table1 from './component/table1'
import Table2 from './component/table2'
import Table3 from './component/table3'
import Table4 from './component/table4'
import Table5 from './component/table5'
import Table6 from './component/table6'
import Table7 from './component/table7'
import Table8 from './component/table8'
import Table9 from './component/table9'
import Home from './component/home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class App extends Component{
render(){
  return(
    <Router>
      <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a  className="nav-link"><Link to="/">Home</Link></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search"role="butt on">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen"  role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
  </ul>
</nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a  className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">MejaKitaBot </span>
  </a>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex"></div>
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item menu-open">
          <a  className="nav-link active" >
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a  className="nav-link " id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table1">Tabel Grade</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table2">Tabel DPR</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table3">Tabel DPR_Topic</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table4">Tabel Topic</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table5">Tabel BC_Topic</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table6">Tabel BC</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table7">Tabel Keyword_Grade</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table8">Tabel Keyword_Major</Link></p>
              </a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" id="list">
                <i className="nav-icon fas fa-table" />
                <p><Link to="/Table9">Tabel Major</Link></p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</aside>

      </div>

      <Routes>
        <Route exact path='/table1' element={<Table1/>}></Route>
        <Route exact path='/table2' element={<Table2/>}></Route>
        <Route exact path='/table3' element={<Table3/>}></Route>
        <Route exact path='/table4' element={<Table4/>}></Route>
        <Route exact path='/table5' element={<Table5/>}></Route>
        <Route exact path='/table6' element={<Table6/>}></Route>
        <Route exact path='/table7' element={<Table7/>}></Route>
        <Route exact path='/table8' element={<Table8/>}></Route>
        <Route exact path='/table9' element={<Table9/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}
}

export default App;
