# Theme mode switching for Stoplight Elements

![Screenshot](https://github.com/user-attachments/assets/388db7c1-ede6-41da-9052-2a7c903a4645)

This is a simple script and stylesheet to enable automatic theme switching for Stoplight Elements based on the user's OS theme preference (light or dark mode). It listens for changes in the user's theme preference and updates the Stoplight Elements theme accordingly.

This project contains a modified stylesheet of a Nord theme for Prism.js, which is used by Stoplight Elements for syntax highlighting. It was adapted to work with the theme switching functionality and to ensure that the styles are applied correctly when the theme changes.

## Usage

To use this theme mode switching functionality with your Stoplight Elements, simply include the following lines in the `<head>` section of your HTML document, after including the Stoplight Elements script and stylesheet:

### Statically CDN

```html
<link rel="stylesheet" href="https://cdn.statically.io/gh/sirkadirov/stoplight-elements-auto-theme@main/styles.css?v=2">
<script src="https://cdn.statically.io/gh/sirkadirov/stoplight-elements-auto-theme@main/script.js?v=2"></script>
```

### JSDelivr CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sirkadirov/stoplight-elements-auto-theme@main/styles.css">
<script src="https://cdn.jsdelivr.net/gh/sirkadirov/stoplight-elements-auto-theme@main/script.js"></script>
```

## Credits

- The original [Nord theme](https://nordtheme.com/) was created by Arctic Ice Studio & Sven Greb, and enhanced by contributors.
- The theme was adapted for Prism.js by [Zane Hitchcoxc](https://github.com/zwhitchcox) and [Gabriel Ramos](https://github.com/gabrieluizramos), their work can be found in the official [Prism.js themes repository](https://github.com/PrismJS/prism-themes) on GitHub. Their work was licensed under the MIT License.
- The theme was further modified and adapted for usage with Stoplight Elements by [Yurii Kadirov](https://github.com/sirkadirov) for usage in Unisched, a mobile application that acts as a central hub for academic life, focusing on providing a smooth experience for students and staff of Ukrainian universities, and is licensed under the MIT License.
- Also, the theme switching script was created by [Yurii Kadirov](https://github.com/sirkadirov), and is licensed under the MIT License.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
