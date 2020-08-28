class AvatarsController < ApplicationController
  
  def show
    render json: @avatar  # ???
  end

  private

  def set_avatar
    @avatar = Avatar.find(params[:id])
  end

  # def post_params
  #   params.fetch(:post, {}).permit(:content)
  # end


end
