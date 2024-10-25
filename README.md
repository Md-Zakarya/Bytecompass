# Drag and Drop Editor

This project is a proof of concept (POC) for a drag-and-drop editor built with React. It allows users to drag components from a side panel and drop them onto a canvas, where they can be positioned and edited.

## Features

- **Drag and Drop**: Drag components from the side panel and drop them onto the canvas.
- **Editable Components**: Double-click on a component to edit its content.
- **Save and Load**: Save the current state of the canvas to local storage and load it later.
- **Clear Canvas**: Clear all components from the canvas.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/drag-and-drop-editor.git
    cd drag-and-drop-editor
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Deployment

This project is deployed at [https://bytecompass.vercel.app/](https://bytecompass.vercel.app/). To deploy your own version, you can use Vercel or any other static site hosting service.

## Project Structure

```plaintext
.gitignore
[eslint.config.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Ceslint.config.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Feslint.config.js%22%2C%22scheme%22%3A%22file%22%7D%7D)
[index.html](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Cindex.html%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%7D)
[package.json](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%7D)
[postcss.config.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Cpostcss.config.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fpostcss.config.js%22%2C%22scheme%22%3A%22file%22%7D%7D)
public/
[README.md](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%7D)
src/
    App.css
    [App.jsx](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%7D)
    assets/
    components/
        [Canvas.jsx](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Csrc%5C%5Ccomponents%5C%5CCanvas.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FCanvas.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FCanvas.jsx%22%2C%22scheme%22%3A%22file%22%7D%7D)
        [DraggableSection.jsx](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Csrc%5C%5Ccomponents%5C%5CDraggableSection.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FDraggableSection.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FDraggableSection.jsx%22%2C%22scheme%22%3A%22file%22%7D%7D)
        [SidePanel.jsx](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Csrc%5C%5Ccomponents%5C%5CSidePanel.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FSidePanel.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fcomponents%2FSidePanel.jsx%22%2C%22scheme%22%3A%22file%22%7D%7D)
    index.css
    [main.jsx](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Csrc%5C%5Cmain.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fmain.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fsrc%2Fmain.jsx%22%2C%22scheme%22%3A%22file%22%7D%7D)
[tailwind.config.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Ctailwind.config.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Ftailwind.config.js%22%2C%22scheme%22%3A%22file%22%7D%7D)
[vite.config.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Czakki%5C%5COneDrive%5C%5CDesktop%5C%5CBytecompass%5C%5Cvite.config.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fzakki%2FOneDrive%2FDesktop%2FBytecompass%2Fvite.config.js%22%2C%22scheme%22%3A%22file%22%7D%7D)
