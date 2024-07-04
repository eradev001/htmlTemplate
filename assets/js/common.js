// Copy the code 
function copyCode(button, codeId) {
            const codeBox = document.getElementById(codeId);
            const code = codeBox.textContent;
            navigator.clipboard.writeText(code).then(() => {
                alert('Code copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        }