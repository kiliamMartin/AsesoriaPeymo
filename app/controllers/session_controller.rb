class SessionController < ApplicationController
    protect_from_forgery
    skip_before_action :verify_authenticity_token
   
#    def create
#        user = User.find_by(email: params[:session][:email].downcase)
#        if user && user.authenticate(params[:session][:password])
#          session[:user_id] = user.id
#          flash[:notice] = "Logged in successfully."
#          #redirect_to root_path
#        else
#          flash.now[:alert] = "There was something wrong with your login details."
#          #redirect '/index.html'
#        end
#    end

   
    #POST /login
    def create
        user = User.find_by(email: params[:email].downcase)
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            flash[:notice] = "Logged in successfully."
            puts "logueado correctamente"
            puts "SESSION=#{session[:user_id]}"
            flash.now[:alert] = 'Logueado correctamente'
            File.open("public/assets/json/check.json","w") do |f|
                f.write("true")
            end
            redirect_to('/assets/json/check.json')
           
           
        else
            flash.now[:alert] = "There was something wrong with your login details."
            puts "Ha ocurrido algun problema al hacer login"
            File.open("public/assets/json/check.json","w") do |f|
                f.write("false")
            end
            redirect_to('/assets/json/check.json')
        end    
    
    end

    #DELETE /logout
    def destroy
        session[:user_id] = nil
        flash[:notice] = "You have been logged out."
        puts "El usuario #{:user_id} sido deslogueado"
        puts "SESSION=#{session[:user_id]}"
        #redirect_to root_path
    end

end
