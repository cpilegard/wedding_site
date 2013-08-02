get '/' do
  erb :index
end

post '/rsvp' do
	user = User.create(params)
end