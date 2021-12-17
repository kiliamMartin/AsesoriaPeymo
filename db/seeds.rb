# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Role.create(id:1,nameRole:"Administrador")
Role.create(id:2,nameRole:"Jefe")
Role.create(id:3,nameRole:"Empleado")
Role.create(id:4,nameRole:"Empresa")
Role.create(id:5,nameRole:"Particular")
Role.create(id:6,nameRole:"Autónomo")