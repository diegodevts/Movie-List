# Movie-List
_________________________________________________________________________________________________________________________________________________________________________

# Como rodar a aplicação:

- Com docker:
_________________________________________________________________________________________________________________________________________________________________________
1. Clone o respositório na branch main.
2. Execute o comando "docker build -t movielist ." para criar a imagem.
3. Execute o comando "docker run -p 3031:3031 -d movielist" para rodar o container.
4. Após isso o serviço estará rodando no http://localhost:3031.

_________________________________________________________________________________________________________________________________________________________________________
- Sem docker:
_________________________________________________________________________________________________________________________________________________________________________

1. Clone o repositório na branch main.
2. Execute o comando "npm start".
3. Se você utiliza o insomnia, basta importar o insomnia file do próprio repositório.
4. Se não, configure as rotas a seguir:

_______________________________________________________________________________________________________________________________________________________________________

# Rotas


# Cadastro de usuário: [POST]: /user/register

Os argumentos passados para a criação do usuário são: 
  (Obs:. É importante passar um CEP válido)
  
                  {
	                    "name": "Diego",
	                    "birth": "25/10/2024",
	                    "email": "diego@teste.com",
	                    "password": "12345",
	                    "cep": "40760-342",
	                    "number": 65
                  }

Retorno da requisiçao:
(Alterei os dados de retorno real. O seu endereço já é automaticamente retornado! )

                    {
	                      "message": "User registered!",
	                      "code": 201,
	                      "user": {
		                      "name": "Diego",
		                      "birth": "25/10/2024",
		                      "email": "diego@teste.com",
		                      "address": "Travessa x",
		                      "number": 65,
		                      "complement": "",
		                      "district": "Coutos",
		                      "city": "Rio de Janeiro",
		                      "state": "RJ"
	                       }
                     }
_______________________________________________________________________________________________________________________________________________________________________

# Login de usuário: [POST]: /user/login

Os argumentos passados para a criação do usuário são:

{
	"email": "diego@teste.com",
	"password": "12345"
}

Retorno da requisição:

    {
	      "message": "Welcome to Movie List, Diego",
	      "code": 200,
	      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjMGJmNDQyLTBiOGUtNDMyZi05OTlmLWVmOTZiOTZmOGExNCIsImlhdCI6MTY2MTI2Mjc0NSwiZXhwIjoxNjYxMjY2MzQ1fQ.lhds7A-tVk1WR1DJVYOVVl114LV3GdQPZ5Jsd6Nb248"
    }

_______________________________________________________________________________________________________________________________________________________________________
# Import de títulos: [POST]: /titles/import

É necessário enviar um multipart/form-data, com o nome "file", e selecionar o arquivo a ser carregado.
Os arquivos estarão na pasta "files" dentro do projeto.

Essa rota é protegida. O retorno é basicamente o seguinte:

      {
	      "message": "Movies loaded!",
	      "code": 201,
	      "titles": {
		      "count": 1262969
	      }
      }

_______________________________________________________________________________________________________________________________________________________________________
# Listagem dos títulos: [GET]: /titles/all

O retorno é basicamente os titulos + os dados de paginação. Essa rota também é protegida.

      {
	      "message": "Movies ratings loaded!",
	      "code": 201,
	      "ratings": {
		      "basics": [
			      {
				      "id": 1,
				      "tconst": "tt2651706",
				      "titleType": "short",
				      "primaryTitle": "A fuga das galinhas",
				      "originalTitle": "Chicken Run",
				      "isAdult": false,
				      "startYear": 2001,
				      "endYear": 2001,
				      "runtimeMinutes": 2,
				      "genres": "Infantil,Comédia",
				      "rating_id": "00000121-ffbb-422d-a6d2-f0b4e6aa7910"
			      }
		      ],
		      "currentPage": 1,
		      "skippedItems": 0,
		      "numberOfPages": 1
	      }
      }

______________________________________________________________________________________________________________________________________________________________________
# Listagem de um título: [GET]: /titles/:id

O retorno é basicamente o título. Essa rota também é protegida.


      {
	      "code": 200,
	      "ratings": {
		      "basic": {
			      "id": 1,
			      "tconst": "tt2651706",
			      "titleType": "short",
			      "primaryTitle": "A Fuga Das Galinhas",
			      "originalTitle": "Chicken Run",
			      "isAdult": false,
			      "startYear": 2001,
			      "endYear": 2001,
			      "runtimeMinutes": 2,
			      "genres": "Infantil,Comédia",
			      "rating_id": "00000121-ffbb-422d-a6d2-f0b4e6aa7910"
		      }
	      }
      }

______________________________________________________________________________________________________________________________________________________________________

# Edição de um filme:  [PUT]:/titles/update/:id

