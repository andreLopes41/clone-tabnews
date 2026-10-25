function status(request, response) {
  response.status(200).json({'chave' : 'Programação é muito massa!'});
}

export default status;