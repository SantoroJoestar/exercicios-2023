import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'DevChuva';
  showTopic: boolean = true;
  showTopicSendAndBlur: boolean = false;
  showFormSection: boolean = false;
  showDiscussionSection: boolean = true;
  showQuestions: boolean = false;

  toggleText() {
    const mais = document.getElementById('mais') as HTMLElement;
    const botao = document.querySelector('.btn-show-more') as HTMLButtonElement;

    if (mais.style.display === 'none' || mais.style.display === '') {
      mais.style.display = 'block';
    } else {
      mais.style.display = 'none';
    }
  }

  showTopicSendAndBlurFunction() {
    this.showTopicSendAndBlur = !this.showTopicSendAndBlur;
    this.showFormSection = !this.showFormSection;
    this.showDiscussionSection = false;
  }

  showForm() {
    this.showFormSection = !this.showFormSection;
    this.showDiscussionSection = !this.showDiscussionSection;
  }

  createNewTopic() {
    this.showFormSection = true;
    this.showDiscussionSection = false;
    this.showTopicSendAndBlur = false;
  }

  toggleForm() {
    this.showQuestions = !this.showQuestions;
  }

}
