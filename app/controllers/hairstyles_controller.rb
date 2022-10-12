class HairstylesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :hairstyle_not_found
    
    def index
        hairstyles = Hairstyle.all
        render json: hairstyles
    end

    def show 
        hairstyle = Hairstyle.find(params[:id])
        render json: hairstyle
    end

    private
    
    def hairstyle_not_found
        render json: { error: "Hairstyle not found" }, status: 404
    end
end
