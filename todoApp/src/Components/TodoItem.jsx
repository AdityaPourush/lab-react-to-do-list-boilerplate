import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let {e, i, updateItem, deleteItem , buttonStyle} = this.props;

    return (
      <>
        <div key={i} id="edit">
          <input
            className="input-box"
            type="text"
            value={e}
            onChange={(event) => {
              updateItem(event.target.value, i);
            }}
          />

          <button
            className="delete"
            style={buttonStyle}
            onClick={() => deleteItem(i)}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
