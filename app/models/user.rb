require 'rest-client'

class User < ActiveRecord::Base

  def send_mail
    puts self.status + self.name

    RestClient.post "https://api:key-04159sfvisu54yab495nsgrf0-an8n84"\
    "@api.mailgun.net/v2/coleandcarly.mailgun.org/messages",
    :from => "Cole and Carly's wedding site <me@coleandcarly.mailgun.org>",
    :to => "c.pilegard@gmail.com, carlycogburn@gmail.com",
    :subject => "Someone RSVP'd!",
    :text => "NAME: #{self.name}, STATUS: #{self.status}"
  end

end
