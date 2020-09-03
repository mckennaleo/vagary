class PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find(playlist_params)
    render json: @playlist
  end

  def index
    translations = Playlist.all
    render json: playlists.to_json
  end

  private

  def playlist_params
    params.require(:playlist).permit(:id, :uri, :city_id)
  end
end
