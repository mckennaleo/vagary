class BadgesController < ApplicationController

  def show
    @badge = Badge.find(badge_params)
    render json: @badge
  end

  def set_badges
    @badges = Badge.find(badge_params)
  end
  
  private

  def badge_params
    params.require(:badge).permit(:name, :image, :user_id)
  end

end

end
