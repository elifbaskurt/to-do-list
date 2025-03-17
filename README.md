# To-Do List Application

This project is a simple and user-friendly to-do list application developed using JavaScript.

## Features

- Add new tasks
- Search existing tasks
- Clear all tasks with a single click
- Delete individual tasks
- Prevent adding empty tasks
- Store all tasks in localStorage
- Notify users with alerts

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 4.0
- Font Awesome 4.7
- LocalStorage API

## Installation

To run the project on your local machine:

1. Clone this repository:
   ```
   git clone https://github.com/elifbaskurt/to-do-list.git
   ```
2. Navigate to the project directory:
   ```
   cd to-do-list
   ```
3. Open `index.html` in a browser.

## Usage

- To add a new task, enter text in the "Bir Todo Girin" field at the top and click the "Todo Ekleyin" button.
- To search tasks, use the "Bir Todo Arayın" field. Filtering happens in real-time.
- To delete any task, click the X icon on the right side of the task.
- To clear all tasks, use the "Tüm Taskları Temizleyin" button.
- Your tasks will persist even if you refresh the page, thanks to localStorage.

## Project Structure

- `index.html`: HTML structure of the application
- `app.js`: JavaScript file containing all application functionality

## Functions

- `addTodo()`: Add new task
- `addTodoToUI()`: Add task to the UI
- `addTodoToStorage()`: Add task to localStorage
- `showAlert()`: Display notification
- `deleteTodo()`: Delete task
- `deleteTodoFromStorage()`: Delete task from localStorage
- `loadAllTodosToUI()`: Load all tasks when the page loads
- `filterTodos()`: Filter tasks
- `clearAllTodos()`: Clear all tasks

## Contributing

1. Fork this repository
2. Create a new feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## Contact

Elif Başkurt - [GitHub](https://github.com/elifbaskurt)

Project Link: [https://github.com/elifbaskurt/to-do-list](https://github.com/elifbaskurt/to-do-list)
