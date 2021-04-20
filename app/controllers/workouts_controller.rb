class WorkoutsController < ApplicationController

    # GET /workouts
    def index
        authenticate_user
        @plans = Plan.where(user_id: session[:user_id])
    end

end