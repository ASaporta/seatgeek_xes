post '/login' do
  user = User.find_by(email: params[:user][:email])
  if user && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    status 200
  else
    status 422
    @errors = ["Email or password is incorrect"]
    erb :'/partials/_errors', { layout: false }
  end
end

get '/logout' do
  session.clear
  redirect '/'
end
