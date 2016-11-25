var TaskList = React.createClass({
  render: function () {
    var taskNodes = this.props.tasks.map(function ( task ) {
      return <Task title={ comment.title } key={ task.id } />
    });

    return (
      <div className="task-list">
        { taskNodes }
      </div>
    )
  }
});
