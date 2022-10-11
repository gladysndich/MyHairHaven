class CustomersController < ApplicationController

    def show
        customer = Customer.find_by(id:params[:id])
        if customer
            render json:customer, except:[:created_at, :updated_at]
        else
            render json:{Error:"Customer not found"},status: :not_found
        end
    end

    def update
        customer = Customer.find_by(id: params[:id])
            if customer
                customer.update(customer_params)
                render json: customer, status: :ok
            else
                render json: {error: "Customer not found"}, status: :no_content
            end
        end
    end

    def destroy
        customer = Customer.find_by(id:params[:id])
        if customer
            customer.destroy
            head:no_content
        else
            render json: {error:"Customer not found"}, status: :not_found
        end
    end

    def create
        customers = Customer.create(name:params[:name],location:params[:location],phone_number:params[:phone_number])
        render json:customer,status: :created
    end
end