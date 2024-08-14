<script>
         // Redirect on attempting to open DevTools
        document.addEventListener('keydown', function(event) {
            if (
                (event.ctrlKey || event.shiftKey || (event.key === 'I' || event.key === 'C' || event.key === 'J')) || // Ctrl+Shift+I/C/J
                (event.ctrlKey || event.key === 'U') // Ctrl+U
            ) {
                event.preventDefault();
                window.location.href = "https://rumble.com";
            }
        });

        // Additional check for F12 key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12') {
                event.preventDefault();
                window.location.href = "https://rumble.com";
            }
        });
    </script>
