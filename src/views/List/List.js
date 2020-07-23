import React, { useState } from "react";
import { connect } from "react-redux";
import {
  PlusOutlined,
  EllipsisOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { Col, Input, Button } from "antd";
import "./style.css";
import {
  addCardDoing,
  deleteListDoing,
  editListDoing,
  deleteCardDoing,
  getCardDoing
} from "./../../redux/TodoList/action";
import DetailTask from "./DetailTask";
function ListBoard(props) {
  const { list } = props;
  const [idDetail, setIdDetail] = useState({});
  const [nameEditList, setNameEditList] = useState("");
  const [newCard, setNewCard] = useState("");
  const [statusFormEditList, setStatusFormEditList] = useState("none");
  const [statusBtnEditList, setStatusBtnEditList] = useState("block");
  const [detailStatus, setDetailStatus] = useState("none");
  const [statusAddCardForm, setStatusAddCardForm] = useState("none");
  const [statusOpenFromAddCard, setStatusOpenFromAddCard] = useState("block");

  function handleAddCard(id, listName) {
    if (newCard === "" || newCard === null) {
      handleClose();
    } else {
      props.addCard(id, listName, newCard);
      setNewCard("");
      handleClose();
    }
  }
  let dataDelete = (props.data || []).filter(
    data => data.IDcategory === list.id
  );

  let Task = (props.data || []).filter(data => data.IDcategory === list.id);

  function handleOpen() {
    setStatusAddCardForm("block");
    setStatusOpenFromAddCard("none");
  }
  function handleClose() {
    setNewCard("");
    setStatusAddCardForm("none");
    setStatusOpenFromAddCard("block");
  }
  async function handleOpenDetailPage(item) {
    setIdDetail(item);
    setDetailStatus("block");
  }

  return (
    <>
      <Col span={20}>
        <div className="border-list" style={{ padding: 10 }}>
          <div className="header-list">
            <h4
              onClick={e =>
                setStatusBtnEditList("none") & setStatusFormEditList("block")
              }
              style={{
                display: statusBtnEditList,
                width: "100%",
                float: "left"
              }}
            >
              {list.ListName}
            </h4>
            <EllipsisOutlined
              style={{ display: statusBtnEditList }}
              onClick={() => props.deleteList(list.id, dataDelete)}
            />
          </div>
          <Input
            type="text"
            style={{ display: statusFormEditList, borderRadius: 10 }}
            onChange={e => setNameEditList(e.target.value)}
            onKeyPress={e =>
              e.key === "Enter"
                ? nameEditList === null || nameEditList === ""
                  ? setStatusBtnEditList("block") &
                    setStatusFormEditList("none")
                  : props.editList(list.id, nameEditList) &
                    setStatusBtnEditList("block") &
                    setStatusFormEditList("none") &
                    setNameEditList("")
                : null
            }
          />
          <div className="list-card">
            {Task.map((item, index) => {
              return (
                <div className="card-box" key={index}>
                  <div
                    className="border-card"
                    onClick={() => handleOpenDetailPage(item)}
                  >
                    <p className="card-title"> {item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="box-btn-add-card">
            <div style={{ display: statusAddCardForm }}>
              <Input
                style={{
                  width: "120%",
                  marginLeft: -10,
                  height: 50,
                  borderRadius: 5
                }}
                type="text"
                onChange={e => setNewCard(e.target.value)}
                onKeyPress={e =>
                  e.key === "Enter"
                    ? handleAddCard(list.id, list.ListName) & setNewCard("")
                    : () => handleClose()
                }
              />
              <br />
              <Button
                style={{ background: "#5aac44", height: 30, width: 100 }}
                onClick={e => handleAddCard(list.id, list.ListName)}
                className="btn-add-card"
              >
                <p> Add Card</p>
              </Button>
              <CloseOutlined onClick={() => handleClose()} />
            </div>
          </div>
          <div
            className="box-btn-open-add-card-form"
            style={{ display: statusOpenFromAddCard }}
            onClick={e => handleOpen()}
          >
            <PlusOutlined className="btn-open-add-card-form" />
            Add another card
          </div>
        </div>
      </Col>
      <DetailTask
        id={idDetail.id}
        setDisplay={setDetailStatus}
        status={detailStatus}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    data: state.arrList.Tasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCard: (listID, listName, data) => {
      dispatch(addCardDoing(listID, listName, data));
    },

    editList: (id, newName) => {
      dispatch(editListDoing(id, newName));
    },
    deleteList: (id, arrTask) => {
      dispatch(deleteListDoing(id, arrTask));
    },
    deleteCard: id => {
      dispatch(deleteCardDoing(id));
    },
    fetchCard: id => {
      dispatch(getCardDoing(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListBoard);
