/**
 * content.js
 * This script runs on Google search pages to highlight results that link to PDF files.
 * It scans the search results, finds links that are PDFs, and applies custom styling
 * to help users easily identify free book PDFs.
 *
 * Note: This script is injected on pages where a Google search was performed using the
 * "filetype:pdf" operator via our extension.
 */

// Run when the page loads
if (window.location.hostname.includes('google')) {
    // Initial highlighting
    highlightPdfLinks();
    
    // Set up a MutationObserver to detect when new search results are loaded
    const observer = new MutationObserver((mutations) => {
        // Re-run highlighting when the page content changes
        highlightPdfLinks();
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

/**
 * highlightPdfLinks
 * Finds search result items that contain PDF links and adds a visual indicator.
 */
function highlightPdfLinks() {
    // Select Google search result elements (Google uses various selectors for results)
    const selectors = ['.g', '.tF2Cxc', '.MjjYud'];
    let searchResults = [];
    
    // Try different selectors to find search results
    for (const selector of selectors) {
        const results = document.querySelectorAll(selector);
        if (results.length > 0) {
            searchResults = results;
            break;
        }
    }

    searchResults.forEach(result => {
        // Skip if already processed
        if (result.dataset.pdfHighlighted === 'true') return;
        
        // Mark as processed
        result.dataset.pdfHighlighted = 'true';
        
        // Find all links in the result
        const links = result.getElementsByTagName('a');
        let hasPdf = false;
        
        // Check if any link points to a PDF
        for (const link of links) {
            if (link.href && link.href.toLowerCase().includes('.pdf')) {
                hasPdf = true;
                break;
            }
        }
        
        if (hasPdf) {
            // Apply a custom green border and padding for emphasis
            result.style.border = '2px solid #4CAF50';
            result.style.borderRadius = '8px';
            result.style.padding = '12px';
            result.style.margin = '8px 0';
            result.style.backgroundColor = '#f0f8f0';
            
            // Add a PDF indicator
            let indicator = result.querySelector('.pdf-indicator');
            if (!indicator) {
                indicator = document.createElement('div');
                indicator.className = 'pdf-indicator';
                indicator.innerHTML = '📚 Free Book PDF';
                indicator.style.color = '#2E7D32';
                indicator.style.fontWeight = 'bold';
                indicator.style.marginBottom = '8px';
                indicator.style.fontSize = '14px';
                result.insertBefore(indicator, result.firstChild);
            }
        }
    });
}
