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
	"code": 200,
	"ratings": {
		"basics": [
			{
				"id": 1,
				"tconst": "tt0000001",
				"titleType": "short",
				"primaryTitle": "Carmencita",
				"originalTitle": "Carmencita",
				"isAdult": "0",
				"startYear": "1894",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Documentary,Short"
			},
			{
				"id": 2,
				"tconst": "tt0000002",
				"titleType": "short",
				"primaryTitle": "Le clown et ses chiens",
				"originalTitle": "Le clown et ses chiens",
				"isAdult": "0",
				"startYear": "1892",
				"endYear": "\\N",
				"runtimeMinutes": "5",
				"genres": "Animation,Short"
			},
			{
				"id": 3,
				"tconst": "tt0000003",
				"titleType": "short",
				"primaryTitle": "Pauvre Pierrot",
				"originalTitle": "Pauvre Pierrot",
				"isAdult": "0",
				"startYear": "1892",
				"endYear": "\\N",
				"runtimeMinutes": "4",
				"genres": "Animation,Comedy,Romance"
			},
			{
				"id": 4,
				"tconst": "tt0000004",
				"titleType": "short",
				"primaryTitle": "Un bon bock",
				"originalTitle": "Un bon bock",
				"isAdult": "0",
				"startYear": "1892",
				"endYear": "\\N",
				"runtimeMinutes": "12",
				"genres": "Animation,Short"
			},
			{
				"id": 5,
				"tconst": "tt0000005",
				"titleType": "short",
				"primaryTitle": "Blacksmith Scene",
				"originalTitle": "Blacksmith Scene",
				"isAdult": "0",
				"startYear": "1893",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Comedy,Short"
			},
			{
				"id": 6,
				"tconst": "tt0000006",
				"titleType": "short",
				"primaryTitle": "Chinese Opium Den",
				"originalTitle": "Chinese Opium Den",
				"isAdult": "0",
				"startYear": "1894",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Short"
			},
			{
				"id": 7,
				"tconst": "tt0000007",
				"titleType": "short",
				"primaryTitle": "Corbett and Courtney Before the Kinetograph",
				"originalTitle": "Corbett and Courtney Before the Kinetograph",
				"isAdult": "0",
				"startYear": "1894",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Short,Sport"
			},
			{
				"id": 8,
				"tconst": "tt0000008",
				"titleType": "short",
				"primaryTitle": "Edison Kinetoscopic Record of a Sneeze",
				"originalTitle": "Edison Kinetoscopic Record of a Sneeze",
				"isAdult": "0",
				"startYear": "1894",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Documentary,Short"
			},
			{
				"id": 9,
				"tconst": "tt0000009",
				"titleType": "movie",
				"primaryTitle": "Miss Jerry",
				"originalTitle": "Miss Jerry",
				"isAdult": "0",
				"startYear": "1894",
				"endYear": "\\N",
				"runtimeMinutes": "45",
				"genres": "Romance"
			},
			{
				"id": 10,
				"tconst": "tt0000010",
				"titleType": "short",
				"primaryTitle": "Leaving the Factory",
				"originalTitle": "La sortie de l'usine Lumière à Lyon",
				"isAdult": "0",
				"startYear": "1895",
				"endYear": "\\N",
				"runtimeMinutes": "1",
				"genres": "Documentary,Short"
			}
		],
		"currentPage": 1,
		"skippedItems": 0,
		"numberOfPages": 4088
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
			"tconst": "tt0000001",
			"titleType": "short",
			"primaryTitle": "Carmencita",
			"originalTitle": "Carmencita",
			"isAdult": "0",
			"startYear": "1894",
			"endYear": "\\N",
			"runtimeMinutes": "1",
			"genres": "Documentary,Short"
		}
	}
}

______________________________________________________________________________________________________________________________________________________________________

# Edição de um filme:  [PUT]:/titles/update/:id

Essa rota é protegida. É necessário passar o id do filme que você quer atualizar, e no corpo um json contendo a chave que será atualizada, e o novo valor, como no exemplo:

                           {
	                            "primaryTitle": "CARMENCITA"
                           }

O retorno é:

     {
	"message": "Movie updated!",
	"code": 200,
	"title": {
		"id": 1,
		"tconst": "tt0000001",
		"titleType": "short",
		"primaryTitle": "CARMENCITA",
		"originalTitle": "Carmencita",
		"isAdult": "0",
		"startYear": "1894",
		"endYear": "\\N",
		"runtimeMinutes": "1",
		"genres": "Documentary,Short"
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



