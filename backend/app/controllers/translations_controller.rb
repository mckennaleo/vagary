class TranslationsController < ApplicationController

  def show
    @translation = Translation.find(translation_params)
    render json: @translation
  end

  private

  def translation_params
    params.require(:translation).permit(:id, :phrase, :city_id)
  end


end
