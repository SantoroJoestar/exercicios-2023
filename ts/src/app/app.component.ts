import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  // Função para alternar a visibilidade do texto
  toggleText() {
    const mais = document.getElementById('mais') as HTMLElement;
    const botao = document.querySelector('.btn-show-more') as HTMLButtonElement;

    if (mais.style.display === 'none' || mais.style.display === '') {
      mais.style.display = 'block';
    } else {
      mais.style.display = 'none';
    }
  }

  showTopicSendAndBlur() {
    this.showTopicSend();
    this.showBlur();
  }

  showTopicSend() {
    const topicSend = document.getElementById('topic-send') as HTMLElement;
    const botao = document.querySelector('.button-topic') as HTMLButtonElement;

    if (topicSend.style.display === 'none' || topicSend.style.display === '') {
      topicSend.style.display = 'block';
    } else {
      topicSend.style.display = 'none';
    }

  }

  showBlur() {

   console.log("entrei na show blur")
    const blur = document.getElementById('blur') as HTMLElement;
    const botao = document.querySelector('.button-topic') as HTMLButtonElement;

    if (blur.style.display === 'none' || blur.style.display === '') {
      console.log("Entrei no primeiro if")
      blur.style.display = 'block';
    } else {
      console.log("entrei no else")
      blur.style.display = 'none';
    }

    console.log("sai da show blur")
  }

  showForm() {
    console.log("EXIBINDO FORMULÁRIO")

    const form = document.getElementById('formulario') as HTMLElement;
    const botaoForm = document.querySelector('.btn-create-topic') as HTMLButtonElement;

    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
      botaoForm.innerText = 'Fechar tópico'
    } else {
      form.style.display = 'none';
      botaoForm.innerText = 'Criar tópico'
    }
  }

  validateForm() {

    const subjectElements = document.querySelectorAll('.ops-topic-subject');

    subjectElements.forEach(function (subjectElement) {
      subjectElement.addEventListener('click', function () {
        console.log("TESTANDO TESTANDO TESTANDO");
        const divAnswereds = subjectElement.nextElementSibling as HTMLElement;

        if (divAnswereds && divAnswereds.classList.contains('answered-topics-questions')) {
          if (divAnswereds.style.display === 'none' || divAnswereds.style.display === '') {
            divAnswereds.style.display = 'block';
          } else {
            divAnswereds.style.display = 'none';
          }
        }
      });
    });


  }

}
