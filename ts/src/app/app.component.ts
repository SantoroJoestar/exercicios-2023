import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'DevChuva';

  ngAfterViewInit(){
   this.validateForm();
  }

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
    this.hideTopic();
  }

  showTopicSend() {
    const topicSend = document.getElementById('topic-send') as HTMLElement;
    const botao = document.querySelector('.button-topic') as HTMLButtonElement;
    const topic = document.querySelector('.topic') as HTMLElement;

    if (topicSend.style.display === 'none' || topicSend.style.display === '') {
      topicSend.style.display = 'block';
      topic.style.display = 'block';
    } else {
      topicSend.style.display = 'none';
      topic.style.display = 'none';
    }
  }

  hideTopic() {
    const topic = document.querySelector('.topic') as HTMLElement;
    const form = document.getElementById('form') as HTMLElement;
    const buttonCreateTopic = document.getElementById(
      'btn-create-topic'
    ) as HTMLElement;
    topic.style.display = 'none';
    form.style.display = 'none';
    buttonCreateTopic.style.display = 'block';
  }

  showBlur() {
    const blur = document.getElementById('blur') as HTMLElement;
    const botao = document.querySelector('.button-topic') as HTMLButtonElement;

    if (blur.style.display === 'none' || blur.style.display === '') {
      console.log('Entrei no primeiro if');
      blur.style.display = 'block';
    } else {
      console.log('entrei no else');
      blur.style.display = 'none';
    }
  }

  showForm() {
    const form = document.getElementById('form') as HTMLElement;
    const topic = document.querySelector('.topic') as HTMLElement;
    const topicSend = document.getElementById('topic-send') as HTMLElement;
    const blur = document.getElementById('blur') as HTMLElement;
    const botaoForm = document.querySelector(
      '.btn-create-topic'
    ) as HTMLButtonElement;

    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
      topic.style.display = 'none';
      topicSend.style.display = 'none';
      blur.style.display = 'none';
    } else {
      form.style.display = 'none';
      topic.style.display = 'block';
    }
  }

  validateForm() {
    const subjectElements = document.querySelectorAll('.ops-topic-subject');
    subjectElements.forEach(function (subjectElement) {
      subjectElement.addEventListener('click', function (event) {
        event.preventDefault();
        const divAnswereds = subjectElement.nextElementSibling as HTMLElement;

        if (
          divAnswereds &&
          divAnswereds.classList.contains('answered-topics-questions')
        ) {
          if (
            divAnswereds.style.display === 'none' ||
            divAnswereds.style.display === ''
          ) {
            divAnswereds.style.display = 'block';
          } else {
            divAnswereds.style.display = 'none';
          }
        }
      });
    });
  }
}
