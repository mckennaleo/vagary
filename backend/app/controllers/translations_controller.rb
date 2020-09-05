class TranslationsController < ApplicationController
  before_action :authorize_request, except: :index
  def show
    @translation = Translation.find(translation_params)
    render json: @translation
  end

  def index
    translations = Translation.all
    render json: translations.to_json
  end
  
  private

  def translation_params
    params.require(:translation).permit(:id, :phrase, :city_id)
  end


end
