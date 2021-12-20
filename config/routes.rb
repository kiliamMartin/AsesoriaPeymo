Rails.application.routes.draw do
  resources :users
  resources :bills
  resources :documents
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get '/index', :to => redirect('/index.html')
  get "login", to: "session#show"
  post "login", to: "session#create"
  delete "logout", to: "session#destroy" 
end
