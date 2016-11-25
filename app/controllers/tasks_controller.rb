class TasksController < ApplicationController

  def index
    @presenter = {
      :tasks => Task.last(5),
      :form => {
        :action => tasks_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }

    #old stuff
    # @tasks = Task.all
    # gon.tasks = Task.last
    new
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.save

    if request.xhr?
      render :json => Task.last(5)
    else
      redirect_to tasks_path
    end


    # @rails_task_json = @task.to_json
    # respond_to do |format|
    #   if @task.save
    #     format.json { render json: @task }
    #     format.js
    #   else
    #   end
    # end
  end

  private

    def task_params
      params.require(:task).permit(:title)
    end


end
