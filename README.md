# 🐝 Belinke
## 🚧 Create a fake LinkedIn profile to impress your friends
> Belinke is a simple tool that allows you to customize a fake LinkedIn profile to reflect your future goals, or just to have some fun, or mock a friend

## ✨ Features
- [x] Customize profile data (name, title, location, followers, connections, images)
- [x] Add, edit, and remove work experiences
- [x] Add, edit, and remove recommendations received
- [x] Download profile as a PNG image
- [x] Save draft to local storage
- [ ] Dark Mode for the editor (Profile preview remains light)
- [ ] More customization options to come!

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18.x or later recommended) and npm/yarn/pnpm installed.

### ⚙️ Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:meunomeebero/belinke.git
    cd belinke
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
    Or using pnpm:
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🛠️ How to Use

1.  **Launch the Application:** Open the app in your browser (typically at `http://localhost:3000` if running locally).
2.  **Customize Your Profile:**
    *   Use the sidebar on the left to edit your profile information.
    *   **Basic Info:** Fill in your name, title, location, followers, connections, profile image URL, and cover image URL.
    *   **Experiences:** Click "Add Experience" to add new roles. Fill in the title, company, duration, description, and company image URL. You can remove experiences using the trash icon.
    *   **Recommendations:** Click "Add Recommendation" to add new testimonials. Fill in the recommendation text, author's name, title, context, and author image URL. You can remove recommendations using the trash icon.
3.  **Preview:** The right side of the screen shows a live preview of how your LinkedIn profile will look.
4.  **Save Draft:** Click the "Salvar Rascunho" (Save Draft) button in the sidebar to save your current progress to your browser's local storage. This way, you can close the app and resume later.
5.  **Download PNG:** Once you're happy with your profile, click the "Download PNG" button in the sidebar. The application will generate a PNG image of your customized profile and download it to your computer.

## 🎨 Theming

The application editor supports theming (e.g., dark mode). However, the profile preview area itself is intentionally kept separate from the application theme to ensure the generated PNG accurately reflects a standard LinkedIn profile appearance.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.




