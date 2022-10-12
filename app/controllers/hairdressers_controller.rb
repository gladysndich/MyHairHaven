class HairdressersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :hairdresser_not_found

    def index
        hairdressers = Hairdresser.all
        render json: hairdressers
    end

    def show 
        hairdresser = Hairdresser.find(params[:id])
        render json: hairdresser
    end

    private
    
    def hairdresser_not_found
        render json: { error: "Hairdresser not found" }, status: :not_found
    end
end
