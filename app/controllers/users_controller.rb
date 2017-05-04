get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  new_user = User.create(params[:user])
  if new_user.valid?
    session[:user_id] = new_user.id
    status 200
  else
    status 422
    @errors = new_user.errors.full_messages
    erb :'/partials/_errors', { layout: false }
  end
end

get '/users/:id' do
  redirect '/'
end
