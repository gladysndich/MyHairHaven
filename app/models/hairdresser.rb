class Hairdresser < ApplicationRecord
    has_many :hairstyles
    has_many :customers
    has_many :customers, through: :appointments
end
