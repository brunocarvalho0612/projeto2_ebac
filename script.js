document.getElementById('contatoForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  const tabela = document.getElementById('contatosTable').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();

  const celulaNome = novaLinha.insertCell(0);
  const celulaTelefone = novaLinha.insertCell(1);


  celulaNome.textContent = nome;
  celulaTelefone.textContent = telefone;

  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
});