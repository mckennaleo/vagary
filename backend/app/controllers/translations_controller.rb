class TranslationsController < ApplicationController

  def show
    @translation = Translation.find(translation_params)
    render json: @translation
  end

  def index
    appointments = Appointment.all
    render json: appointments.to_json
  end
  
  private

  def translation_params
    params.require(:translation).permit(:id, :phrase, :city_id)
  end


end
