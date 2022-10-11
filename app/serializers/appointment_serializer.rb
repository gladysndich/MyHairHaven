class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :hairdresser_id, :customer_id
end
