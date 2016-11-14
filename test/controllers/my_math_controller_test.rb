require 'test_helper'

class MyMathControllerTest < ActionDispatch::IntegrationTest
  test "should get input" do
    get my_math_input_url
    assert_response :success
  end

  test "should get server" do
    get my_math_server_url
    assert_response :success
  end

end
