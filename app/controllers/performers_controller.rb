get '/performers/:query' do
  CLIENT_ID = "MjYxNDUxNXwxNDkzOTA5MTg3Ljkx"
  json_string_response = open("https://api.seatgeek.com/2/events/?client_id=" + CLIENT_ID + "&performers.id=3").read
  ruby_hash_response = JSON.parse(json_string_response)
  @events = ruby_hash_response["events"]
  erb :'/performers/show', layout: false
end

# TO DO:
# - create a performer model pulled from SG api
# - move to heroku
# - move code to your controller and to the model
# - make search work
# - move CLIENT_ID and hide it
# - add the begin and rescue for erroring
