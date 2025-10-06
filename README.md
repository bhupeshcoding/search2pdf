# Search2PDF - Free Book Finder

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

A Chrome browser extension that helps users quickly find and access free PDFs, ebooks, and academic papers directly from Google search results. Save time by identifying downloadable content at a glance with our intuitive interface.

## 🌟 Features

- **Smart PDF Search**: Automatically adds `filetype:pdf` and relevant search terms to find free downloadable books
- **Visual Indicators**: Highlights search results containing PDF links with green borders and book indicators
- **User-Friendly Interface**: Clean, modern popup interface for easy book searching
- **Google Integration**: Seamlessly works with Google search results
- **Customizable Search**: Supports specific topics, authors, or general subjects

## 📦 Installation

### From Chrome Web Store
*Coming soon - extension is currently in development*

### Manual Installation (Developer Mode)

1. **Download the Extension**:
   ```bash
   git clone https://github.com/bhupeshcoding/search2pdf.git
   cd search2pdf
   ```

2. **Open Chrome Extensions**:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right corner)

3. **Load the Extension**:
   - Click "Load unpacked"
   - Select the `search2pdf` folder containing the extension files

4. **Verify Installation**:
   - You should see the Search2PDF icon in your Chrome toolbar
   - The extension is now ready to use!

## 🚀 Usage

### Basic Search
1. Click the Search2PDF icon in your browser toolbar
2. Enter a book name, author, or topic in the search field
3. Click "Search Books" or press Enter
4. The extension will open Google search results with PDF-focused queries

### Search Tips
- **Specific Books**: Search for exact titles like "Introduction to Algorithms"
- **Authors**: Search by author name like "Stephen King" or "Jane Austen"
- **Topics**: Search for subjects like "machine learning" or "world history"
- **Academic Papers**: Search for research topics or paper titles

### How It Works
1. **Popup Interface**: Enter your search terms in the extension popup
2. **Smart Query Building**: Extension automatically adds:
   - `filetype:pdf` - restricts results to PDF files
   - `free download` - prioritizes free content
   - Excludes certain sites for better results
3. **Visual Enhancement**: On Google search results, PDF links are highlighted with:
   - Green borders around PDF results
   - "📚 Free Book PDF" indicators
   - Light green background for easy identification

## 🛠️ Technical Details

### Manifest V3
- Built using Chrome Extension Manifest Version 3
- Service worker-based background script
- Content script injection for Google search pages

### File Structure
```
search2pdf/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for tab management
├── content.js             # Google search results modification
├── popup.html             # Extension popup interface
├── popup.js               # Popup functionality
├── popup.css              # Popup styling
├── images/
│   └── icon16.png         # Extension icon
├── books.png              # Additional graphics
├── books1.png             # Additional graphics
├── prompt.md              # Development notes
├── prompt1.md             # Additional documentation
└── LICENSE                # BSD 3-Clause License
```

### Permissions Used
- `tabs`: For opening new search result tabs
- `activeTab`: For accessing the current tab
- Host permissions for Google search pages

## 🔧 Development

### Prerequisites
- Modern web browser (Chrome, Edge, etc.)
- Basic understanding of JavaScript and Chrome extensions

### Setup
1. Clone the repository
2. Load as unpacked extension (see Installation section)
3. Make your changes
4. Test in browser

### Code Style
- Well-documented JavaScript with JSDoc comments
- Consistent indentation and formatting
- Error handling for user feedback

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Areas for Improvement
- [ ] Firefox compatibility
- [ ] Additional search engine support
- [ ] Advanced filtering options
- [ ] Bookmark integration
- [ ] Dark mode support

## 📝 License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons and graphics from various free resources
- Google for providing the search infrastructure
- The open-source community for inspiration and tools

## 📞 Support

If you encounter any issues or have suggestions:

1. Check the [Issues](../../issues) page for similar problems
2. Create a new issue with detailed information
3. Include browser version and steps to reproduce

## 🔄 Version History

- **v1.0.0** - Initial release
  - Basic PDF search functionality
  - Google search integration
  - Visual PDF indicators
  - Clean popup interface

---

**Made with ❤️ for book lovers everywhere!**
