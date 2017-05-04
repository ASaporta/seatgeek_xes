get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  new_user = User.create(params[:user])
  if request.xhr?

  else
    if new_user.valid?
      session[:user_id] = new_user.id
      redirect '/'
    else
      @errors = new_user.errors.full_messages
      erb :'/users/new'
    end
  end
end

get '/users/:id' do
  redirect '/'
end
