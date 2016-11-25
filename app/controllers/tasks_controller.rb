class TasksController < ApplicationController

  def index
    @tasks = Task.all

    new
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    # @rails_task_json = @task.to_json
    respond_to do |format|
      if @task.save
        format.json { @task.to_json }
        format.js
      else
      end
    end
  end

  private

    def task_params
      params.require(:task).permit(:title)
    end


end
