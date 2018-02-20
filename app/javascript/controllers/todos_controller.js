import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "todos", "text", "completed", "todo", "submit" ]

  connect() {
    document.addEventListener('todos:create', event => {
      this.todosTarget.insertAdjacentHTML('beforeend', event.detail);
      this.textTarget.value = '';
      this.completedTarget.checked = false;
    });

    document.addEventListener('todos:update', event => {
      this.todoTargets.find(el => el.classList.contains('editing')).outerHTML = event.detail; 
    });
  }

  edit(event) {
    event.preventDefault();
    if (this.editing) {
      this.submitTargets.find(el => el.closest('.editing')).click();
    }
    this.todoTargets.find(el => el.contains(event.target)).classList.add('editing');
    this.editing = true;
  }

  submit() {
    this.editing = false;
  }

  get editing() {
    return this.data.get('editing') === 'true';
  }

  set editing(value) {
    this.data.set('editing', value);
  }
}
