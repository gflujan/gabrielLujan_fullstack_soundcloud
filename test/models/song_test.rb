# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  song_title :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
