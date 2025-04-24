Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :heroes, only: [:index, :show]
      resources :roles, only: [:index, :show]
    end
  end
end
