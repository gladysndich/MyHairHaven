class Hairstyle < ApplicationRecord
    belongs_to :hairdresser
    belongs_to :customer
end
