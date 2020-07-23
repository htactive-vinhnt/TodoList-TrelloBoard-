import React, { useState } from "react";
import { connect } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Button, Layout } from "antd";
import {
  deleteCardDoing,
  editCardDoing,
  upDateCardDescriptionDoing
} from "./../../redux/TodoList/action";

function DetailTask(props) {
  let task = (props.data || []).filter(data => data.id === props.id);
  const { id, setDisplay, status } = props;
  const { Header, Sider, Content } = Layout;
  // const [task, setTask] = useState(obj[0]);
  const [newTaskName, setNewTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [formEditTaskStatus, setFormEditTaskStatus] = useState("none");
  const [btnFormEditTaskStatus, setBtnFormEditTaskStatus] = useState("block");

  const [statusInputDesNoData, setStatusInputDesNoData] = useState("none");
  const [statusDesNoData, setStatusDesNoData] = useState("block");

  const [statusInputDes, setStatusInputDes] = useState("none");
  const [statusDes, setStatusDes] = useState("block");

  function handleOpenFormEditTask() {
    setNewTaskName((task[0] || []).name);
    setFormEditTaskStatus("block");
    setBtnFormEditTaskStatus("none");
  }

  function handleCloseFormEditTask() {
    setFormEditTaskStatus("none");
    setBtnFormEditTaskStatus("block");
  }

  function handleOpenUpdateDesFormNoData() {
    setStatusInputDesNoData("block");
    setStatusDesNoData("none");
  }

  function handleCloseUpdateDesFormNoData() {
    setStatusInputDesNoData("none");
    setStatusDesNoData("block");
  }
  function handleOpenUpdateDesForm() {
    setDescription((task[0] || []).Description);
    setStatusInputDes("block");
    setStatusDes("none");
  }

  function handleCloseUpdateDesForm() {
    setStatusInputDes("none");
    setStatusDes("block");
  }
  function handleEditTaskName(id) {
    if (newTaskName === "" || newTaskName === null) {
      setNewTaskName("");
      handleCloseFormEditTask();
    } else {
      props.EditCard(id, newTaskName);
      setNewTaskName("");
      handleCloseFormEditTask();
    }
  }

  function handleUpdateTaskDscription(id) {
    if (description === "" || description === null) {
      setDescription((task[0] || []).Description);
      handleCloseUpdateDesForm();
      handleCloseUpdateDesFormNoData();
    } else {
      props.updateDecription(id, description);
      setDescription((task[0] || []).Description);
      handleCloseUpdateDesForm();
      handleCloseUpdateDesFormNoData();
    }
  }
  console.log((task[0] || []).name);

  return (
    <div
      className="window-detail"
      style={{ display: status }}
      key={(task[0] || []).id}
    >
      <Layout className="card-detail" style={{ backgroundColor: "#f8f8f8" }}>
        <Header
          className="header-detail"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <h2 style={{ width: "100%", height: 100 }}>
            <p
              style={{ display: btnFormEditTaskStatus }}
              onClick={() => handleOpenFormEditTask()}
            >
              {(task[0] || []).name}
            </p>
            <Input
              style={{ display: formEditTaskStatus }}
              type="text"
              onChange={e => setNewTaskName(e.target.value)}
              value={newTaskName}
              onKeyPress={e =>
                e.key === "Enter"
                  ? handleEditTaskName((task[0] || []).id)
                  : null
              }
            />
            <p style={{ color: "black" }}>
              in list: {(task[0] || []).category}
            </p>
          </h2>
          <CloseOutlined
            style={{ right: 0 }}
            onClick={() => setDisplay("none")}
          />
        </Header>
        <Layout>
          <Content className="content-detail">
            <p>Description:</p>
            {(task[0] || []).Description === null ||
            (task[0] || []).Description === "" ? (
              <>
                <p
                  style={{
                    display: statusDesNoData,
                    height: 50,
                    width: "100%",
                    border: "solid"
                  }}
                  onClick={() => handleOpenUpdateDesFormNoData()}
                >
                  Add more detailed description...
                </p>
                <Input
                  style={{
                    display: statusInputDesNoData,
                    height: 50,
                    width: "100%"
                  }}
                  onChange={e => setDescription(e.target.value)}
                  onKeyPress={e =>
                    e.key === "Enter"
                      ? handleUpdateTaskDscription((task[0] || []).id)
                      : null
                  }
                />
              </>
            ) : (
              <div>
                <Button
                  style={{ display: statusDes }}
                  onClick={() => handleOpenUpdateDesForm()}
                >
                  Edit
                </Button>
                <br />
                <p style={{ display: statusDes }}>
                  {(task[0] || []).Description}
                </p>
                <Input
                  style={{
                    display: statusInputDes,
                    height: 50,
                    width: "100%"
                  }}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  onKeyPress={e =>
                    e.key === "Enter"
                      ? handleUpdateTaskDscription((task[0] || []).id)
                      : null
                  }
                />
              </div>
            )}
            <p>{(task[0] || []).DateAdd}</p>
            <Input style={{ width: "100%" }} />
          </Content>
          <Sider style={{ backgroundColor: "#f8f8f8" }}>
            <Button
              onClick={() =>
                props.deleteCard((task[0] || []).id) & setDisplay("none")
              }
            >
              Delete
            </Button>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.arrList.Tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => {
      dispatch(deleteCardDoing(id));
    },
    EditCard: (id, newName) => {
      dispatch(editCardDoing(id, newName));
    },
    updateDecription: (id, description) => {
      dispatch(upDateCardDescriptionDoing(id, description));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailTask);
