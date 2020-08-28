class BadgesController < ApplicationController

  def show
    render json: @badge  # ???
  end

  private

  def set_badges
    @badges = Badge.find(params[:id])
  end

  # def post_params
  #   params.fetch(:post, {}).permit(:content)
  # end


end

end
