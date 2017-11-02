class Team < ActiveRecord::Base
  include Fae::Concerns::Models::Base

  has_many :coaches
  has_many :players

  validates :name, :color, presence: true

  def fae_display_field
    name
  end

end
