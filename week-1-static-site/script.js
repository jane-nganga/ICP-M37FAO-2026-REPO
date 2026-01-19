// Display current timestamp
function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    timestampElement.textContent = `Last loaded: ${now.toLocaleString()}`;
}

// Interactive button demo
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
    
    const demoBtn = document.getElementById('demoBtn');
    const output = document.getElementById('output');
    let clickCount = 0;
    
    demoBtn.addEventListener('click', function() {
        clickCount++;
        output.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}! This site is powered by AWS S3 and CloudFront.`;
        
        // Add animation
        output.style.opacity = '0';
        setTimeout(() => {
            output.style.transition = 'opacity 0.5s';
            output.style.opacity = '1';
        }, 10);
    });
});

// Log to console for verification
console.log('Static website successfully loaded from AWS S3!');
console.log('Repository: ICP-M37FAO-2026-REPO');
console.log('CloudFront CDN: Active');