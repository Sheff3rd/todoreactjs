var TaskForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var title = this.refs.title.getDOMNode().value.trim();

    // validate
    // if (!text || !author) {
    //   return false;
    // }

    // submit
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    this.props.onTaskSubmit( formData, this.props.form.action );

    // reset form
    this.refs.title.getDOMNode().value = "";
  },
  render: function () {
    return (
      <form ref="form" className="task-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><textarea ref="title" name="task[title]" placeholder="Say something..." /></p>
        <p><button type="submit">Post task</button></p>
      </form>
    )
  }
});
