// Initialize stats
let stats = {
    tasks: 0,
    hours: 0,
    goals: 0
};

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('productivityStats');
    if (saved) {
        stats = JSON.parse(saved);
        updateDisplay();
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('productivityStats', JSON.stringify(stats));
}

// Update display
function updateDisplay() {
    document.getElementById('tasks').textContent = stats.tasks;
    document.getElementById('hours').textContent = stats.hours;
    document.getElementById('goals').textContent = stats.goals;
}

// Add activity log
function addActivity(message) {
    const log = document.getElementById('activity-log');
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    log.insertBefore(item, log.firstChild);
    
    // Keep only last 10 activities
    while (log.children.length > 10) {
        log.removeChild(log.lastChild);
    }
}

// Button functions
function completeTask() {
    stats.tasks += 1;
    updateDisplay();
    saveStats();
    addActivity(`Task completed! Total: ${stats.tasks}`);
}

function addStudyHour() {
    stats.hours += 1;
    updateDisplay();
    saveStats();
    addActivity(`Study hour logged! Total: ${stats.hours} hours`);
}

function achieveGoal() {
    stats.goals += 1;
    updateDisplay();
    saveStats();
    addActivity(`Goal achieved! Total: ${stats.goals} goals`);
}

function resetStats() {
    stats = { tasks: 0, hours: 0, goals: 0 };
    updateDisplay();
    saveStats();
    addActivity('All stats have been reset');
}

// Form submission
document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('itemName').value;
    const value = parseInt(document.getElementById('itemValue').value);
    const category = document.getElementById('itemCategory').value;
    
    switch(category) {
        case 'task':
            stats.tasks += value;
            addActivity(`Completed ${value} tasks: ${name}`);
            break;
        case 'study':
            stats.hours += value;
            addActivity(`Added ${value} study hours: ${name}`);
            break;
        case 'goal':
            stats.goals += value;
            addActivity(`Achieved ${value} goals: ${name}`);
            break;
    }
    
    updateDisplay();
    saveStats();
    
    // Reset form
    this.reset();
    
    // Show success feedback
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '✓ Achievement Added!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1500);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', loadStats);

// Add some initial animation
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'slideIn 0.5s ease forwards';
        }, index * 100);
    });
});
