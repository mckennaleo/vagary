class AvatarsController < ApplicationController
  
  def show
    @avatar = Avatar.find(avatar_params)
    render json: @avatar
  end

  private

  def set_avatar
    @avatar = Avatar.find(avatar_params)
  end

  private 

  def avatar_params
    params.require(:avatar).permit(:name, :avatar_img, :sprite)
  end

end
