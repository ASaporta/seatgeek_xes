get '/performers/:query' do
  puts params[:query]
end

# TO DO:
# - create a performer model pulled from SG api
# - move code to your controller and to the model
# - make search work
# - move CLIENT_ID and hide it
# - add the begin and rescue for erroring