Essa rota é protegida. É necessário passar o id do filme que você quer atualizar, e no corpo um json contendo a chave que será atualizada, e o novo valor, como no exemplo:

                           {
	                            "primaryTitle": "A Fuga Das Galinhas"
                           }

O retorno é:

      {
	      "message": "Movie updated!",
	      "code": 200,
	      "title": {
		      "id": 1,
		      "tconst": "tt2651706",
		      "titleType": "short",
		      "primaryTitle": "A Fuga Das Galinhas",
		      "originalTitle": "Chicken Run",
		      "isAdult": false,
		      "startYear": 2001,
		      "endYear": 2001,
		      "runtimeMinutes": 2,
		      "genres": "Infantil,Comédia",
		      "rating_id": "00000121-ffbb-422d-a6d2-f0b4e6aa7910"
	      }
      }
      
______________________________________________________________________________________________________________________________________________________________________
  
# Import de ratings: [POST]: /ratings/import

É necessário enviar um multipart/form-data, com o nome "file", e selecionar o arquivo a ser carregado.
Os arquivos estarão na pasta "files" dentro do projeto.

Essa rota é protegida. O retorno é basicamente o seguinte:

      {
	      "message": "Movies ratings loaded!",
	      "code": 201,
	      "ratings": {
		      "count": 1262969
	      }
      }
      
______________________________________________________________________________________________________________________________________________________________________

# Listagem dos ratings: [GET]:/ratings/all

O retorno é basicamente os ratings + os dados de paginação. Essa rota também é protegida.

      {
	      "code": 201,
	      "ratings": {
		    "ratings": [
			      {
				      "id": "00000121-ffbb-422d-a6d2-f0b4e6aa7910",
				      "tconst": "tt2651706",
				      "averageRating": 4.8,
				      "numVotes": 69
			      },
			      {
				      "id": "00001129-4db6-43b2-841e-2ed0bf74a60c",
				      "tconst": "tt0746287",
				      "averageRating": 7.3,
				      "numVotes": 30
			      },
			      {
				      "id": "000011e0-2343-4e67-a8ff-8715d5b2ec1a",
				      "tconst": "tt0902310",
				      "averageRating": 8,
				      "numVotes": 10
			      },
			      {
				      "id": "00001438-396e-4244-ad9a-9fe26509e908",
				      "tconst": "tt15048108",
				      "averageRating": 5.8,
				      "numVotes": 80
			      },
			      {
				      "id": "00002bf6-bd51-42ae-ab36-7623cf7de188",
				      "tconst": "tt1325558",
				      "averageRating": 6.3,
				      "numVotes": 50
			      },
			      {
				      "id": "000033c2-9655-4976-a879-43771ad6e49d",
				      "tconst": "tt1721061",
				      "averageRating": 6.5,
			      	"numVotes": 7
			      },
			      {
				      "id": "00004b40-e856-4da6-b173-932327316c43",
				      "tconst": "tt1358186",
				      "averageRating": 8.9,
				      "numVotes": 13
			      },
			      {
				      "id": "00004fb3-2994-4e34-951d-7e7628ebc7da",
				      "tconst": "tt3520660",
				      "averageRating": 7.9,
				      "numVotes": 13
			      },
			      {
				      "id": "0000663e-abe9-4859-803d-917611a56bf5",
				      "tconst": "tt5188450",
				      "averageRating": 8.5,
				      "numVotes": 16
			      },
			      {
				      "id": "00007117-24fb-4674-9f70-cde438ebd4ca",
				      "tconst": "tt0659276",
				      "averageRating": 9.1,
				      "numVotes": 8
			      }
		      ],
		      "currentPage": 1,
		      "skippedItems": 0,
		      "numberOfPages": 126297
	      }
    }
    
______________________________________________________________________________________________________________________________________________________________________

# Listagem de um título: [GET]: /ratings/:id

O retorno é basicamente o rating. Essa rota também é protegida.

      {
	      "statusCode": 200,
	      "rating": {
		      "id": "00008553-c1f0-4fce-a5fe-f54ac237063a",
		      "tconst": "tt0978928",
		      "averageRating": 8.3,
		      "numVotes": 59
	      }
      }
______________________________________________________________________________________________________________________________________________________________________
# Possíveis retornos de erro das rotas protegidas


 O retorno caso o usuário seja inválido, pela rota ser protegida:

           {
                message: "You aren't allowed to get this resource.",
                statusCode: 403
           }
           
 O retorno caso o token seja inválido ou nulo:
 
           {
                message: "Token cannot be null!",
                statusCode: 403
            }
            
  O retorno caso sua sessão tenha expirado:
  
          { message: "Session expired!", statusCode: 401 }
          
  O retorno caso aconteça algum erro desconhecido no servidor:
  
          { message: "Internal Server Error", error: error }



