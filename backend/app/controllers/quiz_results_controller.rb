class QuizResultsController < ApplicationController
  before_action :authorize_request, except: :index

  def index
    quiz_results = QuizResult.all    
    render json: quiz_results.to_json
  end

  def show
    quiz_results = QuizResult.find(quiz_results_params)
    render json: @quiz_results
  end

  def create
    puts "HELLO"
    puts params
    @quiz_results = QuizResult.new(result: params[:result], user_id: params[:user_id], quiz_id: params[:quiz_id])
    if @quiz_results.save
      render json: {result: @quiz_results}, status: :created
    else
      render json: { errors: @quiz_results.errors.full_messages },
      status: :unprocessable_entity
    end
  end


  private

  def quiz_results_params
    # params.require(:quiz_results).permit(:result, :user_id, :quiz_id)
    params.permit(:result, :user_id, :quiz_id)
  end
end
