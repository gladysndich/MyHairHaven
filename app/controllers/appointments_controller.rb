class AppointmentsController < ApplicationController
 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Appointment.all
    end

    def show
        appointment = find_appointment
        render json: appointment
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = find_appointment
            appointment.update(appointment_params)
            render json: appointment
    end

    def destroy
        appointment = find_appointment
            appointment.destroy
            head :no_content
    end

    private

    def find_appointment
        Appointment.find(params[:id])
    end

    
    def appointment_params
        params.permit(:time, :customer_id, :hairdresser_id)
    end

    def render_not_found_response
        render json: { error: "Appointment not found" } , status: :not_found
    end

end

