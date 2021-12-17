Rails.application.routes.draw do
  resources :documents
  resources :bills
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get '/index', :to => redirect('/index.html')
end
