class SongsController < ApplicationController 
  before_action :require_login, except: [:show] 

  def index 
    @songs = Song.all 
  end 

  def show 
    @song = Song.find(params[:id]) 
    render :show 
  end 

  def create 
    @song = Song.new(song_params) 

    if @song 
      render :show 
    else 
      render json: @song.errors.full_messages, status: 422 
    end 
  end 

  def update 
  end 

  def destroy 
  end 

  private 

  def song_params 
    params.require(:song).permit(:song_title) 
  end 
end 
