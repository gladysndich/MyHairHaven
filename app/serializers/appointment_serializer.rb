class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :hairdresser_id, :customer_id
end
