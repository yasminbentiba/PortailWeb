import React, { Component } from "react";
import Modal from "./Modal";
import "./forum.scss";
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Button,
  Alert,
  Col,
} from "react-bootstrap";

import "whatwg-fetch";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";

import { ProductProvider, ProductConsumer } from "../Context";
import { Table} from "react-bootstrap";

class Forum extends Component {
  state = {
    modal: false,
  };

  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };

  render() {
    return (
      <div className="container">
        <ProductProvider />

        <div className=" containerComment">
          <h3>CRUD Operations</h3>

          <ProductConsumer>
           { (value)=> {
             return(
               <Table size="sm" variant="dark" stripted bordered hover >
                 <tbody>
                   <tr>
                     <th>Title </th>
                     <th>Information </th>
                     <th>Price </th>
                     <th>Company </th>
                     <th>Actions </th>
                   </tr>

                   <tr>
                   <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}></input></td> 
                   <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}></input></td>
                   <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}></input></td>
                   <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}></input></td>
                   <td> <Button size="sm" onClick={()=>{value.onSave(value.id)}}> {value.id? "save" : "Add New Row"}</Button></td>
                   </tr>
                   {value.Alldata.map(product=>{
                     return(
                       <tr>
                         <td>{product.title}</td>
                         <td> {product.info} </td>
                         <td> {product.price} </td>
                         <td> {product.company} </td>
                         <td> 
                           <Button size="sm" variant="primary" onClick={()=>value.onEdit(product.id)}> Edit</Button> | <Button size="sm" variant="danger" onClick={()=>value.onDelete(product.id)}> Delete</Button>
                         </td>
                       </tr>
                     )
                   })}
                 </tbody>


               </Table>
             )
           }} 
          </ProductConsumer>

        </div>

        <div className="main-body p-0">
          <div className="inner-wrapper">
            {/*         <!-- Inner sidebar -->
             */}
            <div className="inner-sidebar">
              {/*             <!-- Inner sidebar header -->
               */}
              <div className="inner-sidebar-header justify-content-center">
                <button
                  onClick={this.selectModal}
                  style={{ borderRadius: "20px" }}
                  className="btn btn-primary "
                  type="button"
                  data-toggle="modal"
                  data-target="#threadModal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-plus mr-2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Nouveau Sujet
                </button>
                <Modal
                  closeTimeoutMS={2000}
                  displayModal={this.state.modal}
                  closeModal={this.selectModal}
                />
              </div>
              {/*             <!-- /Inner sidebar header -->
               */}
              {/*             <!-- Inner sidebar body -->
               */}{" "}
              <div className="inner-sidebar-body p-0">
                <div className="p-3 h-100" data-simplebar="init">
                  <div
                    className="simplebar-wrapper"
                    style={{ margin: "-16px" }}
                  >
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: "0 px" }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{
                            height: " 100%",
                            overflow: " hidden scroll",
                          }}
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: "16px;" }}
                          >
                            <nav className="nav nav-pills nav-gap-y-1 flex-column">
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon active"
                              >
                                Tout
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon"
                              >
                                Populaire cette semaine{" "}
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon"
                              >
                                Populaire de tous les temps
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon"
                              >
                                Résolu
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon"
                              >
                                Non résolu
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="nav-link nav-link-faded has-icon"
                              >
                                Pas encore de réponse
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "234px", height: "292px" }}
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "visible;" }} //visible or hidden
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: "0px", display: "none" }}
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: "151px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              {/*             <!-- sidebar body -->
               */}{" "}
            </div>
            {/*         <!-- sidebar -->
             */}
            {/*         <!--  main -->
             */}{" "}
            <div className="inner-main">
              {/*             <!-- main header -->
               */}{" "}
              <div className="inner-main-header">
                <a
                  className="nav-link nav-icon rounded-circle shadow nav-link-faded mr-3 d-md-none"
                  href="#"
                  data-toggle="inner-sidebar"
                >
                  <i className="material-icons">arrow_forward_ios</i>
                </a>
                <select className=" searchselect search  custom-select-sm  mr-1">
                  <option selected="">Tout</option>
                  <option value="1">Par Titre</option>
                  <option value="1">Par Auteur</option>
                </select>
                <span className="searchinput input-icon input-icon-sm ml-auto ">
                  <input
                    type="text"
                    className="forminput bg-gray-200 border-gray-200  mb-4 mt-4 "
                    placeholder="Rechercher forum"
                  />
                </span>
              </div>
              {/* 
            <!--header  du forum container-->

            <!-- Boody du forum container--> */}
              {/*   <!-- Debut Liste des forum --> */}
              <div className="inner-main-body p-2 p-sm-3 collapse forum-content show">
                <div
                  style={{ borderRadius: "10px" }}
                  className=" card-niveau-2 card mb-2"
                >
                  <div className="card-body p-2 p-sm-3">
                    <div className="media forum-item">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target=".forum-content"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="mr-3 rounded-circle shadow "
                          width="50"
                          alt="User"
                        />
                      </a>
                      <div className="media-body">
                        <h6>
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target=".forum-content"
                            className="text-body"
                          >
                            Realtime fetching data
                          </a>
                        </h6>
                        <p className="text-secondary">
                          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                          lorem ipsum dolor sit amet
                        </p>
                        <p className="text-muted">
                          <a href="javascript:void(0)">drewdan</a> replied{" "}
                          <span className="text-secondary font-weight-bold">
                            13 minutes ago
                          </span>
                        </p>
                      </div>
                      <div className="text-muted small text-center align-self-center">
                        <span className="d-none d-sm-inline-block">
                          <i className="far fa-eye"></i>
                          <fa-eye /> 19
                        </span>
                        <span>
                          <i className="far fa-comment ml-2"></i> 3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2" style={{ borderRadius: "10px" }}>
                  <div className="card-body p-2 p-sm-3">
                    <div className="media forum-item">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target=".forum-content"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="mr-3 rounded-circle shadow"
                          width="50"
                          alt="User"
                        />
                      </a>
                      <div className="media-body">
                        <h6>
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target=".forum-content"
                            className="text-body"
                          >
                            Laravel 7 database backup
                          </a>
                        </h6>
                        <p className="text-secondary">
                          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                          lorem ipsum dolor sit amet
                        </p>
                        <p className="text-muted">
                          <a href="javascript:void(0)">jlrdw</a> replied{" "}
                          <span className="text-secondary font-weight-bold">
                            3 hours ago
                          </span>
                        </p>
                      </div>
                      <div className="text-muted small text-center align-self-center">
                        <span className="d-none d-sm-inline-block">
                          <i className="far fa-eye"></i> 18
                        </span>
                        <span>
                          <i className="far fa-comment ml-2"></i> 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2" style={{ borderRadius: "10px" }}>
                  <div className="card-body p-2 p-sm-3">
                    <div className="media forum-item">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target=".forum-content"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="mr-3 rounded-circle shadow"
                          width="50"
                          alt="User"
                        />
                      </a>
                      <div className="media-body">
                        <h6>
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target=".forum-content"
                            className="text-body"
                          >
                            Http client post raw content
                          </a>
                        </h6>
                        <p className="text-secondary">
                          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                          lorem ipsum dolor sit amet
                        </p>
                        <p className="text-muted">
                          <a href="javascript:void(0)">ciungulete</a> replied{" "}
                          <span className="text-secondary font-weight-bold">
                            7 hours ago
                          </span>
                        </p>
                      </div>
                      <div className="text-muted small text-center align-self-center">
                        <span className="d-none d-sm-inline-block">
                          <i className="far fa-eye"></i> 32
                        </span>
                        <span>
                          <i className="far fa-comment ml-2"></i> 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2" style={{ borderRadius: "10px" }}>
                  <div className="card-body p-2 p-sm-3">
                    <div className="media forum-item">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target=".forum-content"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          className="mr-3 rounded-circle shadow"
                          width="50"
                          alt="User"
                        />
                      </a>
                      <div className="media-body">
                        <h6>
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target=".forum-content"
                            className="text-body"
                          >
                            Top rated filter not working
                          </a>
                        </h6>
                        <p className="text-secondary">
                          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                          lorem ipsum dolor sit amet
                        </p>
                        <p className="text-muted">
                          <a href="javascript:void(0)">bugsysha</a> replied{" "}
                          <span className="text-secondary font-weight-bold">
                            11 hours ago
                          </span>
                        </p>
                      </div>
                      <div className="text-muted small text-center align-self-center">
                        <span className="d-none d-sm-inline-block">
                          <i className="far fa-eye"></i> 49
                        </span>
                        <span>
                          <i className="far fa-comment ml-2"></i> 9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*-------------------- Pagination-------------------- */}
                <ul className="pagination pagination-sm pagination-circle justify-content-center mb-0">
                  <li className="page-item disabled">
                    <span className="page-link has-icon">
                      <i className="material-icons">chevron_Gauche</i>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link has-icon" href="javascript:void(0)">
                      <i className="material-icons">chevron_Droit</i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* 
            <!-- fin Forum List -->

            <!-- Debut Forum Detail --> */}
              <div className="inner-main-body p-2 p-sm-3 collapse forum-content">
                <a
                  href="#"
                  className="btn btn-light btn-sm mb-3 has-icon"
                  data-toggle="collapse"
                  data-target=".forum-content"
                >
                  <i className="fa fa-arrow-left mr-2"></i>Back
                </a>
                <div className="card mb-2" style={{ borderRadius: "10px" }}>
                  <div className="card-body">
                    <div className="media forum-item">
                      <a href="javascript:void(0)" className="card-link">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle shadow"
                          width="50"
                          alt="User"
                        />
                        <small className="d-block text-center text-muted">
                          Newbie
                        </small>
                      </a>
                      <div className="media-body ml-3">
                        <a href="javascript:void(0)" className="text-secondary">
                          Mokrani
                        </a>
                        <small className="text-muted ml-2">1 hour ago</small>
                        <h5 className="mt-1">Realtime fetching data</h5>
                        <div className="mt-3 font-size-sm">
                          <p>Hellooo :)</p>
                          <p>
                            I'm newbie with laravel and i want to fetch data
                            from database in realtime for my dashboard anaytics
                            and i found a solution with ajax but it dosen't work
                            if any one have a simple solution it will be helpful
                          </p>
                          <p>Thank</p>
                        </div>
                      </div>
                      <div className="text-muted small text-center">
                        <span className="d-none d-sm-inline-block">
                          <i className="far fa-eye"></i> 19
                        </span>
                        <span>
                          <i className="far fa-comment ml-2"></i> 3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2" style={{ borderRadius: "10px" }}>
                  <div className="card-body">
                    <div className="media forum-item">
                      <a href="javascript:void(0)" className="card-link">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="rounded-circle shadow"
                          width="50"
                          alt="User"
                        />
                        <small className="d-block text-center text-muted">
                          Pro
                        </small>
                      </a>
                      <div className="media-body ml-3">
                        <a href="javascript:void(0)" className="text-secondary">
                          drewdan
                        </a>
                        <small className="text-muted ml-2">1 hour ago</small>
                        <div className="mt-3 font-size-sm">
                          <p>What exactly doesn't work with your ajax calls?</p>
                          <p>
                            Also, WebSockets are a great solution for realtime
                            data on a dashboard. Laravel offers this out of the
                            box using broadcasting
                          </p>
                        </div>
                        <button className="btn btn-xs text-muted has-icon">
                          <i className="fa fa-heart" aria-hidden="true"></i>1
                        </button>
                        <a
                          href="javascript:void(0)"
                          className="text-muted small"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- fin Forum Detail -->

            <!-- /Inner main body --> */}
            </div>
            {/*         <!-- /Inner main -->
             */}{" "}
          </div>
          {/*     <!-- New Thread Modal -->
           */}{" "}
          <div
            className="modal fade"
            id="threadModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="threadModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <form>
                  <div className="modal-header d-flex align-items-center bg-primary text-white">
                    <h6 className="modal-title mb-0" id="threadModalLabel">
                      Ajouter Un Sujet
                    </h6>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label className="labelforum" for="threadTitle">
                        Titre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="threadTitle"
                        placeholder="Enter title"
                        autofocus=""
                      />
                    </div>
                    <textarea
                      className="textareaforum form-control summernote"
                      style={{ display: "none" }}
                    ></textarea>

                    <div
                      className="custom-file form-control-sm mt-3"
                      style={{ width: "300px" }}
                    >
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        multiple=""
                      />
                      <label
                        className="labelforum custom-file-label"
                        for="customFile"
                      >
                        Attachment
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-dismiss="modal"
                    >
                      Annuler
                    </button>
                    <button type="button" className="btn btn-primary">
                      Poster
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forum;
