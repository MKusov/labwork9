require 'prime'
class MyMathController < ApplicationController
  include MyMathHelper
  def input
  end

  def server
    n=params[:n].to_i
    @arr=(1..1.0/0.0).lazy.map{|x| 2**x - 1}
                    .take_while{|x| x < n}
                    .select{|x| Prime.prime?(x)}.to_a
    respond_to do |format|
      format.html
      format.json do
        render json:
                   {type: @arr.class.to_s, value: @arr}
      end
     end
  end

end
