
/**
 * popup.js
 * Handles the search functionality for the Free Book Finder extension.
 * Captures user input, appends "filetype:pdf" to enforce PDF results,
 * and sends a message to the background script to open a new tab with the search.
 * Includes error handling and user feedback.
 */

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchQuery');
    const searchBtn = document.getElementById('searchBtn');
    const statusEl = document.getElementById('status');
    
    // Focus the search input when the popup opens
    searchInput.focus();
    
    // Handle search button click
    searchBtn.addEventListener('click', handleSearch);
    
    // Also handle Enter key in the search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Function to handle the search
    function handleSearch() {
        const userQuery = searchInput.value.trim();
        
        // Validate input
        if (!userQuery) {
            showStatus('Please enter a search term', 'error');
            searchInput.focus();
            return;
        }
        
        // Show loading state
        setLoading(true);
        
        try {
            // Append the filetype operator for PDFs and additional search terms
            const searchTerms = [
                userQuery,
                'filetype:pdf',
                'free download',
                '-site:slideshare.net', // Exclude slideshare
                '-site:academia.edu'    // Exclude academia.edu
            ];
            
            const finalQuery = searchTerms.join(' ');
            
            // Construct the Google search URL
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`;
            
            // Send message to background script to open the new search tab
            chrome.runtime.sendMessage(
                { action: "openTab", url: googleSearchUrl },
                function(response) {
                    // Handle response from background script
                    if (chrome.runtime.lastError) {
                        showStatus('Error: Could not open search tab', 'error');
                        console.error(chrome.runtime.lastError);
                    } else {
                        showStatus('Searching for books...', 'success');
                        // Close the popup after a short delay
                        setTimeout(() => window.close(), 1000);
                    }
                    setLoading(false);
                }
            );
        } catch (error) {
            console.error('Error performing search:', error);
            showStatus('An error occurred. Please try again.', 'error');
            setLoading(false);
        }
    }
    
    // Show status message
    function showStatus(message, type = 'info') {
        statusEl.textContent = message;
        statusEl.className = 'status';
        statusEl.classList.add(type);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            statusEl.textContent = '';
            statusEl.className = 'status';
        }, 5000);
    }
    
    // Set loading state
    function setLoading(isLoading) {
        const btnText = searchBtn.querySelector('.btn-text');
        const btnIcon = searchBtn.querySelector('.btn-icon');
        
        if (isLoading) {
            searchBtn.disabled = true;
            btnText.textContent = 'Searching...';
            btnIcon.textContent = '⏳';
        } else {
            searchBtn.disabled = false;
            btnText.textContent = 'Search Books';
            btnIcon.textContent = '🔍';
        }
    }
});