json.extract! user, :id, :name, :surname, :phone, :nameCompany, :address, :email, :role_id, :password_digest, :created_at, :updated_at
json.url user_url(user, format: :json)
