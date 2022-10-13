class HairstyleSerializer < ActiveModel::Serializer
  attributes :title, :image, :price, :duration
  belongs_to :hairdresser
end
