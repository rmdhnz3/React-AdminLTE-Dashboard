import React,{Component,useEffect,useState} from "react";

export default class Dashboard extends Component{

  
    render(){
        return(
<div className="content-wrapper">
  <div className="card">
    <div className="card-header">
      <div className="card-tools">
        <ul className="pagination pagination-sm">
          <li className="page-item"><a href="#" className="page-link">«</a></li>
          <li className="page-item"><a href="#" className="page-link">1</a></li>
          <li className="page-item"><a href="#" className="page-link">2</a></li>
          <li className="page-item"><a href="#" className="page-link">3</a></li>
          <li className="page-item"><a href="#" className="page-link">»</a></li>
        </ul>
      </div>
    </div>
    <div className="card-body">
      <ul className="todo-list" data-widget="todo-list">
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
            <label htmlFor="todoCheck1" />
          </div>
          <span className="text">Task 1</span>
          <small className="badge badge-danger"><i className="far fa-clock" />Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
            <label htmlFor="todoCheck2" />
          </div>
          <span className="text">Task 2</span>
          <small className="badge badge-info"><i className="far fa-clock" />Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
            <label htmlFor="todoCheck3" />
          </div>
          <span className="text">Task 3</span>
          <small className="badge badge-warning"><i className="far fa-clock" /> Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
            <label htmlFor="todoCheck4" />
          </div>
          <span className="text">Task 4</span>
          <small className="badge badge-success"><i className="far fa-clock" />Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
            <label htmlFor="todoCheck5" />
          </div>
          <span className="text">Task 5</span>
          <small className="badge badge-primary"><i className="far fa-clock" /> Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fas fa-ellipsis-v" />
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="icheck-primary d-inline ml-2">
            <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
            <label htmlFor="todoCheck6" />
          </div>
          <span className="text">Task 6</span>
          <small className="badge badge-secondary"><i className="far fa-clock" />Time since created</small>
          <div className="tools">
            <i className="fas fa-edit" />
            <i className="fas fa-trash-o" />
          </div>
        </li>
      </ul>
    </div>
    <div className="card-footer clearfix">
      <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus" /> Add item</button>
    </div>
  </div>
</div>


        )
    }
}