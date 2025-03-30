# Motivate Me - Daily Inspiration

A beautiful and responsive web application that provides daily motivational quotes and recommended videos to keep you inspired throughout your day.

## 🌟 Features

- **Daily Motivational Quotes**: Fresh, inspiring quotes that change every 24 hours
- **Smooth Animations**: Elegant fade transitions when quotes update
- **Embedded Videos**: Curated motivational videos from YouTube
- **Responsive Design**: Works perfectly on all devices - desktop, tablet, and mobile
- **Modern UI**: Clean, minimalist interface with beautiful gradients and typography
- **Ad-Free Experience**: YouTube videos embedded without ads or distractions

## 🚀 Live Demo

[View Live Demo](https://buzz39.github.io/MotivateMe)

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like gradients and backdrop-filter)
- JavaScript (Vanilla)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/buzz39/MotivateMe.git
```

2. Navigate to the project directory:
```bash
cd MotivateMe
```

3. Open `index.html` in your web browser or use a local server.

## 💻 Usage

Simply open the `index.html` file in your web browser. The quote will automatically update every 24 hours. The video section displays recommended motivational content that you can watch directly on the page.

## 🔧 Customization

### Adding New Quotes
To add new motivational quotes, edit the `quotes` array in `script.js`:

```javascript
const quotes = [
    {
        text: "Your new quote here",
        author: "Author Name"
    },
    // Add more quotes...
];
```

### Changing Videos
To update the recommended video, modify the iframe source in `index.html`:

```html
<iframe 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
    ...
></iframe>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [@your-github-username](https://github.com/buzz39)

## 🙏 Acknowledgments

- All quote authors for their inspiring words
- YouTube content creators for their motivational videos 