class SessionsController < ApplicationController
    def home
        authenticate_user
    end

    def login
        user = User.find_by(email: params[:email])
        if params[:password]
            if user && user.authenticate(params[:password])
                session[:user_id] = user.id
                flash[:success] = "Successfully Logged In!"
                redirect_to '/home'
            else
                session[:user_id] = nil
                flash[:warning] = "Invalid Username of Password"
            end
        end
    end

    def logout
        if session[:user_id]
            flash[:warning] = "Successfully logged out!"
        end
        redirect_to '/login'
        session[:user_id] = nil
    end
end