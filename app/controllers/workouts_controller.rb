class WorkoutsController < ApplicationController

    # GET /workouts
    def index
        @plans = Plan.where(user_id: session[:user_id])
    end

end