class StudentsController < ApplicationController
  before_action :authorize_request
  before_action :set_student, only: %i[show update destroy toggle]
  
  def index
    @students = StudentFilter.new(Student.all, filter_params).call
    authorize @students

    students_serialized = StudentSerializer.render_as_hash(@students)
    byebug
    render_json students_serialized, :ok
  end

  def show
    authorize @student
    render_json StudentSerializer.render_as_hash(@student), :ok
  end

  def create
    @student = Student.new(student_params)
    authorize @student

    if @student.save
      render_json StudentSerializer.render_as_hash(@student), :created
    else
      render_json @student.errors, :unprocessable_entity
    end
  end

  def update
    authorize @student
    if @student.update(student_params)
      render_json StudentSerializer.render_as_hash(@student), :ok
    else
      render_json @student.errors, :unprocessable_entity
    end
  end

  def destroy
    authorize @student
    @student.destroy
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.permit(:name, :lastname, :birthdate, :address, :school_grade, :user_id)
  end

  def filter_params
    params.permit(:name, :lastname, :birthdate, :address, :school_grade)
  end
end