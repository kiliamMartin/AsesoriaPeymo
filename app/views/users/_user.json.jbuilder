json.extract! user, :id, :name, :surname, :phone, :nameCompany, :address, :email, :password, :role_id, :created_at, :updated_at
json.url user_url(user, format: :json)
