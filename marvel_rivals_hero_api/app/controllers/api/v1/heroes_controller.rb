# app/controllers/api/v1/heroes_controller.rb
module Api
    module V1
      class HeroesController < ApplicationController
        def index
          heroes = Hero.includes(:role).all
          render json: heroes.map { |hero| serialize_hero(hero) }
        end
  
        def show
          hero = Hero.find(params[:id])
          render json: serialize_hero(hero)
        end
  
        private
  
        def serialize_hero(hero)
          {
            id: hero.id,
            name: hero.name,
            role: hero.role.name
          }
        end
      end
    end
  end
  