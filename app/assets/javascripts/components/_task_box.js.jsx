var TaskBox = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },

  handleTaskSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ task: data });
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="task-box">
        <TaskList tasks={ this.state.tasks } />
        <hr />
        <h2>Add task:</h2>
        <TaskForm form={ this.state.form } onTaskSubmit={ this.handleTaskSubmit } />
      </div>
    );
  }
});
