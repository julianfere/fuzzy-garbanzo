class StudentsController < ApplicationController
  before_action :authorize_request
  before_action :set_student, only: %i[show update destroy toggle]
  
  def index
    @students = StudentFilter.new(Student.all, filter_params).call
    authorize @students

    render json: @students
  end

  def show
    authorize @student
    render json: @student
  end

  def create
    @student = Student.new(student_params)
    authorize @student

    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  def update
    authorize @student
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
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