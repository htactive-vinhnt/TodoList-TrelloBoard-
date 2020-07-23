import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Button, Input } from "antd";
import ListBoard from "./List/List";
import "./List/style.css";
import "antd/dist/antd.css";
import {
  getAllListAndCardDoing,
  addNewListDoing,
  getCardByCategory
} from "./../redux/TodoList/action";

function Board(props) {
  const { fetchAllList, getCardData } = props;
  const [newList, setNewList] = useState("");
  const [statusListForm, setStatusListForm] = useState("none");
  const [statusBtnAddList, setStatusBtnAddList] = useState("block");
  useEffect(() => {
    function fetchData() {
      fetchAllList();
      getCardData();
    }
    fetchData();
  }, []);

  function InputChange(event) {
    const { value } = event.target;

    setNewList(value);
  }

  function handleAddList() {
    if (newList === "" || newList === null) {
      setStatusBtnAddList("block");
      setStatusListForm("none");
    } else {
      props.addList(newList);
      setNewList("");
      setStatusBtnAddList("block");
      setStatusListForm("none");
    }
  }

  return (
    <div>
      <h1>Trello Board</h1>
      <div gutter={16} className="border-board">
        {((props.data && props.data.TodoList) || []).map((item, index) => {
          return (
            <div className="box-list" key={index}>
              <ListBoard list={item} />
            </div>
          );
        })}
        <Col className="box-list">
          <div style={{ display: statusListForm }} className="form-add-list">
            <Input
              style={{ width: "80%", height: 30 }}
              type="text"
              name="newList"
              onChange={e => InputChange(e)}
              onKeyPress={e => (e.key === "Enter" ? handleAddList() : 0)}
            />
            <br />
            <Button
              onClick={e => handleAddList(e)}
              style={{
                background: "#5aac44",
                height: 30,
                width: 100,
                color: "white"
              }}
            >
              <p> Add List</p>
            </Button>
          </div>

          <div
            style={{ display: statusBtnAddList }}
            className="box-btn-open-form-add-list"
            onClick={e => {
              setStatusBtnAddList("none");
              setStatusListForm("block");
            }}
          >
            <PlusOutlined
              className="btn-open-form-add-list"
              style={{ color: "#ebecf0", fontSize: 15, float: "left" }}
            />
            <p style={{ color: "#ebecf0", fontSize: 15, marginTop: 5 }}>
              Add another list
            </p>
          </div>
        </Col>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.arrList,
    Arrtask: state.arrList.Tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllList: () => {
      dispatch(getAllListAndCardDoing());
    },
    addList: data => {
      dispatch(addNewListDoing(data));
    },
    getCardData: () => {
      dispatch(getCardByCategory());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
