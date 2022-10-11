class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :phone_number
end
