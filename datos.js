
var json = 
{"peerwise":
[

	{
		"tipo":"MISCELANEO",
		"Q":"1)Reducir la comunicación y sincronización<br>2)Se realiza el proceso de balanceo de carga<br>3)Reducir el coste de gestión en tiempo.<br>4)Establecer el mecanismo para dividir el trabajo en procesos.<br>Son metas de la siguiente etapa de paralización::__",
		"options":
		[
			{"tipe":"A","frase":"Descomposición","R":false},
			{"tipe":"B","frase":"Asignación","R":true},
			{"tipe":"C","frase":"Orquestación","R":false},
			{"tipe":"D","frase":"Mapeo","R":false},
			{"tipe":"E","frase":"A y B","R":false},
			{"INFO":"bnMvbmMNCg0K"}
		],
		"Difficulty":"easy",
		"tags":["paralelización"]
	},				
	{
		"tipo":"MISCELANEO",
		"Q":"Según la ley de Amdahl, si el 95% del tiempo de ejecución secuencial de una aplicación se puede paralelizar, la acceleración máxima que se puede obtener con una infinidad de procesadores es:__",
		"options":
		[
			{"tipe":"A","frase":"5","R":false},
			{"tipe":"B","frase":"infinito","R":false},
			{"tipe":"C","frase":"20","R":true},
			{"tipe":"D","frase":"10","R":false},
			{"tipe":"E","frase":"falta información para poder determinar","R":false},
			{"INFO":"U2kgdW5hIGZyYWNjacOzbiBGIHNlIHB1ZWRlIHBhcmFsZWxpemFyLCBTID0gMSAvICgoMS1GKSArIEYvUyhtKSkgPCAxLygxLUYpID0gMSAvIDAuMDUgPSAyMA=="}
		],
		"Difficulty":"medium / hard",
		"tags":["aceleración", "paralelización"]
	},
	{
		"tipo":"MISCELANEO",
		"Q":"Suponiendo que np=número de procesos, m=filas por proceso y n=número de filas totales de la matriz, ¿qué expresión sería la adecuada para indicar cuantas filas le tocan a cada proceso en una distribución por bloques de filas (fase de asignación)?",
		"options":
		[
			{"tipe":"A","frase":"Todos los procesos reciben m = n / np filas.","R":false},
			{"tipe":"B","frase":"Los procesos reciben m = n / p filas excepto el último, que recibe ( n - m * (np - 1) ) filas.","R":true},
			{"tipe":"C","frase":"Todos los procesos reciben m = n filas.","R":false},
			{"tipe":"D","frase":"Los procesos reciben m = n / np filas excepto el último, que recibe ( n - m * (np - 2) ) filas.","R":false},
			{"INFO":"Q29tbyBzZSBwdWVkZSBvYnNlcnZhciBlbiBsYSBpbWFnZW4gZGUgZWplbXBsbywgdG9kb3MgbG9zIHByb2Nlc29zIHJlY2liZW4gZWwgbWlzbW8gbsO6bWVybyBkZSBmaWxhcyBleGNlcHRvIGVsIMO6bHRpbW8sIHF1ZSBzZSBxdWVkYSBjb24gbGFzIGZpbGFzIHNvYnJhbnRlIGRlbCByZXBhcnRvLg0KU2kgcG9yIGVqZW1wbG8gdGVuZW1vcyAxNCBmaWxhcyBlbiB0b3RhbCB5IDMgcHJvY2Vzb3MsIGVudG9uY2VzIHRlbmRyZW1vcyAxNCAvIDMgPSA1IGZpbGFzIChyZWRvbmRlYW5kbykgcG9yIHByb2Nlc28sIGV4Y2VwdG8gZWwgw7psdGltbywgcXVlIHRpZW5lICgxNCAtIDUgKiAoMyAtIDEpKSA9IDQgZmlsYXMuDQo="}
		],
		"Difficulty":"hard",
		"tags":["paralelización"]
	},
	{
		"tipo":"MISCELANEO",
		"Q":"¿Cuál es el objetivo principal de la Orquestación?:__",
		"options":
		[
			{"tipe":"A","frase":"Asignar las tareas a los procesos","R":false},
			{"tipe":"B","frase":"Estructurar la comunicación entre los procesos, estableciendo la sincronización entre los mismos","R":true},
			{"tipe":"C","frase":"Definir la manera en la que nombramos y manejamos los datos por parte de los distintos procesos","R":false},
			{"tipe":"D","frase":"Asignar los procesos a los procesadores en los que ejecutarán","R":false},
			{"INFO":""}
		],
		"Difficulty":"medium",
		"tags":["paralelización"]
	},	
	{
		"tipo":"MPI",
		"Q":"Seleccione cuál de las siguientes afirmaciones es correcta__",
		"options":
		[
			{"tipe":"A","frase":"MPI puede ser implementado únicamente en sistemas de memoria compartida","R":false},
			{"tipe":"B","frase":"MPI puede ser implementado únicamente en sistemas de memoria distribuida","R":false},
			{"tipe":"C","frase":"MPI puede ser implementado tanto en sistemas de memoria compartida como distribuida","R":true},
			{"INFO":"MS45IFdoYXQgUGxhdGZvcm1zIEFyZSBUYXJnZXRzIEZvciBJbXBsZW1lbnRhdGlvbj8gVGhlIGF0dHJhY3RpdmVuZXNzIG9mIHRoZSBtZXNzYWdlLXBhc3NpbmcgcGFyYWRpZ20gYXQgbGVhc3QgcGFydGlhbGx5IHN0ZW1zIGZyb20gaXRzIHdpZGUgcG9ydGFiaWxpdHkuIFByb2dyYW1zIGV4cHJlc3NlZCB0aGlzIHdheSBtYXkgcnVuIG9uIGRpc3RyaWJ1dGVkLW1lbW9yeSBtdWx0aXByb2Nlc3NvcnMsIG5ldHdvcmtzIG9mIHdvcmtzdGF0aW9ucywgYW5kIGNvbWJpbmF0aW9ucyBvZiBhbGwgb2YgdGhlc2UuIEluIGFkZGl0aW9uLCBzaGFyZWQtbWVtb3J5IGltcGxlbWVudGF0aW9ucywgaW5jbHVkaW5nIHRob3NlIGZvciBtdWx0aS1jb3JlIHByb2Nlc3NvcnMgYW5kIGh5YnJpZCBhcmNoaXRlY3R1cmVzLCBhcmUgcG9zc2libGUuIFRoZSBwYXJhZGlnbSB3aWxsIG5vdCBiZSBtYWRlIG9ic29sZXRlIGJ5IGFyY2hpdGVjdHVyZXMgY29tYmluaW5nIHRoZSBzaGFyZWRhbmQgZGlzdHJpYnV0ZWQtbWVtb3J5IHZpZXdzLCBvciBieSBpbmNyZWFzZXMgaW4gbmV0d29yayBzcGVlZHMuIEl0IHRodXMgc2hvdWxkIGJlIGJvdGggcG9zc2libGUgYW5kIHVzZWZ1bCB0byBpbXBsZW1lbnQgdGhpcyBzdGFuZGFyZCBvbiBhIGdyZWF0IHZhcmlldHkgb2YgbWFjaGluZXMsIGluY2x1ZGluZyB0aG9zZSDigJxtYWNoaW5lc+KAnSBjb25zaXN0aW5nIG9mIGNvbGxlY3Rpb25zIG9mIG90aGVyIG1hY2hpbmVzLCBwYXJhbGxlbCBvciBub3QsIGNvbm5lY3RlZCBieSBhIGNvbW11bmljYXRpb24gbmV0d29yaw=="}
		],
		"Difficulty":"medium / hard",
		"tags":["Memoria Compartida", "memoria distribuida", "MPI"]
	},				
	{
		"tipo":"MPI",
		"Q":"En MPI, son comunicaciones punto a punto:__",
		"options":
		[
			{"tipe":"A","frase":"Solo las síncronas","R":false},
			{"tipe":"B","frase":"Síncronas y asíncronas","R":false},
			{"tipe":"C","frase":"Sólo las colectivas","R":false},
			{"tipe":"D","frase":"Síncronas, asíncronas y colectivas.","R":false},
			{"INFO":"TGFzIGNvbXVuaWNhY2lvbmVzIG5vZG8gYSBub2RvIChwdW50byBhIHB1bnRvKSBzb24gc2llbXByZSBsYXMgc8OtbmNyb25hcyB5IGFzw61uY3JvbmFzLCBpbmRlcGVuZGllbnRlbWVudGUgZGUgc2kgZXMgbmVjZXNhcmlvIGVzcGVyYXIgY29uZmlybWFjacOzbiBkZSByZWNlcGNpw7NuIG8gbm8gKGJsb3F1ZWFudGUgeSBubyBibG9xdWVhbnRlKS4NCg0KTGFzIGNvbXVuaWNhY2lvbmVzIGNvbGVjdGl2YXMgc29uIGRlIHVubyBhIG11Y2hvcyBwb3IgbG8gcXVlIGVzIGRlIHB1bnRvIGEgdmFyaW9zIHB1bnRvcy4="}
		],
		"Difficulty":"easy",
		"tags":["paso de mensajes", "MPI", "tipos"]
	},	
	{
		"tipo":"MPI",
		"Q":"La llamada  mpi_comm_size permite:__",
		"options":
		[
			{"tipe":"A","frase":"Determinar el identificador(rank) del proceso actual","R":false},
			{"tipe":"B","frase":"Determinar el numero total de procesos que pertenecen a un comunicador.","R":true},
			{"tipe":"C","frase":"Permite liberar memoria.","R":false},
			{"tipe":"D","frase":"N.A","R":false},
			{"INFO":"bXBpX2NvbW1fc2l6ZSBwZXJtaXRlIGRldGVybWluYXIgZWwgbnVtZXJvIGRlIHByb2Nlc29zIHF1ZSBwZXJ0ZW5lY2VuIGEgdW4gY29tdW5pY2Fkb3Iu"}
		],
		"Difficulty":"very easy",
		"tags":["MPI"]
	},
	{
		"tipo":"MPI",
		"Q":"Con MPI, en un sistema distribuido donde cada uno de los nodos deben sincronizarse durante la ejecución de un programa determinado...:__",
		"options":
		[
			{"tipe":"A","frase":"El tiempo de computo del programa siempre podrá disminuirse si incrementamos el número de nodos involucrados.","R":false},
			{"tipe":"B","frase":"El tiempo de ejecución total del programa variará teniendo en cuenta el tiempo de cómputo y el tiempo de comunicación entre los nodos implicados","R":false},
			{"tipe":"C","frase":"Cuantos más nodos intervengan, más se podrá reducir el tiempo de comunicación, pero el tiempo de computo llegará un momento en el que no disminuya.","R":true},
			{"INFO":"U2kgdGVuZW1vcyB2YXJpb3MgcHJvY2Vzb3MgZGlzdHJpYnVpZG9zIGVudHJlIGRpZmVyZW50ZXMgbm9kb3MgeSBlc3RvcyB0aWVuZW4gcXVlIHNpbmNyb25pemFyc2UgZW50cmUgZWxsb3MsIGVzIG5vcm1hbCBwZW5zYXIgcXVlIGVsIHRpZW1wbyBkZSBjb211bmljYWNpw7NuIGF1bWVudGUgZW4gZnVuY2nDs24gZGVsIG7Dum1lcm8gZGUgbm9kb3MuIEFkZW3DoXMsIGN1YW50b3MgbWFzIG5vZG9zIHJlYWxpY2VuIGxhIHRhcmVhIGRlIGZvcm1hIHBhcmFsZWxhLCBlbCB0aWVtcG8gZGUgY8OzbXB1dG8gY2FkYSB2ZXogc2Vyw6EgbWFzIHBlcXVlw7FvLCBwZXJvIGRlcGVuZGllbmRvIGRlIGxhcyBjYXJhY3RlcsOtc3RpY2FzIGRlbCBwcm9ibGVtYSB5L28gYXJxdWl0ZWN0dXJhIGRlbCBzaXN0ZW1hLCBoYWJyw6EgdW4gbW9tZW50byBkb25kZSBubyBkaXNtaW51eWEgbWFzLg0KDQpUZW5pZW5kbyB0b2RvIGVzdG8gZW4gY3VlbnRhLCBzZSBwdWVkZSBkZWR1Y2lyIHF1ZSBlbCB0aWVtcG8gZGUgZWplY3VjacOzbiB0b3RhbCBkZWwgcHJvZ3JhbWEgZGVwZW5kZSBkZSBlc3RvcyBkb3MgZmFjdG9yZXM6IHRpZW1wbyBkZSBjb211bmljYWNpw7NuIHkgdGllbXBvIGRlIGPDs21wdXRvLg0K"}
		],
		"Difficulty":"medium",
		"tags":["MPI"]
	},				
	{
		"tipo":"MPI",
		"Q":"El paradigma de programación principal de MPI, SPMD (single program, multiple data), corresponde a la siguiente categoria de la clasificación de Flynn:__",
		"options":
		[
			{"tipe":"A","frase":"SISD - Single Instruction, Single Data Stream","R":false},
			{"tipe":"B","frase":"SIMD - Single Instruction, Multiple Data Stream","R":false},
			{"tipe":"C","frase":"MISD - Multiple Instruction, Single Data Stream","R":false},
			{"tipe":"D","frase":"MIMD - Multiple Instruction, Multiple Data Stream","R":true},
			{"INFO":"UGFyYSBTUE1EIHVuIHPDs2xvIHByb2dyYW1hIHNlIGVqZWN1dGEgZGUgZm9ybWEgZGlzdHJpYnVpZGEgZW4gbiBub2RvcyBlamVjdXRhbmRvIG3Dumx0aXBsZXMgZmx1am9zIGRlIGluc3RydWNjaW9uZXMgc29icmUgbcO6bHRpcGxlcyBmbHVqb3MgZGUgZGF0b3M="}
		],
		"Difficulty":"easy / medium",
		"tags":["MPI", "memoria distribuida"]
	},
	{
		"tipo":"MPI",
		"Q":"Cual de las siguientes opciones NO se corresponde con una llamada colectiva:__",
		"options":
		[
			{"tipe":"A","frase":"MPI_Scan()","R":false},
			{"tipe":"B","frase":"MPI_Barrier( )","R":false},
			{"tipe":"C","frase":"MPI_Irecv()","R":true},
			{"tipe":"D","frase":"MPI_Reduce( )","R":false},
			{"tipe":"E","frase":"MPI_Alltoall( )","R":false},
			{"INFO":"TVBJX0lyZWN2KCkgZXMgdW4gdGlwbyBkZSBsbGFtYWRhIG5vIGJsb3F1ZWFuLg0KTVBJX0lyZWN2KCkgZXMgdW4gdGlwbyBkZSBsbGFtYWRhIGFzw61uY3JvbmEgeSBubyBibG9xdWVhbnRlLg0KTVBJX0lyZWN2KCkgZXMgdW4gdGlwbyBkZSBsbGFtYWRhIGFzw61uY3JvbmEgeSBubyBibG9xdWVhbnRlLCBwZXJvIG5vIGVzIHVuYSBsbGFtYWRhIGNvbGVjdGl2YSBjb21vIGVsIHJlc3RvLg0K"}
		],
		"Difficulty":"easy",
		"tags":["paso de mensajes"]
	},
	{
		"tipo":"MPI",
		"Q":"¿Cuál de las siguientes utilidades del argumento MPI_IN_PLACE es cierta?:__",
		"options":
		[
			{"tipe":"A","frase":"Convierte las llamadas MPI bloqueantes en llamadas no bloqueantes.","R":false},
			{"tipe":"B","frase":"En una llamada colectiva GATHER, se pasa como sendbuf al proceso principal, ignorando los parámetros sendcount y sendtype para no enviar datos innecesarios.","R":true},
			{"tipe":"C","frase":"En una llamada colectiva SCATTER, se pasa como sendbuf al proceso principal, ignorando los parámetros sendcount y sendtype para que no se envíe datos a sí mismo.","R":true},
			{"tipe":"D","frase":"Identifica a todos los procesos dentro del comunicador IN PLACE.","R":false},
			{"INFO":"RW4gR0FUSEVSLCBNUElfSU5fUExBQ0Ugc2UgcGFzYSBhbCBiw7pmZXIgZGUgZW52w61vIGRlIGRhdG9zLiBMb3MgcGFyw6FtZXRyb3Mgc2VuZGNvdW50IHkgc2VuZHR5cGUgc2UgaWdub3JhbiwgcG9yIGxvIHF1ZSBzZSBhc3VtZSBxdWUgZWwgcHJvY2VzbyBwcmluY2lwYWwgeWEgaGEgaGVjaG8gc3UgY29udHJpYnVjacOzbiBlbiBlbCBiw7pmZXIgZGUgcmVjZXBjacOzbi4gRW4gU0NBVFRFUiBlbCB1c28gc3VlbGUgc2VyIGFsIHJldsOpczogc2UgcGFzYSBhbCBiw7pmZXIgZGUgcmVjZXBjacOzbiB5IHNlIGlnbm9yYW4gcmVjdnR5cGUgeSByZWN2Y291bnQuIEFzw60sIGV2aXRhIHF1ZSBlbCBwcm9jZXNvIHByaW5jaXBhbCBzZSBlbnbDrWUgZGF0b3MgYSBzw60gbWlzbW8u"}
		],
		"Difficulty":"hard",
		"tags":["MPI",]
	},
	{
		"tipo":"MPI",
		"Q":"Las operaciones de reducción consisten en:__",
		"options":
		[
			{"tipe":"A","frase":"Sincronizar procesos.","R":false},
			{"tipe":"B","frase":"Combinar datos de distintos procesos para producir un único resultado.","R":true},
			{"tipe":"C","frase":"Envío de datos one-to-many (de uno a muchos).","R":false},
			{"tipe":"D","frase":"Únicamente recibir valores de otros procesos.","R":false},
			{"INFO":"TGEgb3BlcmFjacOzbiBSZWR1Y2UgY29uc2lzdGUgdGFudG8gZW4gcmVjaWJpciBkYXRvcyBkZSBvdHJvcyBwcm9jZXNvcyBjb21vIGNvbWJpbmFybG9zIHJlYWxpemFuZG8gdW5hIG9wZXJhY2nDs24gaW5kaWNhZGEgY29tbyBsYSBzdW1hIG8gbGEgbXVsdGlwbGljYWNpw7NuLiBBc8OtLCB0b2RvcyBsb3MgZGF0b3MgcmVjaWJpZG9zIHNlIGNvbnZpZXJ0ZW4gZW4gdW4gw7puaWNvIHZhbG9yLg=="}
		],
		"Difficulty":"easy",
		"tags":["MPI", "memoria distribuida", "paso de mensajes"]
	},
	{
		"tipo":"MPI",
		"Q":"De las siguientes afirmaciones, ¿cuál NO es un requisito para que la comunicación punto a punto funcione correctamente?:__",
		"options":
		[
			{"tipe":"A","frase":"El proceso que envía datos debe especificar un rango (rank) válido de destino.","R":false},
			{"tipe":"B","frase":"Las etiquetas entre Send y Receive deben ser iguales","R":false},
			{"tipe":"C","frase":"El proceso que recibe los datos no debe necesariamente especificar un rango (rank) válido de origen.","R":true},
			{"tipe":"D","frase":"El buffer del proceso que recibe debe ser lo suficientemente grande.","R":false},
			{"INFO":"RGUgaWd1YWwgZm9ybWEgcXVlIGFsIGVudmlhciwgYWwgcmVjaWJpciBlcyBuZWNlc2FyaW8gcG9uZXIgdW4gcmFuZ28gdsOhbGlkbyBwYXJhIHF1ZSBzZSBwdWVkYSBpZGVudGlmaWNhciBhbCBwcm9jZXNvIGRlbCBxdWUgc2UgdmFuIGEgcmVjaWJpciBsb3MgZGF0b3MuDQo="}
		],
		"Difficulty":"medium",
		"tags":["MPI", "memoria distribuida", "paso de mensajes",]
	},
	{
		"tipo":"MPI",
		"Q":"¿Cuáles son los 4 pasos en la creación de un programa paralelo?__",
		"options":
		[
			{"tipe":"A","frase":"Agrupación, Mapeado, Orquestación y Asignación.","R":false},
			{"tipe":"B","frase":"Asignación, Agrupación, Mapeado y Orquestación.","R":false},
			{"tipe":"C","frase":"Descomposición, Asignación, Orquestación y Mapeado.","R":true},
			{"tipe":"D","frase":"Mapeado, Orquestación, División y Agupación.","R":false},
			{"INFO":"TG9zIHBhc29zIGNvcnJlY3RvcyBzb246DQoNCiAgICAtIERlc2NvbXBvc2ljacOzbiBkZWwgY8OzbXB1dG8gZW4gdGFyZWFzDQoNCiAgICAtIEFzaWduYWNpw7NuIGRlIHRhcmVhcyBhIHByb2Nlc29zDQoNCiAgICAtIE9ycXVlc3RhY2nDs24gZGVsIGFjY2VzbyBhIGRhdG9zLCBjb211bmljYWNpw7NuLCBzaW5jcm9uaXphY2nDs24uDQoNCiAgICAtIE1hcGVhZG8gZGUgcHJvY2Vzb3MgYSBwcm9jZXNhZG9yZXMu"}
		],
		"Difficulty":"very easy",
		"tags":["MPI", "paralelización",]
	},
	{
		"tipo":"MPI",
		"Q":"¿Cuál de los siguientes es un tipo válido en MPI?__",
		"options":
		[
			{"tipe":"A","frase":"MPI_FLOAT","R":false},
			{"tipe":"B","frase":"MPI_UNSIGNED","R":false},
			{"tipe":"C","frase":"MPI_PACKED","R":false},
			{"tipe":"D","frase":"Todos los anteriores son tipos válidos en MPI.","R":true},
			{"INFO":"VG9kb3Mgc29uIHRpcG8gdsOhbGlkb3MgKGxhIHJlc3B1ZXN0YSBzZSBwdWVkZSBlbmNvbnRyYXIgZW4gbGEgZGlhcG9zaXRpdmEgMTMgZGVsIFRlbWEgMiku"}
		],
		"Difficulty":"easy / medium",
		"tags":["MPI", "paralelización", "paso de mensajes", "tipos",]
	},
	{
		"tipo":"MPI",
		"Q":"¿Cuál de las siguientes afirmaciones es verdadera en relación a la llamada MPI_Send?:__",
		"options":
		[
			{"tipe":"A","frase":"Podría bloquear hasta que el mensaje es recibido por el proceso de destino.","R":true},
			{"tipe":"B","frase":"El proceso que hace esta llamada solo espera en caso de que no tenga que hacer más operaciones.","R":false},
			{"tipe":"C","frase":"El buffer no puede ser reutilizado en ningún momento y bajo ninguna condición.","R":false},
			{"tipe":"D","frase":"Todas las respuestas son correctas.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIGIgZXMgZmFsc2EsIHBvcnF1ZSBlbCBwcm9jZXNvIHF1ZSBoYWNlIGxhIGxsYW1hZGEsIGVzcGVyYSBhdW5xdWUgdGVuZ2Egb3BlcmFjaW9uZXMgcXVlIGhhY2VyLg0KDQpMYSByZXNwdWVzdGEgYyBlcyBmYWxzZWEsIHBvcnF1ZSBlbCBidWZmZXIgc2UgcHVlZGUgZW4gY2llcnRvcyBtb21lbnRvcy4NCg0KUmVzcHVlc3RhIGVuIGRpYXBvc2l0aXZhIDQgZGVsIHRlbWEgNS4NCg=="}
		],
		"Difficulty":"medium",
		"tags":["MPI", "paso de mensajes", "paralelización"]
	},
	{
		"tipo":"MPI",
		"Q":"¿Para qué se utiliza la llamada MPI_Barrier?__",
		"options":
		[
			{"tipe":"A","frase":"Para distribuir datos a varios procesos.","R":false},
			{"tipe":"B","frase":"Para bloquear todos los procesos hasta que todos hayan llegado (al punto donde se hace esta llamada).","R":true},
			{"tipe":"C","frase":"Para recibir valores de varios procesos.","R":false},
			{"tipe":"D","frase":"Para que todos los procesos intercambien datos entre ellos.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIEEgc2UgcmVmaWVyZSBhIGxhIGxsYW1hZGEgTVBJX1NjYXR0ZXIoKS4NCg0KTGEgcmVzcHVlc3RhIEMgc2UgcmVmaWVyZSBhIGxhIGxsYW1hZGEgTVBJX0dhdGhlcigpLg0KDQpMYSByZXNwdWVzdGEgRCBzZSByZWZpZXJlIGEgbGEgbGxhbWFkYSBNUElfQWxsdG9hbGwoKS4NCg0KUmVzcHVlc3RhIGVuIGRpYXBvc2l0aXZhIDkgZGVsIFRlbWEgNC4="}
		],
		"Difficulty":"easy / medium",
		"tags":["MPI", "paso de mensajes", "paralelización" ]
	},
	{
		"tipo":"MPI",
		"Q":"¿Cuál es el comunicador por defecto en MPI que agrupa a todos los procesos activos durante la ejecución de una aplicación?:__",
		"options":
		[
			{"tipe":"A","frase":"MPI_COMM_PROCESSES","R":false},
			{"tipe":"B","frase":"MPI_COMM_WORLD","R":true},
			{"tipe":"C","frase":"MPI_COMM_ALL","R":false},
			{"INFO":""}
		],
		"Difficulty":"easy",
		"tags":["MPI",]
	},
	{
		"tipo":"MPI",
		"Q":"Sobre los siguientes conceptos de MPI, es cierto:__",
		"options":
		[
			{"tipe":"A","frase":"Los procesos pueden ser recogidos en grupos","R":false},
			{"tipe":"B","frase":"Cada mensaje enviado en un contexto debe de ser recibido en el mismo contexto","R":false},
			{"tipe":"C","frase":"Grupo y contexto unidos forman un comunicador","R":false},
			{"tipe":"D","frase":"Un proceso es identificado por su rango en el grupo asociado con un comunicador.","R":false},
			{"tipe":"E","frase":"Todas las anteriores son correctas","R":true},
			{"INFO":"VG9kYXMgc29uIGNvcnJlY3RhcyAodmVyIHRlbWEgMiwgdHJhbnNwYXJlbmNpYSAxMikgDQo="}
		],
		"Difficulty":"medium / hard",
		"tags":["MPI",]
	},
	{
		"tipo":"MPI",
		"Q":"¿Qué es la comunicación colectiva?:__",
		"options":
		[
			{"tipe":"A","frase":"Es un tipo de comunicación que engloba a los grupos de un proceso y de su proceso padre","R":false},
			{"tipe":"B","frase":"Es un tipo de comunicación que sólo engloba a un único miembro","R":false},
			{"tipe":"C","frase":"Comunicación en la que un procesador envía y otro recibe","R":false},
			{"tipe":"D","frase":"Comunicaciones de un procesador a varios y de varios procesadores a uno","R":true},
			{"INFO":""}
		],
		"Difficulty":"easy / medium",
		"tags":["MPI",]
	},
	{
		"tipo":"MPI",
		"Q":"Dentro del ámbito de MPI, ¿a qué hace la llamada MPI_Scatter?:__",
		"options":
		[
			{"tipe":"A","frase":"El proceso que lo llama, realiza el envío de un mensaje de un proceso origen a otro proceso destino.","R":false},
			{"tipe":"B","frase":"El proceso que lo llama, trocea un mensaje en partes iguales y los envía individualmente al resto de procesos y a sí mismo.","R":true},
			{"tipe":"C","frase":"El proceso que lo llama, recoge una serie de datos de varios procesos en un único proceso.","R":false},
			{"INFO":"U2UgdHJhdGEgZGUgdW5hIHByZWd1bnRhIHNvYnJlIGxsYW1hZGFzIGNvbGVjdGl2YXMsIGRvbmRlIGxhIG9wY2nDs24gQSkgIG5vIGhhY2UgcmVmZXJlbmNpYSBhIGRpY2hhIGxsYW1hZGEsIGVzdGEgZXMgbGEgZGVmaW5pY2nDs24gZGUgTVBJX1NlbmQuIA0KDQpCKSBFcyBsYSBjb3JyZWN0YQ0KDQpDKSBEZWZpbmUgbGEgbGxhbWFkYSBNUElfR2F0aGVyIChlcyBsYSBsbGFtYWRhIGludmVyc2EgZGUgTVBJX1NjYXR0ZXIp"}
		],
		"Difficulty":"medium",
		"tags":["Llamadas Colectivas", "MPI",]
	},	
	{
		"tipo":"OMP",
		"Q":"Seleccione cuál de las siguientes afirmaciones es correcta__",
		"options":
		[
			{"tipe":"A","frase":"La región paralela inactiva de OpenMP es ejecutada por un solo hilo.","R":true},
			{"tipe":"B","frase":"La región paralela inactiva de OpenMP es ignorada durante la ejecución","R":false},
			{"tipe":"C","frase":"La región paralela inactiva de OpenMP es ejecutada por uno o más hilos.","R":false},
			{"INFO":"YWN0aXZlIHBhcmFsbGVsIHJlZ2lvbjogQSBwYXJhbGxlbCByZWdpb24gdGhhdCBpcyBleGVjdXRlZCBieSBhIHRlYW0gY29uc2lzdGluZyBvZiBtb3JlIHRoYW4gb25lIHRocmVhZC4NCmluYWN0aXZlIHBhcmFsbGVsIHJlZ2lvbjogQSBwYXJhbGxlbCByZWdpb24gdGhhdCBpcyBleGVjdXRlZCBieSBhIHRlYW0gb2Ygb25seSBvbmUgdGhyZWFkLg=="}
		],
		"Difficulty":"medium / hard",
		"tags":["OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"Para el siguiente fragmento de código: int count = 0; for(int i=0; i<100; i++){ a[i] = b[i] + c[i+1] count+= a[i]; } ¿Cuál de las siguientes líneas de OpenMP utilizaría para paralizar el código anterior?",
		"options":
		[
			{"tipe":"A","frase":"#pragma omp parallel for schedule (static) private(i) reduction(+:count)","R":true},
			{"tipe":"B","frase":"#pragma omp parallel for schedule (dynamic) private(i, count) ","R":false},
			{"tipe":"C","frase":"#pragma omp parallel for schedule (static) private(i)","R":false},
			{"tipe":"D","frase":"#pragma omp parallel for private(i)","R":false},
			{"tipe":"E","frase":"Ninguna de las anteriores","R": false},
			{"INFO":"TGEgdmFyaWFibGUgZ2xvYmFsIGRlYmUgaXIgaW5kaWNhZGEgcG9yIHVuICJyZWR1Y3Rpb24iIHlhIHF1ZSBlcyB1bmEgdmFyaWFibGUgZ2xvYmFsIHkgZXN0w6EgdmnDqW5kb3NlIG1vZGlmaWNhZGEgZGVudHJvIGRlbCBidWNsZS4gTGEgb3BjacOzbiBwcml2YXRlKGkpIGVzIG9wY2lvbmFsIGRlYmlkbyBhIHF1ZSB5YSBlc3TDoSBwcm90ZWdpZGEgcG9yIG9wZW5tcC4="}
		],
		"Difficulty":"medium",
		"tags":["OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"En OpenMP, por defecto la mayoría de variables son compartidas salvo:__",
		"options":
		[
			{"tipe":"A","frase":"Índices de bucle dentro de un “for” paralelo","R":false},
			{"tipe":"B","frase":"Subrutinas llamadas dentro de una región paralela","R":false},
			{"tipe":"C","frase":"Variables locales declaradas dentro del alcancce de una región paralela","R":false},
			{"tipe":"D","frase":"Todas las anteriores","R":true},
			{"INFO":"UMOhZ2luYSAxNiBkZWwgdGVtYSBkZSBPcGVuTVAgKHRlbWEgNikgc29icmUgY2xhdXN1bGFzIGRlbCBhbGNhbmNlIGRlIGRhdG9z"}
		],
		"Difficulty":"easy",
		"tags":["Memoria Compartida", "OpenMP", "scope"]
	},
	{
		"tipo":"OMP",
		"Q":"En el siguiente bucle paralelizado con OpenMP, como se podría indicar que el índice j del segundo bucle también estará en la memoria privada de los hilos para evitar inconsistencias:<br>#pragma omp parallel for reduction(+:total_sum)<br>for (i=0; i < N; i++) { float sum = 0; for (j=0; j < N; j++) sum = sum + a[i];     total_sum += sum;}}:__",
		"options":
		[
			{"tipe":"A","frase":"firstprivate (j)","R":false},
			{"tipe":"B","frase":"lastprivate (j)","R":false},
			{"tipe":"C","frase":"private (j)","R":true},
			{"tipe":"D","frase":"shared (j)","R":false},
			{"INFO":"RXMgbmVjZXNhcmlvIGRlY2xhcmFyIHF1ZSBsYSB2YXJpYWJsZSBqIHNlcsOhIHByaXZhZGEgcGFyYSBjYWRhIGhpbG8gZHVyYW50ZSBzdSBlamVjdWNpw7NuLCBhbCBlc3RhciBlbiBlbCBmb3IgYW5pZGFkbyBubyBsZSBhZmVjdGEgbGEgZGVjbGFyYWNpw7NuIGRlbCBidWNsZSBwYXJhcmxlbG8sIGVuIGVsIHF1ZSBwb3IgZGVmZWN0byBpIHNlcsOhIHByaXZhZG8uDQoNCnNoYXJlZCwgaWRpY2EgcXVlIGVzIGNvbXBhcnRpZG8gcG9yIHRvZG9zIGxvcyBoaWxvcywgcG9yIGxvIHF1ZSBzZSBnZW5lcmFyw61hbiBpbmNvbnNpc3RlbmNpYXMuDQoNCmZpcnN0cHJpdmF0ZSBoYWNlIHF1ZSBsYSB2YXJpYWJsZSBzZWEgcHJpdmFkYSBlbiBzdSB2YWxvciBpbmljaWFsIGFudGVzIGRlIGxhIGVqZWN1Y2nDs24gKHBlcm8gaiBzZSBkZWNsYXJhIGEgMCBjYWRhIHZleiwgbm8gZXMgbmVjZXNhcmlvKQ0KDQpsYXN0cHJpdmF0ZSBoYWNlIHF1ZSBsYSB2YXJpYWJsZSBzZWEgcHJpdmFkYSB0b21hbmRvIGVsIHZhbG9yIGZpbmFsIGRlIGxhIGFudGVyaW9yIGVqZWN1Y2nDs24sIHBvciBsbyBxdWUgbm8gdmFsZSBwYXJhIG51ZXN0cm8gYnVjbGUuDQo="}
		],
		"Difficulty":"easy",
		"tags":["Memoria Compartida","OpenMP","memoria distribuida","Programación multihilo", "paralelización"]
	},				
	{
		"tipo":"OMP",
		"Q":"En OMP, ¿Cuál es la diferencia entre '#pragma omp critical' y '#pragma omp atomic'?__",
		"options":
		[
			{"tipe":"A","frase":"<b>#pragma omp critical</b> permite únicamente acceder a un hilo al mismo tiempo en la sección que definamos, mientras que <b>#pragma omp atomic</b> sólo permite realizar una operación al mismo tiempo sobre un dato concreto.","R":true},
			{"tipe":"B","frase":"<b>#pragma omp atomi</b> permite únicamente acceder a un hilo al mismo tiempo en la sección que definamos, mientras que <b>#pragma omp critical</b> sólo permite realizar una operación al mismo tiempo sobre un dato concreto.","R":false},
			{"tipe":"C","frase":"Ambas son gestionadas de forma idéntica, pero dependiendo de las operaciones que se quieran realizar, proporcionan diferentes resultados.","R":false},
			{"INFO":"VW5hIHNlY2Npw7NuIGNyw610aWNhIGRlIE9wZW5NUCBlcyBjb21wbGV0YW1lbnRlIGdlbmVyYWwsIGVzIGRlY2lyLCBwdWVkZSByb2RlYXIgY3VhbHF1aWVyIGJsb3F1ZSBhcmJpdHJhcmlvIGRlIGPDs2RpZ28sIG1pZW50cmFzIHF1ZSB1bmEgb3BlcmFjacOzbiBhdMOzbWljYSB0aWVuZSBnYXN0b3MgZ2VuZXJhbGVzIG11Y2hvIG3DoXMgYmFqb3MgeWEgcXVlIGVuIGVzZSBjYXNvIG5vIGhheSBibG9xdWVvIG5pIGRlc2Jsb3F1ZW8gbmVjZXNhcmlvcyBhbCBlbnRyYXIgeSBzYWxpciBkZSBsYSBsw61uZWEgZGUgY8OzZGlnbywgc8OzbG8gaGFjZSB1bmEgbW9kaWZpY2FjacOzbiBhdMOzbWljYSBkZSB1biBkYXRvIGNvbmNyZXRvIGRlIGZvcm1hIHF1ZSBuaW5nw7puIG90cm8gaGlsbyBwdWVkZSByZWFsaXphciBvdHJhIG9wZXJhY2nDs24gc29icmUgZWwgbWlzbW8gZGF0byBoYXN0YSBxdWUgbGEgcHJpbWVyYSBubyBzZSBjb21wbGV0ZS4NCg=="}
		],
		"Difficulty":"easy / medium",
		"tags":["OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"En OpenMP,¿qué se indica con una directiva 'Region Paralell (#pragma omp paralell)'?:__",
		"options":
		[
			{"tipe":"A","frase":"Se indica un bloque de código que se ejecutará en un único thread.","R":false},
			{"tipe":"B","frase":"Se indica un bloque de código que solo se ejecutará cuando el resto de procesos envíen un mensaje al proceso que ejecuta dicho bloque de código.","R":false},
			{"tipe":"C","frase":"Se indica un bloque de código que será ejecutada por múltiples threads.","R":true},
			{"tipe":"D","frase":"Ninguna de las anteriores es correcta.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIGNvcnJlY3RhIGVzIGxhIGMsIHRhbCB5IGNvbW8gc2UgaW5kaWNhIGVuIGxhIGRpYXBvc2l0aXZhIDkgZGVsIFRlbWEgNi4="}
		],
		"Difficulty":" easy / medium",
		"tags":["paralelización", "OpenMP",]
	},
	{
		"tipo":"OMP",
		"Q":"En OpenMP, cuando la cláusula 'schedule' toma el valor 'static [,chunk]', significa que::__",
		"options":
		[
			{"tipe":"A","frase":"Al principio cada thread ejecuta 'chunk' iteraciones, y después el número de iteraciones que ejecuta comienza a decrecer.","R":false},
			{"tipe":"B","frase":"Se asigna un número de 'chunk' iteraciones a cada thread.","R":true},
			{"tipe":"C","frase":"Cuando está libre, cada thread realiza 'chunk' iteraciones, que recoge de una cola, hasta que todas las iteraciones se completan.","R":false},
			{"tipe":"D","frase":"Ninguna de las anteriores es correcta.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIGNvcnJlY3RhIGVzIGxhIEIuIExhIHJlc3B1ZXN0YSBBLCBzZSBjb3JyZXNwb25kZSBjb24gZWwgdmFsb3IgZ3VpZGVkWyxjaHVua10gZGUgc2NoZWR1bGUsIG1pZW50cmFzIHF1ZSBsYSBDLCBzZSBjb3JyZXNwb25kZSBjb24gZWwgdmFsb3IgImR5bmFtaWNbLGNodW5rXSIuIFNlIHB1ZWRlIHZlciBsYSBzb2x1Y2nDs24gZW4gbGEgZGlhcG9zaXRpdmEgMTIgZGVsIHRlbWEgNi4="}
		],
		"Difficulty":"easy / medium",
		"tags":["paralelización", "OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"En OpenMP, ¿qué significa declarar el ámbito de una variable (scope) como 'LASTPRIVATE'?:__",
		"options":
		[
			{"tipe":"A","frase":"Significa que la variable es privada para un único thread.","R":false},
			{"tipe":"B","frase":"Significa que la variable es compartida por todos los threads.","R":false},
			{"tipe":"C","frase":"Significa que se realiza una reducción de las variables privadas al final de la paralelización.","R":false},
			{"tipe":"D","frase":"Significa que el valor obtenido en la última iteración para esa variable, es copiado a la localización original del objeto.","R":true},
			{"INFO":"TGEgcmVzcHVlc3RhIGNvcnJlY3RhIGVzIGxhIEQuIExhIHJlc3B1ZXN0YSBBLCBzZSBjb3JyZXNwb25kZSBjb24gdW4gc2NvcGU9UFJJVkFURTsgbGEgcmVzcHVlc3RhIEIsIHNlIGNvcnJlc3BvbmRlIGNvbiB1biBzY29wZT0iU0hBUkVEIiAgeSBsYSByZXNwdWVzdGEgQywgc2UgY29ycmVzcG9uZGUgY29uIHVuIHNjb3BlPSJSRURDVVRJT04iLiBTZSBwdWVkZSBlbmNvbnRyYXIgbGEgc29sdWNpw7NuIGVuIGxhIGRpYXBvc2l0aXZhIDE2IGRlbCB0ZW1hIDYu"}
		],
		"Difficulty":"medium / hard",
		"tags":["paralelización", "OpenMP", "scope",]
	},
	{
		"tipo":"OMP",
		"Q":"Dentro del paradigma de memoria compartida (shared memory) en la arquitectura de memorias, OpenMP encaja dentro de:__",
		"options":
		[
			{"tipe":"A","frase":"Uniform Memory Access (UMA)","R":false},
			{"tipe":"B","frase":"Non-Uniform Memory Access (NUMA)","R":false},
			{"tipe":"C","frase":"En las dos anteriores (repuestas A y B)","R":true},
			{"tipe":"D","frase":"En ninguna de las anteriores","R":false},
			{"INFO":"T3Blbk1QIHBlcm1pdGUgcmVhbGl6YXIgZXhwbMOtY2l0YW1lbnRlIHBhcmFyZWxpc21vIG11bHRpLXRocmVhZGVkIGRlIG1lbW9yaWEgY29tcGFydGlkYSwgeSBlbmNhamEgdGFudG8gZGVudHJvIGRlbnRybyBkZSBhcnF1aXRlY3R1cmFzIGRlIG1lbW9yaWEgY29tcGFydGlkYSBVTUEgY29tbyBOVU1BLg=="}
		],
		"Difficulty":"medium",
		"tags":["OpenMP","Memoria Compartida",]
	},
	{
		"tipo":"OMP",
		"Q":"En que consiste el paralelismo Fork-Join:__",
		"options":
		[
			{"tipe":"A","frase":"Un programa multihilos es mas eficiente cuando existen mas hilos trabajando en paralelo.","R":false},
			{"tipe":"B","frase":"Un programa se inicia en un hilo, cuando se crea una directiva paralela se inician un grupo de hilos y al finalizar el control retorna al hilo inicial","R":true},
			{"tipe":"C","frase":"A y B son correctas","R":false},
			{"tipe":"D","frase":"N.A","R":false},
			{"INFO":"En fork Join una tarea muy pesada se divide en K hilos(fork) con menor peso, para luego recolectar sus resultados al final y luego unirlos en un solo resultado."}
		],
		"Difficulty":"easy / medium",
		"tags":["OpenMP"]
	},	
	{
		"tipo":"OMP",
		"Q":"En OpenMP, por defecto la mayoría de variables son compartidas. Seleccione la respuesta correcta:__",
		"options":
		[
			{"tipe":"A","frase":"Las variables declaradas antes de una región 'parallel' son una excepción.","R":false},
			{"tipe":"B","frase":"Las variables que hacen como índice dentro de una región 'parallel for' no son una excepción.","R":false},
			{"tipe":"C","frase":"Las subrutinas que se llaman dentro de una región 'parallel' son una excepción.","R":true},
			{"tipe":"D","frase":"Todas las anteriores son correctas.","R":false},
			{"INFO":"UG9yIGRlZmVjdG8sIGxhIG1heW9yw61hIGRlIHZhcmlhYmxlcyBlcyBjb21wYXJ0aWRhLiBMYXMgZXhjZXBjaW9uZXMgc29uOg0KDQotIExhcyB2YXJpYWJsZXMgcXVlIGhhY2VuIGNvbW8gw61uZGljZSBkZW50cm8gZGUgdW4gInBhcmFsbGVsIGZvciIuDQoNCi0gTGFzIHN1YnJ1dGluYXMgcXVlIHNlIGxsYW1hbiBkZW50cm8gZGUgdW5hIHJlZ2nDs24gInBhcmFsbGVsIi4NCg0KLSBMYXMgdmFyaWFibGVzIGxvY2FsZXMgZGVjbGFyYWRhcyBkZW50cm8gZGVsIMOhbWJpdG8gZGUgdW5hICJwYXJhbGxlbCByZWdpb24iLg=="}
		],
		"Difficulty":"medium / hard",
		"tags":["paralelización", "scope", "OpenMP",]
	},
	{
		"tipo":"OMP",
		"Q":"Para que los hilos se sincronicen (hagan join) después del siguiente código, selecciona la opción correcta:<br>#pragma omp parallel<br>#pragma omp for schedule(static)<br>for(i=0;i<N;i++) {a[i] = a[i] + b[i]}:__",
		"options":
		[
			{"tipe":"A","frase":"No hay que hacer nada, puesto que hay una barrera (#pragma omp barrier) implícita.","R":true},
			{"tipe":"B","frase":"Es necesario indicar explícitamente la barrera con #pragma omp barrier","R":false},
			{"tipe":"C","frase":"Hay que utilizar de forma explícita la directiva #pragma omp nowait","R":false},
			{"tipe":"D","frase":"No hay que hacer nada, puesto que #pragma omp nowait está implícito.","R":false},
			{"INFO":"Tm8gZXMgbmVjZXNhcmlvIGluZGljYXIgbmFkYSwgcHVlc3RvIHF1ZSBsYSBiYXJyZXJhIHlhIGVzdMOhIGltcGzDrWNpdGEuIEVuIGNhc28gZGUgbm8gcXVlcmVyIGhhY2VyIGVzdGEgc2luY3Jvbml6YWNpw7NuLCBlbnRvbmNlcyBzZSB1c2Fyw61hIGxhIGRpcmVjdGl2YSBub3dhaXQgcGFyYSBxdWUgbm8gc2UgcmVhbGljZW4gbGFzIGJhcnJlcmFzIGltcGzDrWNpdGFzLg=="}
		],
		"Difficulty":"medium / hard",
		"tags":["paralelización", "OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"En el siguiente programa, ¿cuántas iteraciones ejecuta cada hilo si tenemos cuatro hilos?<br>#pragma omp for schedule(static, 1)<br>for (int i = 0; i < 100; i++) { a[i] = i; }:__",
		"options":
		[
			{"tipe":"A","frase":"No se puede saber; el número de iteraciones no está prefijado.","R":false},
			{"tipe":"B","frase":"El primero 10, el segundo 20, el tercero 30 y el cuarto 40.","R":false},
			{"tipe":"C","frase":"25 iteraciones contiguas cada uno. El primero de 0-24, el segundo de 25-49, etc.","R":false},
			{"tipe":"D","frase":"25 iteraciones entrelazadas cada uno. El primero la iteración 0, el segundo la 1, el tercero la 3, etc.","R":true},
			{"INFO":"QWwgcG9uZXIgZWwgYXJndW1lbnRvIGNodW5rID0gMSwgbGFzIGl0ZXJhY2lvbmVzIHF1ZSBzZSBhc2lnbmFuIGEgY2FkYSBwcm9jZXNvIHNlIGVudHJlbGF6YW4gZGUgdW5hIGVuIHVuYS4g"}
		],
		"Difficulty":"medium / hard",
		"tags":["OpenMP",]
	},				
	{
		"tipo":"OMP",
		"Q":"Según la clasificación propuesta por Flynn, OpenMP corresponde a:__",
		"options":
		[
			{"tipe":"A","frase":"Una instrucción, un dato (SISD)","R":false},
			{"tipe":"B","frase":"Múltiples instrucciones, un dato (MISD)","R":false},
			{"tipe":"C","frase":"Una instrucción, múltiples datos (SIMD)","R":false},
			{"tipe":"D","frase":"Múltiples instrucciones, múltiples datos (MIMD)","R":true},
			{"INFO":"T3Blbk1QIGVzIFNQTUQoU2luZ2xlIFByb2dyYW0sIE11bHRpcGxlIERhdGEpLCBzdWJjYXRlZ29yw61hIGRlIE1JTUQu"}
		],
		"Difficulty":"easy / medium",
		"tags":["paralelización", "OpenMP", "Programación multihilo",]
	},
	{
		"tipo":"OMP",
		"Q":"¿Qué significa la directiva #pragma omp single?__",
		"options":
		[
			{"tipe":"A","frase":"Indica un bloque de código que será ejecutado por múltiples hilos","R":false},
			{"tipe":"B","frase":"Especifica una región de código que debe ser ejecutada por un solo hilo a la vez y bloquea a los demás hilos hasta que el hilo actual sale de la región","R":false},
			{"tipe":"C","frase":"Un sólo hilo ejecutará la sección individual delimitada por la directiva, mientras que el resto de procesos no lo harán","R":true},
			{"INFO":""}
		],
		"Difficulty":"medium",
		"tags":["paralelización", "OpenMP",]
	},
	{
		"tipo":"OMP",
		"Q":"Sobre la directiva CRITICAL en openMP, es cierto que:__",
		"options":
		[
			{"tipe":"A","frase":"No se bloquean el resto de hilos mientras el hilo actual se encuentra en la región crítica.","R":false},
			{"tipe":"B","frase":"Es posible asignar un nombre a la región crítica para poder definir múltiples regiones diferentes.","R":true},
			{"tipe":"C","frase":"Diferentes regiones críticas con el mismo nombre son tratadas como regiones independientes.","R":false},
			{"tipe":"D","frase":"Las respuestas B y C son correctas.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIGNvcnJlY3RhIGVzIGxhIEIgeWEgcXVlOg0KDQpwYXJhIGxhIHJlc3B1ZXN0YSBBLCBjb24gbGEgc2VjY2nDs24gY3LDrXRpY2Egc2UgYmxvcXVlYW4gdG9kb3MgbG9zIGRlbcOhcyBoaWxvcyBoYXN0YSBxdWUgZWwgYWN0dWFsIHNhbGdhIGRlIGxhIHJlZ2nDs24gY3LDrXRpY2EuDQoNCnBhcmEgbGEgcmVzcHVlc3RhIEMsIGRpZmVyZW50ZXMgcmVnaW9uZXMgY29uIGVsIG1pc21vIG5vbWJyZSBzb24gdHJhdGFkYXMgY29tbyBsYSBtaXNtYSByZWdpw7NuLg0KDQo="}
		],
		"Difficulty":"very hard",
		"tags":["OpenMP",]
	},
	{
		"tipo":"OMP",
		"Q":"¿En qué llamadas de OpenMP se encuentra implícita la directiva FLUSH?:__",
		"options":
		[
			{"tipe":"A","frase":"<ul><li>critical - entrada y salida</li><li>barrier</li><li>parallel - salida</li><li>for - salida</li><li>sections - salida</li><li>single - salida</li></ul>","R":true},
			{"tipe":"B","frase":"<ul><li>critical - entrada y salida <li>barrier</li><li>parallel - entrada y salida</li><li>for - entrada y salida</li><li>sections - salida</li><li>single - entrada y salida</li><ul>","R":false},
			{"tipe":"C","frase":"<ul><li>critical - salida</li><li>barrier</li><li>parallel - salida</li><li>for - salida</li><li>sections - salida</li><li>single - salida</li></ul>","R":false},
			{"tipe":"D","frase":"<ul><li>critical - entrada y salida</li><li>barrier</li><li>parallel - salida</li><li>for - salida</li></ul>","R":false},
			{"INFO":"TGEgZGlyZWN0aXZhIEZsdXNoIGlkZW50aWZpY2EgdW4gcHVudG8gZGUgc2luY3Jvbml6YWNpw7NuIGVuIGVsIHF1ZSBsYSBpbXBsZW1lbnRhY2nDs24gZGViZSBwcm9wb3JjaW9uYXIgdW5hIHZpc3RhIGNvbnNpc3RlbnRlIGRlIGxhIG1lbW9yaWEuIFZhcmlhYmxlcyBkZSBoaWxvIHZpc2libGVzIHNlIGVzY3JpYmVuIGRlIG51ZXZvIGEgbGEgbWVtb3JpYSBlbiBlc3RlIHB1bnRvLg0KDQoNCg=="}
		],
		"Difficulty":"hard",
		"tags":["paralelización", "OpenMP"]
	},
	{
		"tipo":"OMP",
		"Q":"¿Cuál de las siguientes llamadas en OpenMP, devuelve el número de procesos que están disponibles para el programa?:__",
		"options":
		[
			{"tipe":"A","frase":"int omp_in_parallel(void)","R":false},
			{"tipe":"B","frase":"int omp_get_num_threads(void)","R":false},
			{"tipe":"C","frase":"int omp_get_thread_num(void)","R":true},
			{"tipe":"D","frase":"void omp_set_num_threads(int num_threads)","R":false},
			{"INFO":""}
		],
		"Difficulty":"medium / hard",
		"tags":["paralelización", "OpenMP",]
	},
	{
		"tipo":"OMP",
		"Q":"Sobre la directiva MASTER en openMP, es cierto que:__",
		"options":
		[
			{"tipe":"A","frase":"No hay sincronización al entrar ni al salir.","R":false},
			{"tipe":"B","frase":"La construcción master delimita un bloque estructurado que es ejecutado por el thread maestro.","R":false},
			{"tipe":"C","frase":"Los otros threads no lo ejecutan.","R":false},
			{"tipe":"D","frase":"Todas las respuestas anteriores son correctas.","R":true},
			{"INFO":""}
		],
		"Difficulty":"hard",
		"tags":["OpenMP",]
	},			
	{
		"tipo":"CUDA",
		"Q":"En las GPUs actuales, un bloque de hilos puede albergar hasta:__",
		"options":
		[
			{"tipe":"A","frase":"520 hilos","R":false},
			{"tipe":"B","frase":"1022 hilos","R":false},
			{"tipe":"C","frase":"Ningula de las anteriores","R":true},
			{"INFO":"VG9kb3MgbG9zIGhpbG9zIGRlIHVuIGJsb3F1ZSByZXNpZGVuIGVuIGVsIG1pc21vIGNvcmUgZGVsIHByb2Nlc2Fkb3IsIHBvciBsbyB0YW50byBjb21wYXJ0ZW4gZWwgbMOtbWl0ZSBkZSByZWN1cnNvcyBkZSBtZW1vcmlhIGRlIGVzZSBjb3JlLiBFbiBsYXMgR1BVcyBhY3R1YWxlcywgdW4gYmxvcXVlIGRlIGhpbG9zIHB1ZWRlIGFsYmVyZ2FyIGhhc3RhIDEwMjQgaGlsb3Mu"}
		],
		"Difficulty":"medium",
		"tags":["CUDA", "paralelización"]
	},
	{
		"tipo":"CUDA",
		"Q":"Dada la siguiente instrucción de CUDA, responda correctamente.<br>mykernel<<<1,n>>>();:__",
		"options":
		[
			{"tipe":"A","frase":"La instrucción anterior declara que la GPU ejecutará N bloques de N hilos sobre un único multiprocesador.","R":false},
			{"tipe":"B","frase":"La instrucción anterior declara que la GPU ejecutará N bloques de 1 hilo sobre N multiprocesadores.","R":false},
			{"tipe":"C","frase":"La instrucción anterior declara que la GPU ejecutará 1 bloque de N hilos.","R":true},
			{"tipe":"D","frase":"La instrucción anterior declara que la GPU se ejecutará sobre un único multiprocesador de N bloques.","R":false},
			{"tipe":"E","frase":"Ninguna de las anteriores.","R":false},
			{"INFO":"TlMvTkM="}
		],
		"Difficulty":"easy",
		"tags":["CUDA"]
	},
	{
		"tipo":"CUDA",
		"Q":"¿Cuál de las estas configuraciones de CUDA no es correcta?:__",
		"options":
		[
			{"tipe":"A","frase":"dim3 dimBlock(2, 2, 64)","R":false},
			{"tipe":"B","frase":"dim3 dimBlock(33, 32, 1)","R":true},
			{"tipe":"C","frase":"dim3 dimBlock(1024, 1, 1)","R":true},
			{"tipe":"D","frase":"dim3 dimGrid(100, 50)","R":true},
			{"INFO":""}
		],
		"Difficulty":"medium / hard",
		"tags":["CYDA",]
	},				
	{
		"tipo":"CUDA",
		"Q":"¿Cómo se declararía correctamente el índice de una matriz en CUDA cuando se combinan bloques con hilos?__",
		"options":
		[
			{"tipe":"A","frase":"int index = threadIdx.x - blockIdx.x * hilos_por_bloque;","R":false},
			{"tipe":"B","frase":"int index = threadIdx.x + blockIdx.x * hilos_por_bloque;","R":true},
			{"tipe":"C","frase":"int index = threadIdx.x + blockIdx.x * num_hilos_totales;","R":false},
			{"INFO":"KFDDoWdpbmEgNDMgZGUgQ1VEQS0xKS4gVGFsIGNvbW8gc2UgaW5kaWNhLCBsb3MgYmxvcXVlcyB0aWVuZW4gdW4gbsO6bWVybyBkZSBoaWxvcyBwcmVmaWphZG8sIHBvciBsbyBxdWUgaGFicsOhIHF1ZSBkZXNwbGF6YXJzZSBwb3IgZWxsb3MgdGVuaWVuZG8gZW4gY3VlbnRhIGVsIG7Dum1lcm8gZGUgaGlsb3MgcG9yIGJsb3F1ZSBleGlzdGVudGVzLg=="}
		],
		"Difficulty":"medium",
		"tags":["CUDA", "aceleración"]
	},
	{
		"tipo":"CUDA",
		"Q":"Cual es alguna de las diferencias entre una CPU y una GPU:__",
		"options":
		[
			{"tipe":"A","frase":"Más transistores dedicados al procesamiento de datos y menos a la captura de datos y control de flujo.","R":true},
			{"tipe":"B","frase":"Mayor tamaño de memoria caché para una mayor captura de datos.","R":false},
			{"tipe":"C","frase":"Más transistores para el procesamiento de datos y mayor control de flujo.","R":false},
			{"tipe":"D","frase":"Ninguna de las anteriores.","R":false},
			{"INFO":"VHJhbnNwYXJlbmNpYSA2IGRlbCB0ZW1hIDcgc29icmUgQ1VEQS0xIGVuIGxhIHF1ZSBzZSBpbmRpY2FuIGxhcyBjYXJhY3RlcsOtc3RpY2FzIGRlIHVuYSBHUFUu"}
		],
		"Difficulty":"medium",
		"tags":["CUDA"]
	},
	{
		"tipo":"CUDA",
		"Q":"En CUDA, declarar los bloques y los hilos del siguiente modo <<N/THREADS_PER_BLOCK,THREADS_PER_BLOCK>>> es para:__",
		"options":
		[
			{"tipe":"A","frase":"Asignar los datos a cada bloque correspondiente.","R":true},
			{"tipe":"B","frase":"Asignar los datos a cada hilo correspondiente.","R":true},
			{"tipe":"C","frase":"Calcular los suficientes bloques para todos los datos en caso de que la primera división no sea exacta ya que tomaría un bloque menos.","R":true},
			{"tipe":"D","frase":"Calcular el número de hilos por bloque.","R":false},
			{"INFO":"U2kgbGEgcHJpbWVyYSBkaXZpc2nDs24gbm8gZXMgZXhhY3RhLCBhbCByZWFsaXphciBsYSBmdW5jacOzbiBzdWVsbyBzZSBkZWNsYXJhcsOtYSB1biBibG9xdWUgbWVub3MgeSBubyBzZSBjdWJyaXLDrWFuIHRvZG9zIGxvcyBkYXRvcywgc2kgY3VhbmRvIGVzdG8gc3VjZWRlIHNlIGRlY2xhcmEgdW4gYmxvcXVlIHBvciBlbmNpbWEgYXVucXVlIGhheWEgaGlsb3MgZGVsIMO6bHRpbW8gYmxvcXVlIHF1ZSBubyByZWFsaWNlbiBwcm9jZXNhbWllbnRvIHBlcm8gc2UgYXNpZ25hcsOhbiB0b2RvcyBsb3MgZGF0b3MgYWwgcHJvY2VzYW1pZW50by4NCg=="}
		],
		"Difficulty":"easy",
		"tags":["CUDA", "memoria distribuida", "scope"],
		"comments":["RW4gY2FzbyBkZSBxdWUgZWwgdGFtYcOxbyB0b3RhbCBkZWwgYXJyYXkgZGUgZGF0b3Mgbm8gc2VhIGRpdmlzaWJsZSBlbnRyZSBlbCBuw7ptZXJvIGRlIHRocmVhZHMgcG9yIGJsb3F1ZSB5IG5vIHF1ZWRlIG5pbmfDum4gdHJvem8gZGVsIGFycmF5IHNpbiBwcm9jZXNhciBhdW5xdWUgZGUgZXN0YQ0KZm9ybWEgcHVlZGEgc29icmFyIGFsZ8O6biBoaWxvIHF1ZSBubyBvcGVyZSBuaW5nw7puIGVsZW1lbnRvIGRlIGxhIG1hdHJpeiwgc2Ugc29sdWNpb25hcsOtYSBjb24gKE4gKyBUSFJFQURTX1BFUl9CTE9DSyAtIDEpIC8gVEhSRUFEU19QRVJfQkxPQ0ssIFRIUkVBRFNfUEVSX0JMT0NLDQo="]
	},				
	{
		"tipo":"CUDA",
		"Q":"En CUDA, ¿de qué forma afecta la modificación de las diferentes dimensiones de los Grid, tanto de los hilos como de los bloques, a la ejecución de un programa?__",
		"options":
		[
			{"tipe":"A","frase":"Si re-dimensionamos correctamente, la nueva distribución podría mejorar el tiempo de ejecución y, además, dar el resultado esperado.","R":true},
			{"tipe":"B","frase":"Aunque re-dimensionemos correctamente, la nueva distribución no proporcionará el resultado deseado.","R":false},
			{"tipe":"C","frase":"Para garantizar la correcta ejecución de un determinado programa, hay que ceñirse a distribuciones de dimensiones cuadradas.","R":false},
			{"INFO":"RGVwZW5kaWVuZG8gZGUgbGEgYXJxdWl0ZWN0dXJhIGRlbCBEZXZpY2UgeSBkZSBsYXMgY2FyYWN0ZXLDrXN0aWNhcyBkZWwgcHJvZ3JhbWEgYSBlamVjdXRhciBlbiBDVURBLCBtb2RpZmljYXIgY29ycmVjdGFtZW50ZSBsYXMgZGltZW5zaW9uZXMgZGUgbG9zIEdyaWQgeSBjYW1iaWFyIGVsIG1hcGVhZG8gZGUgbGEgbWF0cml6IGVuIGxvcyBkaWZlcmVudGVzIGJsb3F1ZXMgZSBoaWxvcywgcG9kcsOtYSBtZWpvcmFyIGVsIGFjY2VzbyBhIGxvcyBkYXRvcyBkZSBmb3JtYSBxdWUgcmVkdXpjYW1vcyBlbCBuw7ptZXJvIGRlIGl0ZXJhY2lvbmVzIG5lY2VzYXJpYXMuIEVzIGltcG9ydGFudGUgdGVuZXIgZW4gY3VlbnRhIHF1ZSBjdWFuZG8gcmUtZGltZW5zaW9uYW1vcyBsb3MgR3JpZCwgZGViZW1vcyBjb21wcm9iYXIgcXVlIGVsIG7Dum1lcm8gZGUgaGlsb3Mgc2VhIGVsIGFkZWN1YWRvIHkgbmVjZXNhcmlvIHBhcmEgbGFzIGRpbWVuc2lvbmVzIGRlbCBwcm9ibGVtYS4="}
		],
		"Difficulty":"easy / medium",
		"tags":["",]
	},
	{
		"tipo":"CUDA",
		"Q":"¿Cual es la afirmación correcta sobre CUDA?__",
		"options":
		[
			{"tipe":"A","frase":"Es un lenguaje de programación","R":false},
			{"tipe":"B","frase":"Es una plataforma de paralelización","R":true},
			{"tipe":"C","frase":"A y B son correctas","R":true},
			{"tipe":"D","frase":"N / A","R":false},
			{"INFO":"Q3VkYSBlcyB1bmEgcGxhdGFmb3JtYSBkZSBwYXJhbGVsaXphY2nDs24sIG5vIGVzIHVuIGxlbmd1YWplIGRlIHByb2dyYW1hY2nDs24u"}
		],
		"Difficulty":"easy",
		"tags":["CUDA"]
	},	
	{
		"tipo":"CUDA",
		"Q":"En cuanto a rendimiento a nivel de instrucción con CUDA ¿Cómo podemos máximizar el ancho de banda efectivo?:__",
		"options":
		[
			{"tipe":"A","frase":"Maximizar los accesos a memoria global.","R":false},
			{"tipe":"B","frase":"Solapar comunicación y computación.","R":true},
			{"tipe":"C","frase":"Minimizar coalescing en los accesos a memoria global","R":false},
			{"INFO":"UGFyYSBtYXhpbWl6YXIgZWwgYW5jaG8gZGUgYmFuZGEgZWZlY3Rpdm8sIHRlbmVtb3MgcXVlOg0KDQogICAgTWF4aW1pemFyIGVsIHVzbyBkZSBsYSBtZW1vcmlhIGNvbXBhcnRpZGENCiAgICBNaW5pbWl6YXIgbG9zIGFjY2Vzb3MgYSBtZW1vcmlhIGdsb2JhbA0KICAgIE1heGltaXphciBjb2FsZXNjaW5nIGVuIGxvcyBhY2Nlc29zIGEgbWVtb3JpYSBnbG9iYWwNCiAgICBTb2xhcGFyIGNvbXVuaWNhY2nDs24geSBjb21wdXRhY2nDs24NCg0K"}
		],
		"Difficulty":"very hard",
		"tags":["aceleración", "CUDA",]
	},
    {
    	"tipo":"CUDA",
		"Q":"En CUDA, la productividad a nivel de instrucción depende de::__",
		"options":
		[
			{"tipe":"A","frase":"<ul><li>Maximizar el uso de la memoria compartida</li><li>Minimizar los accesos a memoria global</li><li>Instrucciones para accesos a memoria con menos latencia</li></ul>","R":false},
			{"tipe":"B","frase":"<ul><li>Número de operaciones</li><li>Latencia de la memoria</li><li>Ancho de banda de la memoria</li></ul>","R":true},
			{"tipe":"C","frase":"Ninguna de las anteriores es correcta","R":false},
			{"INFO":""}
		],
		"Difficulty":"hard",
		"tags":["aceleración","CUDA",]
	},
	{
		"tipo":"CUDA",
		"Q":"En la clasificación de arquitecturas, CUDA se encuentra dentro de::__",
		"options":
		[
			{"tipe":"A","frase":"SISD - Single Instruction, Single Data Stream","R":false},
			{"tipe":"B","frase":"SIMD - Single Instruction, Multiple Data Stream","R":true},
			{"tipe":"C","frase":"MISD - Multiple Instruction, Single Data Stream","R":false},
			{"tipe":"D","frase":"MIMD - Multiple Instruction, Multiple Data Stream","R":false},
			{"INFO":""}
		],
		"Difficulty":"easy",
		"tags":["CUDA",]
	},				
	{
		"tipo":"CUDA",
		"Q":"¿Qué tipo de arquitectura de memoria emplea CUDA?:__",
		"options":
		[
			{"tipe":"A","frase":"Arquitectura de Memoria Compartida UMA","R":true},
			{"tipe":"B","frase":"Arquitectura de Memoria Compartida NUMA","R":false},
			{"tipe":"C","frase":"Arquitectura de Memoria Distribuida","R":false},
			{"INFO":""}
		],
		"Difficulty":"very easy",
		"tags":["CUDA", "Memoria Compartida", "aceleración",]
	},
	{
		"tipo":"CUDA",
		"Q":"La palabra clave de CUDA C/C++ '__global__' indica que: __",
		"options":
		[
			{"tipe":"A","frase":"La función se llama y se ejecuta en el dispositivo.","R":false},
			{"tipe":"B","frase":"La función se llama en el dispositivo y se ejecuta en el anfitrión (host).","R":false},
			{"tipe":"C","frase":"La función se llama y se ejecuta en el anfitrión (host)","R":false},
			{"tipe":"D","frase":"La función se llama en el anfitrión (host) y se ejecuta en el dispositivo.","R":true},
			{"INFO":"DQpFbCBjb21waWxhZG9yIGRlIENVREEgbnZjYyBzZXBhcmEgZWwgY8OzZGlnbyBmdWVudGUgZW50cmUgY29tcG9uZW50ZXMgZGVsIGhvc3QgeSBkZWwgZGlzcG9zaXRpdm8sIGRlIHRhbCBmb3JtYSBxdWUgbGFzIGZ1bmNpb25lcyBkZWwgZGlzcG9zaXRpdm8gc2UgcHJvY2VzYW4gcG9yIGVsIGNvbXBpbGFkb3IgZGUgTlZJRElBIHkgbGFzIGZ1bmNpb25lcyBkZWwgaG9zdCBzZSBwcm9jZXNhbiBwb3IgZWwgY29tcGlsYWRvciBlc3TDoW5kYXIgZGVsIHByb3BpbyBob3N0LiBQb3IgbG8gdGFudG8sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhbGFicmEgY2xhdmUgIl9fZ2xvYmFsX18iIGVuIGVsIGPDs2RpZ28gZXNjcml0byBlbiBlbCBob3N0LCBzZSBpbmRpY2EgcXVlIGVzYSBmdW5jacOzbiBkZWJlIHNlciBlamVjdXRhZGEgZW4gZWwgZGlzcG9zaXRpdm8u"}
		],
		"Difficulty":"medium",
		"tags":["CUDA", "paralelización",]
	},
	{
		"tipo":"CUDA",
		"Q":"En un 'kernel launch' como el siguiente:<br>mykernel<<<3,2>>>();<br>Los números indicados dentro de los brackets triples representan:__",
		"options":
		[
			{"tipe":"A","frase":"Los argumentos necesarios para el funcionamiento de la función.","R":false},
			{"tipe":"B","frase":"Que el kernel se ejecutará con 3 hilos y 2 bloques.","R":false},
			{"tipe":"C","frase":"Que el kernel se ejecutará con 2 hilos y 3 bloques.","R":true},
			{"tipe":"D","frase":"Ninguna de las anteriores es correcta.","R":false},
			{"INFO":"TGEgcmVzcHVlc3RhIGNvcnJlY3RhIGVzIGxhIGMsIHB1ZXN0byBxdWUgZWwgcHJpbWVyIHBhcsOhbWV0cm8gcXVlIHZhIGVudHJlIGxvcyBicmFja2V0cyB0cmlwbGVzIGluZGljYSBlbCBuw7ptZXJvIGRlIGhpbG9zLCBtaWVudHJhcyBxdWUgZWwgc2VndW5kbyBwYXLDoW1ldHJvIGRldGVybWluYSBlbCBuw7ptZXJvIGRlIGJsb3F1ZXMsIHNvYnJlIGxvcyBxdWUgc2UgZWplY3V0YXLDoSBlbCBrZXJuZWwu"}
		],
		"Difficulty":" easy / medium",
		"tags":["CUDA",]
	},
	{
		"tipo":"CUDA",
		"Q":"Seleccione la respuesta correcta sobre la llamada MPI_Wait:__",
		"options":
		[
			{"tipe":"A","frase":"Realiza un envío no bloqueante","R":false},
			{"tipe":"B","frase":"Es una llamada no-bloqueante","R":false},
			{"tipe":"C","frase":"Se útiliza solamente para los envíos de datos","R":false},
			{"tipe":"D","frase":"Se bloquea hasta que la operación de comunicación se complete","R":true},
			{"tipe":"E","frase":"Chequea el estado de la operación de envío o recepción y retorna enseguda","R":false},
			{"INFO":"TVBJX1dhaXQgZXMgdW5hIGxsYW1hZGEgYmxvcXVlYW50ZSB5IHJldG9ybmEgY3VhbmRvIGxhIG9wZXJhY2nDs24gZGUgZW52w61vIG8gcmVjZXBjacOzbiBzZSBjb21wbGV0YS4="}
		],
		"Difficulty":"easy",
		"tags":["MPI", "paso de mensajes", "memoria distribuida",]
	},

			
	
]
}
