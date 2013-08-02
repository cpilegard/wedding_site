get '/' do
  erb :index
end

post '/rsvp' do
	user = User.create(params)
	user.send_mail
end

get '/guest_list' do
	@users = User.all
	erb :_guests, layout: false
end