import React, { Component } from "react";

import Modal from './Modal'
import "./forum.scss";
import { Button } from "react-bootstrap";

import "whatwg-fetch";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";

import { ProductProvider, ProductConsumer } from "./Context";
import { Table } from "react-bootstrap";

class Forum extends Component {
  state = {
    modal: false
 }
  
 selectModal = (info) => {
   this.setState({modal: !this.state.modal}) // true/false toggle
 }
  render() {
    return (
      <div className="">
        
        <ProductProvider />

        <div className="forumcontainer">
          <h3>Forum</h3>
<br/>
<button
              onClick={ this.selectModal }
              style={{borderRadius: "20px"}}
                className="btn btn-primary has-icon btn-block"
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

              <br/>
          <ProductConsumer>
            {(value) => {
              return (
                <Table
                  className=""
                  size="sm"
                  variant="dark"
                  stripted
                  
                  hover
                >
                  <tbody className="TableForum">
                    <tr className="TrForum">
                      <th>Image </th>
                      <th>Sujet </th>
                      <th>Auteur</th>
                      <th>Commentaire|Like </th>
                      <th>Dernier Message</th>
                      <th>Actions </th>
                    </tr>

                   {/*  <tr className="TrForum">
                      <td>
                        <input
                          type="text"
                          value={value.image}
                          onChange={(e) => {
                            value.updateValue(e, "image");
                          }}
                        ></input>
                      </td>
                      
                      <td>
                        <input
                          type="text"
                          value={value.post}
                          onChange={(e) => {
                            value.updateValue(e, "post");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.user}
                          onChange={(e) => {
                            value.updateValue(e, "user");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.comment}
                          onChange={(e) => {
                            value.updateValue(e, "comment");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.lastmsg}
                          onChange={(e) => {
                            value.updateValue(e, "lastmsg");
                          }}
                        ></input>
                      </td>
                      <td>
                        {" "}
                        <Button
                          size="sm"
                          onClick={() => {
                            value.onSave(value.id);
                          }}
                        >
                          {" "}
                          {value.id ? (
                            "save"
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          )}
                        </Button>
                      </td>
                    </tr> */}
                    {value.Alldata.map((product) => {
                      return (
                        <tr>
                          <td>
                            <a href="/post">{product.image}</a>
                          </td>
                          <td>
                            <a href="/post"> {product.post} </a>{" "}
                          </td>
                          <td> {product.user} </td>
                          <td> {product.comment} </td>
                          <td> {product.lastmsg} </td>
                          <td>
                           {/*  <Button
                              size="sm"
                              variant="primary"
                              onClick={() => value.onEdit(product.id)}
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </Button>{" "}
                            |{" "} */}
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => value.onDelete(product.id)}
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Forum;
