class PlansController < ApplicationController

    # GET /plans
    def index
        authenticate_user
        @plans = Plan.all
    end

    # GET /plans/new
    def new
        authenticate_user
      @plan = Plan.new
    end

    # POST /plans/create
    def create
        authenticate_user
        @plan = Plan.new(plan_params)
        @plan[:user_id] = session[:user_id]

        if @plan.save
            flash[:success] = "Plan saved."
            redirect_to '/home'
        else
            flash[:danger] = "There was a problem saving the plan."
            redirect_to 'plans/new'
        end
    end

    private
        # Only allow a list of trusted parameters through.
        def plan_params
        params.require(:plan).permit(:title, :body, :id)
        end
 
  end
  