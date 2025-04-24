module V1
    class Api::V1::RolesController < ApplicationController
        
        def index
            roles = Role.all
            render json: roles.as_json
        end

        def show
            role = Role.find(params[:id])
            render json: role.as_json()
        end
        
    end
end
