class HairdresserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :phone_number

  has_many :hairstyles
  
end
