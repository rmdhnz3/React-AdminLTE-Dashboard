import React,{Component,useEffect,useState} from "react";

export default class Dashboard extends Component{

  
    render(){
        return(
            <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Tabel Data Keyword_Grade</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Tabel Data Keyword_Grade</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tabel Data Simpel dengan Fitur CRUD </h3>
              </div>
              <div className="card-body">
                <table id="example" className="table table-bordered table-hover">
                  <thead>
                    <tr>
                    <th>ID</th>
                      <th>Grade_ID</th>
                      <th>Keyword</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

        )
    }
}